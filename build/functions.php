<?php
/*
 *  Author: Todd Motto (Part 1) | @toddmotto
 *  Author: Leif Kahal | @leifkahal
 *  URL: simpleReactWP.com | @simpleReactWP
 */

/*------------------------------------*\
External Modules/Files
\*------------------------------------*/

// Load any external files you have here
function hs_image_editor_default_to_gd($editors)
{
    $gd_editor = 'WP_Image_Editor_GD';
    $editors = array_diff($editors, array(
        $gd_editor,
    ));
    array_unshift($editors, $gd_editor);
    return $editors;
}
add_filter('wp_image_editors', 'hs_image_editor_default_to_gd');

/*------------------------------------*\
Theme Support
\*------------------------------------*/

if (!isset($content_width)) {
    $content_width = 900;
}

if (function_exists('add_theme_support')) {
    // Add Menu Support
    add_theme_support('menus');

    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 700, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 350, 219, array('center', 'center')); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');
    // Add Support for Custom Backgrounds - Uncomment below if you're going to use
    /*add_theme_support('custom-background', array(
    'default-color' => 'FFF',
    'default-image' => get_template_directory_uri() . '/img/bg.jpg'
    ));*/

    // Add Support for Custom Header - Uncomment below if you're going to use
    /*add_theme_support('custom-header', array(
    'default-image'            => get_template_directory_uri() . '/img/headers/default.jpg',
    'header-text'            => false,
    'default-text-color'        => '000',
    'width'                => 1000,
    'height'            => 198,
    'random-default'        => false,
    'wp-head-callback'        => $wphead_cb,
    'admin-head-callback'        => $adminhead_cb,
    'admin-preview-callback'    => $adminpreview_cb
    ));*/

    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Localisation Support
    load_theme_textdomain('simpleReactWP', get_template_directory() . '/languages');
}

/*------------------------------------*\
Functions
\*------------------------------------*/

// simpleReactWP navigation
function simpleReactWP_nav()
{
    wp_nav_menu(array(
        'theme_location' => 'header-menu',
        'menu' => '',
        'container' => 'div',
        'container_class' => 'menu-{menu slug}-container',
        'container_id' => '',
        'menu_class' => 'menu',
        'menu_id' => '',
        'echo' => true,
        'fallback_cb' => 'wp_page_menu',
        'before' => '',
        'after' => '',
        'link_before' => '',
        'link_after' => '',
        'items_wrap' => '<ul>%3$s</ul>',
        'depth' => 0,
        'walker' => '',
    ));
}

/* Load simpleReactWP styles
function simpleReactWP_styles()
{
    wp_register_style('simpleReactWP', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('simpleReactWP'); // Enqueue it!

}
*/

// Register simpleReactWP Navigation
function register_srwp_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'simpleReactWP'), // Main Navigation

    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist)
{
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar')) {
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => __('Sidebar', 'simpleReactWP'),
        'description' => __('Description for this widget-area...', 'simpleReactWP'),
        'id' => 'widget-area-1',
        'before_widget' => '<!-- "%1$s" --><div id="%1$s" class="%2$s">',
        'after_widget' => '</div><!--end-->',
        'before_title' => '<!--',
        'after_title' => '-->',
    ));

    // Define Footer Widget Area 2
    register_sidebar(array(
        'name' => __('Footer', 'simpleReactWP'),
        'description' => __('Description for this widget-area...', 'simpleReactWP'),
        'id' => 'widget-area-2',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<!--',
        'after_title' => '-->',
    ));
}

// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style()
{
    global $wp_widget_factory;
    remove_action('wp_head', array(
        $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
        'recent_comments_style',
    ));
}

// Pagination for paged posts, Page 1, Page 2, Page 3, with Next and Previous Links, No plugin
function srwpwp_pagination()
{
    global $wp_query;
    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages,
    ));
}

// Custom Excerpts
function srwpwp_index($length) // Create 20 Word Callback for Index page Excerpts, call using srwpwp_excerpt('srwpwp_index');

{
    return 50;
}

// Remove Admin bar
function remove_admin_bar()
{
    return false;
}

// Remove 'text/css' from our enqueued stylesheet
function srwp_style_remove($tag)
{
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions($html)
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// Custom Gravatar in Settings > Discussion
function simpleReactWPgravatar($avatar_defaults)
{
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Custom Gravatar";
    return $avatar_defaults;
}

// Threaded Comments
function enable_threaded_comments()
{
    if (!is_admin()) {
        if (is_singular() and comments_open() and (get_option('thread_comments') == 1)) {
            wp_enqueue_script('comment-reply');
        }
    }
}

// Custom Comments Callback
function simpleReactWPcomments($comment, $args, $depth)
{
    $GLOBALS['comment'] = $comment;
    extract($args, EXTR_SKIP);

    if ('div' == $args['style']) {
        $tag = 'div';
        $add_below = 'comment';
    } else {
        $tag = 'li';
        $add_below = 'div-comment';
    }
    ?>
  <!-- heads up: starting < for the html tag (li or div) in the next line: -->
  <<?php echo $tag ?> <?php comment_class(empty($args['has_children']) ? '' : 'parent')?> id="comment-
<?php comment_ID()?>
">
    <?php if ('div' != $args['style']): ?>
      <div id="div-comment-<?php comment_ID()?>" class="comment-body">
      <?php
endif;
    ?>
      <div class="comment-author vcard">
        <?php if ($args['avatar_size'] != 0) {
        echo get_avatar($comment, $args['180']);
    }
    ?>
        <?php printf(__('<cite class="fn">%s</cite> <span class="says">says:</span>'), get_comment_author_link())?> </div>
      <?php if ($comment->comment_approved == '0'): ?>
        <em class="comment-awaiting-moderation">
          <?php _e('Your comment is awaiting moderation.')?>
        </em> <br />
      <?php
endif;
    ?>
      <div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars(get_comment_link($comment->comment_ID)) ?>">
          <?php
printf(__('%1$s at %2$s'), get_comment_date(), get_comment_time())
    ?>
        </a>
        <?php
edit_comment_link(__('(Edit)'), '  ', '');
    ?>
      </div>
      <?php comment_text()?>
      <div class="reply">
        <?php
comment_reply_link(array_merge($args, array(
        'add_below' => $add_below,
        'depth' => $depth,
        'max_depth' => $args['max_depth'],
    )))
    ?>
      </div>
      <?php if ('div' != $args['style']): ?>
      </div>
    <?php
endif;
    ?>
  <?php
}

/*------------------------------------*\
Actions + Filters + ShortCodes
\*------------------------------------*/

// Add Actions
add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments
add_action('wp_enqueue_scripts', 'simpleReactWP_styles'); // Add Theme Stylesheet
add_action('init', 'register_srwp_menu'); // Add simpleReactWP Menu
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()
add_action('init', 'srwpwp_pagination'); // Add our srwp Pagination
add_action('init', 'create_post_type_html5'); // Add our HTML5 Blank Custom Post Type
// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('avatar_defaults', 'simpleReactWPgravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
// add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('excerpt_more', 'srwp_blank_view_article'); // Add 'View Article' button instead of [...] for Excerpts
add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
add_filter('style_loader_tag', 'srwp_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images
// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether
// Shortcodes
add_shortcode('srwp_shortcode_demo', 'srwp_shortcode_demo'); // You can place [srwp_shortcode_demo] in Pages, Posts now.
add_shortcode('srwp_shortcode_demo_2', 'srwp_shortcode_demo_2'); // Place [srwp_shortcode_demo_2] in Pages, Posts now.
// Shortcodes above would be nested like this -
// [srwp_shortcode_demo] [srwp_shortcode_demo_2] Here's the page title! [/srwp_shortcode_demo_2] [/srwp_shortcode_demo]

/*------------------------------------*\
ShortCode Functions
\*------------------------------------*/

// Shortcode Demo with Nested Capability
function srwp_shortcode_demo($atts, $content = null)
{
    return '<div class="shortcode-demo">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes

}

// Shortcode Demo with simple <h2> tag
function srwp_shortcode_demo_2($atts, $content = null) // Demo Heading H2 shortcode, allows for nesting within above element. Fully expandable.

{
    return '<h2>' . $content . '</h2>';
}

/*------------------------------------*\
	Custom Post Types
\*------------------------------------*/

// Create 1 Custom Post type for a Demo, called HTML5-Blank
function create_post_type_html5()
{
    register_taxonomy_for_object_type('category', 'html5-blank'); // Register Taxonomies for Category
    register_taxonomy_for_object_type('post_tag', 'html5-blank');
    register_post_type('html5-blank', // Register Custom Post Type
        array(
        'labels' => array(
            'name' => __('HTML5 Blank Custom Post', 'html5blank'), // Rename these to suit
            'singular_name' => __('HTML5 Blank Custom Post', 'html5blank'),
            'add_new' => __('Add New', 'html5blank'),
            'add_new_item' => __('Add New HTML5 Blank Custom Post', 'html5blank'),
            'edit' => __('Edit', 'html5blank'),
            'edit_item' => __('Edit HTML5 Blank Custom Post', 'html5blank'),
            'new_item' => __('New HTML5 Blank Custom Post', 'html5blank'),
            'view' => __('View HTML5 Blank Custom Post', 'html5blank'),
            'view_item' => __('View HTML5 Blank Custom Post', 'html5blank'),
            'search_items' => __('Search HTML5 Blank Custom Post', 'html5blank'),
            'not_found' => __('No HTML5 Blank Custom Posts found', 'html5blank'),
            'not_found_in_trash' => __('No HTML5 Blank Custom Posts found in Trash', 'html5blank')
        ),
        'public' => true,
        'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
        'has_archive' => true,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ), // Go to Dashboard Custom HTML5 Blank post for supports
        'can_export' => true, // Allows export in Tools > Export
        'taxonomies' => array(
            'post_tag',
            'category'
        ) // Add Category and Post Tags support
    ));
}

/*----------------------------------------------------------------------
------------------------------------------------------------------------
------------------------------End of Part 1 ----------------------------
------------------------------------------------------------------------
------------------------------------------------------------------------*/

/*
Plugin Name: Gutenberg examples 01
 */
function gutenberg_examples_01_register_block()
{
    wp_register_script('gutenberg-examples-01', get_stylesheet_directory_uri('/js/block.js', __FILE__), array(
        'wp-blocks',
        'wp-element',
    ));

    register_block_type('gutenberg-examples/example-01-basic', array(
        'editor_script' => 'gutenberg-examples-01',
    ));
}
add_action('init', 'gutenberg_examples_01_register_block');

/**********************************************************************************************
 *******Change get_permalink to our React Url for admin links that point to frontend***********
 **********************************************************************************************
function my_get_permalink($url, $post, $leavename = false)
{
    return str_replace('admin.', '', $url);
}
add_filter('post_link', 'my_get_permalink', 10, 3);

function my_get_permalink2($url, $post, $leavename = false)
{
    return str_replace('admin.', '', $url);
}
add_filter('page_link', 'my_get_permalink2', 10, 3);

/*********************************************************************************************
 **********************************Comments****************************************************
 **********************************************************************************************
// allow anonomous comments
function filter_rest_allow_anonymous_comments() {
return true;
}
add_filter( 'rest_allow_anonymous_comments', 'filter_rest_allow_anonymous_comments' );

/**********************************************************************************************
 ******************************Admin Customizations*****************************************
 **********************************************************************************************/
// Custom Admin CSS
function admin_enqueue()
{
    wp_enqueue_style('admin-styles', get_template_directory_uri() . '/admin.css');
    wp_register_script('reactConfig', get_template_directory_uri() . '/js/config.js', array(
        'jquery',
    ), '1.0.0'); // Conditional script(s)
    wp_enqueue_script('reactConfig'); // Enqueue it!
}
add_action('admin_enqueue_scripts', 'admin_enqueue');

// add link to Reusable Blocks in admin sidebar
function linked_url()
{
    add_menu_page('linked_url', 'Reusable Blocks', 'read', 'edit.php?post_type=wp_block', '', 'dashicons-text', 30);
}
add_action('admin_menu', 'linked_url');

// Add excerpt support for pages
add_post_type_support('page', 'excerpt');

// CORS headers
function add_cors_http_header()
{
    header("Access-Control-Allow-Origin: *");
}
add_action('init', 'add_cors_http_header');

// remove 'read more' text
function modify_read_more_link()
{
    return '';
}
add_filter('the_content_more_link', 'modify_read_more_link');


// create endpoint for is_user_logged_in
function api_wp_logged_in()
{
    if (is_user_logged_in()) {
        $logged_in = true;
    } else {
        $logged_in = false;
    }
    return $logged_in;
}
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', 'logged_in', array(
        'methods' => 'GET',
        'callback' => 'api_wp_logged_in',
    ));
});

/*********************************************************************************************
 ********************************Custom permalink structure************************************
 **********************************************************************************************/
// force this custom permalink structure
add_action('init', function () {
    global $wp_rewrite;
    $wp_rewrite->set_permalink_structure('/post/%postname%/');
});


function remove_menu_items()
{
    remove_submenu_page('options-general.php', 'options-permalink.php');
}

add_action('admin_menu', 'remove_menu_items', 999);

/*********************************************************************************************
 ***********************************Widgets****************************************************
 **********************************************************************************************/
// hide unsupported widgets
function remove_widgets()
{
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Media_Audio');
    unregister_widget('WP_Widget_Media_Image');
    unregister_widget('WP_Widget_Media_Video');
    unregister_widget('WP_Widget_Media_Gallery');
    unregister_widget('WP_Widget_Search');
    unregister_widget('WP_Widget_Text');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Widget_Meta');
}
add_action('widgets_init', 'remove_widgets');

/*********************************************************************************************
 ***********************************Navigation*************************************************
 **********************************************************************************************/
// Add 'Header Menu' to API
function custom_wp_menu()
{

    // Get all locations
    $location = 'header-menu';
    $locations = get_nav_menu_locations();

    // Get object id by location
    $object = wp_get_nav_menu_object($locations[$location]);

    // Get menu items by menu name
    $items = wp_get_nav_menu_items($object->name, $args);

    // Return menu post objects
    if($items == false) {
        echo '[{ "ID": "5","title": "You haven\'t created a \'Header-Menu\'","url": "/"}]';
    }
    else {return $items;}

}

// create new endpoint route
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', 'menu.json', array(
        'methods' => 'GET',
        'callback' => 'custom_wp_menu',
    ));
});

/*********************************************************************************************
 ************************************Blog Info*************************************************
 **********************************************************************************************/
// Add Blog Info to API
function custom_wp_bloginfo()
{
    $home = str_replace(get_site_url(), '', get_option('page_on_front'));
    if (get_post_field('post_name', $home)) {
        $homePage = get_post_field('post_name', $home);
    } else {
        $homePage = 'blog/';
    }
    $data = array(
        get_bloginfo('name'),
        get_bloginfo('description'),
        $homePage,
        get_site_url() . '/wp-json/wp/v2',
        // company description
        get_option('footer_setting_field_2'),
        // blank
        get_option( 'branding_setting_field_3' ),
        // 404 background image 
        get_option( 'branding_setting_field_4' ),
        // site domain
        str_replace('http://admin.', '', get_site_url()),
    );

    // Create the response object
    $response = new WP_REST_Response($data);

    // Add a custom header
    $response->header('Vary', 'Accept-Encoding');
    $response->header('Expires', '10d');
    return $response;
}

// create new endpoint route
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', 'bloginfo', array(
        'methods' => 'GET',
        'callback' => 'custom_wp_bloginfo',
    ));
});

/*********************************************************************************************
 **********************Add rendered shortcodes to content endpoint****************************
 **********************************************************************************************/
function do_content_shortcode() {
    ob_start();
    the_content($post->ID);
    $str = ob_get_clean();
    $string = do_shortcode( $str );
    return stripslashes($string);
}

function register_do_page_shortcode()
{
    register_rest_field(array(
        'page',
    ), 'content_shortcode', array(
        'get_callback' => 'do_content_shortcode',
        'update_callback' => null,
        'schema' => null,
    ));
}

function register_do_post_shortcode()
{
    register_rest_field(array(
        'post',
    ), 'content_shortcode', array(
        'get_callback' => 'do_content_shortcode',
        'update_callback' => null,
        'schema' => null,
    ));
}
add_action('rest_api_init', 'register_do_page_shortcode');
add_action('rest_api_init', 'register_do_post_shortcode');

/*********************************************************************************************
 ************************Add featured Image to 'post' endpoint********************************
 **********************************************************************************************/
// retreive the featured image
function get_rest_featured_image($object, $field_name, $request)
{
    $img = get_the_post_thumbnail_url($post->ID, 'custom-size');
    return $img;
}
// add featured image to 'post' and 'page' api results
function register_post_images()
{
    register_rest_field(array(
        'post',
    ), 'fimg_url', array(
        'get_callback' => 'get_rest_featured_image',
        'update_callback' => null,
        'schema' => null,
    ));
}
add_action('rest_api_init', 'register_post_images');

function register_page_images()
{
    register_rest_field(array(
        'page',
    ), 'fimg_url', array(
        'get_callback' => 'get_rest_featured_image',
        'update_callback' => null,
        'schema' => null,
    ));
}
add_action('rest_api_init', 'register_page_images');

/*********************************************************************************************
 *************************Sidebar Custom API Endpoint******************************************
 **********************************************************************************************/
include_once get_template_directory() . '/includes/sidebar_custom_endpoint.php';

/*********************************************************************************************
 *************************Footer Custom API Endpoint******************************************
 **********************************************************************************************/
include_once get_template_directory() . '/includes/footer_custom_endpoint.php';

/*********************************************************************************************
 ***************************Adding an api endpoint to return the wp_head************************
 **********************************************************************************************/
function api_wp_head()
{
    ob_start();
    wp_head();
    $str = ob_get_clean();
    return stripslashes($str);
}
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', 'wp_head', array(
        'methods' => 'GET',
        'callback' => 'api_wp_head',
    ));
});
/*********************************************************************************************
 *****************Change customizer iframe to React frontend***********************************
 *********************************************************************************************/
function custom_customize_enqueue()
{
    wp_enqueue_script('custom-customize', get_template_directory_uri() . '/js/customizer-previewer.js', array(
        'jquery',
        'customize-controls',
    ), false, true);
}
add_action('customize_controls_enqueue_scripts', 'custom_customize_enqueue');

/*********************************************************************************************
 ********************Save congig.js for React when a setting is changed************************
 ********************in admin outside of 'React Configure' settings****************************
 *********************************************************************************************/
include_once get_template_directory() . '/includes/srwpConfig_write.php';

/*********************************************************************************************
 ***********Hide sections of the Customizer that do not work with SRWP*************************
 *********************************************************************************************/
function my_customize_register()
{
    global $wp_customize;
    $wp_customize->remove_section('static_front_page'); //Modify this line as needed

}
add_action('customize_register', 'my_customize_register', 11);

/*********************************************************************************************
 ******************Add 'React Configure' page to admin settings page***************************
 *********************************************************************************************/
function react_admin_menu()
{
    add_options_page(__('React Configure', 'my-textdomain'), __('React Configure', 'my-textdomain'), 'manage_options', 'react-config', 'react_config_css_contents');
}
add_action('admin_menu', 'react_admin_menu');

function react_config_css_contents()
{
    ?>
    <h1 class="admin-options">React Configure Settings</h1>
    </br>
    <form class="admin-options" method="POST" action="options.php">
      <?php
settings_fields('react-config');
    do_settings_sections('react-config');
    submit_button();
    ?>
    </form>
  <?php
}
include_once get_template_directory() . '/includes/srwpConfig.php';

/**********************************************************************************
 *********************Sidebar API Endpoint HTML ONLY********************************
 ***********************************************************************************
function wp_sidebar() {
// Replace your menu name, slug or ID carefully
ob_start();
dynamic_sidebar( 'widget-area-1');
$find = array(
get_site_url()
);
$replace = array(
''
);
$the_sidebar = str_replace($find, $replace, ob_get_clean() );
echo stripslashes(wp_kses_post( $the_sidebar));
//echo apply_filters('the_content', get_post_field('post_content', '195'));
}

// create new endpoint route
add_action( 'rest_api_init', function () {
register_rest_route( 'wp/v2', 'sidebar/html', array(
'methods' => 'GET',
'callback' => 'wp_sidebar',
) );
} );
 *******************************************
 ******************************************/
add_filter( 'big_image_size_threshold', '__return_false' );

/******************************************
function after_body_tag_code() {
    echo 123;
}
add_action( 'wp_body_open', 'fter_body_tag_code' );
******************************************/
?>