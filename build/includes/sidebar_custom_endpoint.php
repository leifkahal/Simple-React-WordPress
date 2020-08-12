<?php
/*********************************************************************************************
 *************************Sidebar Custom API Endpoint******************************************
 **********************************************************************************************/
function wpse_show_widget($index, $id)
{
    global $wp_registered_widgets, $wp_registered_sidebars;
    $did_one = false;

    // Check if $id is a registered widget
    if (!isset($wp_registered_widgets[$id]) || !isset($wp_registered_widgets[$id]['params'][0])) {
        return false;
    }

    // Check if $index is a registered sidebar
    $sidebars_widgets = wp_get_sidebars_widgets();
    if (empty($wp_registered_sidebars[$index]) || empty($sidebars_widgets[$index]) || !is_array($sidebars_widgets[$index])) {
        return false;
    }

    // Construct $params
    $sidebar = $wp_registered_sidebars[$index];
    $params = array_merge(array(
        array_merge($sidebar, array(
            'widget_id' => $id,
            'widget_name' => $wp_registered_widgets[$id]['name'],
        )),
    ), (array) $wp_registered_widgets[$id]['params']);

    // Substitute HTML id and class attributes into before_widget
    $classname_ = '';
    foreach ((array) $wp_registered_widgets[$id]['classname'] as $cn) {
        if (is_string($cn)) {
            $classname_ .= '_' . $cn;
        } elseif (is_object($cn)) {
            $classname_ .= '_' . get_class($cn);
        }

    }
    $classname_ = ltrim($classname_, '_');
    $params[0]['before_widget'] = sprintf($params[0]['before_widget'], $id, $classname_);
    $params = apply_filters('dynamic_sidebar_params', $params);

    // Run the callback
    $callback = $wp_registered_widgets[$id]['callback'];
    if (is_callable($callback)) {
        call_user_func_array($callback, $params);
        $did_one = true;
    }

    return $did_one;
}

function sidebar_api()
{
    ob_start();
    dynamic_sidebar('widget-area-1');
    // get an array of the widget 'id' and 'class'
    preg_match_all('/<div.id=\"(?P<prop_val>[^"]+)".class=\"widget(?P<class>[^"]+)"/', ob_get_clean(), $match);
    $j = 0;
    $counter = count($match['prop_val']);
    if($counter == 0) {
        $defaultJson = '[{"title": "Widget Area Sidebar","links": [{"label": "You haven\'t added any widgets","url": "/","target": ""}]}]';
        return(json_decode($defaultJson));
    }
    echo '[';
    foreach ($match['prop_val'] as $index) {
        // get the option_name from WP_Widget Object via '$GLOBALS['wp_registered_widgets'][$index]'
        // this method was neccessary because using the classname
        // (obtained from the preg_match_all() above) with get_option()
        // did not always return a result.
        $option = (array) $GLOBALS['wp_registered_widgets'][$index];
        $widget_options = json_encode($option['callback'][0]);
        $value = json_decode($widget_options, true);
        $option_name = $value['option_name'];
        $w = get_option($option_name);

        $title = $w[$option['params'][0]['number']]['title'];
    
        // build json object
        echo '{"title": "' . $title . '","links": [';

        ob_start();
        wpse_show_widget('widget-area-1', $index);
        $string = ob_get_clean();

        // check if is 'custom html' widget
        preg_match_all('/(?s)(<!-- "custom_html-.*?"\s-->).*?(<!--end-->)/', $string, $html);
        // match all links and labels
        preg_match_all('/(<a\shref=(\"|\')(?P<url>[^"]+?)(\'|\"|\'.*|\".*)>(?P<title>[^"]+?)<\/a>)|(<a\starget=(\"|\')(?P<target>[^"]+?)(\'|\"|\'.*|\".*)\shref=(\"|\')(?P<url2>[^"]+?)(\'|\"|\'.*|\".*)>(?P<title2>[^"]+?)<\/a>)/', $string, $items);

        $index = -1;
        $i = 0;
        $count = count($items['title']);
        // if is 'custom html' widget create json
        if ($html[$count]) {
            $find = array();
            $replace = array();
            $fin = str_replace($find, $replace, $html[$count][0]);
            $final = json_encode($fin);
            echo '{"label": "", "html":' . $final . '}';
            if ($count >= $i + 2) {
                echo ',';
            }
            $i++;
        } else {
            foreach ($items['title'] as $item) {
                if ($items['url'][$i]) {
                    $itemUrl = str_replace(get_home_url(), '', $items['url'][$i]);
                } else {
                    $itemUrl = str_replace(get_home_url(), '', $items['url2'][$i]);
                }

                if ($items['title'][$i]) {
                    $itemTitle = $items['title'][$i];
                } else {
                    $itemTitle = $items['title2'][$i];
                }

                $str = $itemUrl;
                preg_match('/\/\d\d\d\d\/\d\d\//', $str, $archives);
                preg_match('/(?P<url>\/post\/.*\/)#comment.*/', $str, $comments);
                // if url is a match for an archive set URL to react router friendly
                if ($archives) {
                    $item_url = '/archive' . $archives[0];
                }
                // if url is a match for comments set URL to react router friendly

                else if ($comments) {
                    $item_url = $comments['url'];
                }
                // else the url is fine unaltered
                else {
                    $item_url = $itemUrl;
                }
                // create 'links' json
                echo '{"label": "' . $itemTitle . '","url": "' . $item_url . '","target": "' . $items['target'][$i] . '"}';
                if ($count >= $i + 2) {
                    echo ',';
                }
                $i++;
            }
        }
        echo ']}';
        // add comma if not last item in array
        if ($counter >= $j + 2) {
            echo ',';
        }
        $j++;
    }
    echo ']';
}

function sidebar_api_headers()
{
    $data = sidebar_api();
    // Create the response object
    $response = new WP_REST_Response($data);

    // Add a custom header
    $response->header('Vary', 'Accept-Encoding');
    $response->header('Expires', '10d');
    return $response;
}

// create new endpoint route
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', 'sidebar/json', array(
        'methods' => 'GET',
        'callback' => 'sidebar_api_headers',
    ));
});
