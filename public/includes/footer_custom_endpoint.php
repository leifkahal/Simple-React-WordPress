<?php
/*********************************************************************************************
 *************************Footer Custom API Endpoint******************************************
 **********************************************************************************************/
function footer_api() {
  ob_start();
  dynamic_sidebar( 'widget-area-2' );
  // get widget title
  preg_match_all( '/<div.id=\"(?P<prop_val>[^"]+)".class=\"widget(?P<class>[^"]+)".<!--(?P<title>[^"]+)-->/', ob_get_clean(), $match );
  $counter = count( $match[ 'prop_val' ] ) - 1;
  echo '[';
  for ( $j = 0; $j <= $counter; $j++ ) {

    $title = $match[ 'title' ][ $j ];
    // build json object
    echo '{"title": "' . $title . '","links": [';
    ob_start();
    wpse_show_widget( 'widget-area-2', $match[ 'prop_val' ][ $j ] );
    $string = ob_get_clean();
    // match all links and labels
    preg_match_all( '/(<a\shref=(\"|\')(?P<url>[^"]+?)(\'|\"|\'.*|\".*)>(?P<title>[^"]+?)<\/a>)|(<a\starget=(\"|\')(?P<target>[^"]+?)(\'|\"|\'.*|\".*)\shref=(\"|\')(?P<url2>[^"]+?)(\'|\"|\'.*|\".*)>(?P<title2>[^"]+?)<\/a>)/', $string, $items );
    
    $index = -1;
    $i = 0;
   
    $count = count( $items[ 'title' ] );
    foreach ( $items[ 'title' ] as $item ) {
      if($items[ 'url' ][ $i ]) {
        $itemUrl = str_replace( get_home_url(), '', $items[ 'url' ][ $i ] );
      } else {
        $itemUrl = str_replace( get_home_url(), '', $items[ 'url2' ][ $i ] );
      }

      if($items[ 'title' ][ $i ]) {
        $itemTitle = $items[ 'title' ][ $i ];
      } else {
        $itemTitle = $items[ 'title2' ][ $i ];
      }
      
      $str = $itemUrl;
      preg_match( '/\/\d\d\d\d\/\d\d\//', $str, $archives );
      preg_match( '/(?P<url>\/post\/.*\/)#comment.*/', $str, $comments );
      // if url is a match for an archive set URL to react router friendly
      if ( $archives ) {
        $item_url = '/archive' . $archives[ 0 ];
      }
      // if url is a match for comments set URL to react router friendly
      else if ( $comments ) {
        $item_url = $comments[ 'url' ];
      }
      // else the url is fine unaltered
      else {
        $item_url = $itemUrl;
      }
      // create 'links' json
      echo '{"label": "' . $itemTitle . '","url": "' . $item_url . '","target": "'. $items[ 'target' ][ $i ] . '"}';
      if ( $count >= $i + 2 ) {
        echo ',';
      }
      $i++;
    }
    echo ']}';
    // add comma if not last item in array
    if ( $counter >= $j + 1 ) {
      echo ',';
    }
  }
  echo ']';
}

function footer_api_headers() {
  $data = footer_api();
  // Create the response object
  $response = new WP_REST_Response( $data );

  // Add a custom header
  $response->header( 'Vary', 'Accept-Encoding' );
  $response->header( 'Expires', '10d' );
  return $response;
}

// create new endpoint route
add_action( 'rest_api_init', function () {
  register_rest_route( 'wp/v2', 'footer', array(
    'methods' => 'GET',
    'callback' => 'footer_api_headers',
  ) );
} );