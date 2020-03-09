<?php
header("Access-Control-Allow-Origin: *");
/*********************************************************************************************
 ********************Save congig.js for React when a setting is changed************************
 ********************in admin outside of 'React Configure' settings****************************
 *********************************************************************************************/
function config_save() {
  $home = str_replace( get_site_url(), '', get_option( 'page_on_front' ) );
  if ( get_post_field( 'post_name', $home ) ) { $homePage = get_post_field( 'post_name', $home );}
	else {$homePage = 'blog/';}
	
  if(get_option( 'bootstrap_setting_field_2' )) {$bootstrap_js = get_option( 'bootstrap_setting_field_2' );}
	else {$bootstrap_js = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js";}
	
  if(get_option( 'bootstrap_setting_field_3' )) {$jquery_js = get_option( 'bootstrap_setting_field_3' );}
	else {$jquery_js = "https://code.jquery.com/jquery-3.4.1.slim.min.js";}
	
  if(get_option( 'bootstrap_setting_field_4' )) {$popper_js = get_option( 'bootstrap_setting_field_4' );}
	else {$popper_js = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";}
	
  if(get_option( 'bootstrap_setting_field_1' )) {$bootstrapCss = get_option( 'bootstrap_setting_field_1' );}
  else {$bootstrapCss = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";}
    
  if(get_option( 'bootstrap_setting_field_5' )) {$navbarClasses = get_option( 'bootstrap_setting_field_5' ); }
  else {$navbarClasses = "navbar navbar-expand-lg navbar-dark bg-custom sticky-top";}

  if(get_option( 'bootstrap_setting_field_5' )) {$footerClasses = get_option( 'bootstrap_setting_field_5' ); }
  else {$footerClasses = "footer-dark bg-custom";}

  if(get_option( 'branding_setting_field_2' )) {$defaultThumb = get_option( 'branding_setting_field_2' );}
  else {$defaultThumb = "http://cdn.hundositebuilder.com/simple-react-wordpress-thumb.jpg";}
	
  $cont = '
var Configs = {
	"apiUrl": "' . get_site_url() . '/wp-json/wp/v2",
	"apiDomain": "' . get_site_url() . '",
	"reactUrl": "' . get_site_url() . '",
	"frontPage": "' . $homePage . '",
	"stylesheetUrls": [';

  $options = array();
  for ( $i = 1; $i <= 6; $i++ ) {
    if ( get_option( 'css_setting_field_' . $i ) ) {
      $options[] = get_option( 'css_setting_field_' . $i );
    }
  }
  $count = count( $options );
  $k = 0;
  foreach ( $options as $value ) {
    if ( $k == ( $count - 1 ) ) {
      $comma = '';
    } else {
      $comma = ',';
    }
    $cont .= '"' . $value . '"' . $comma;
    $k++;
  }

  $cont .= '],
	"bootstrapUrl": "' . $bootstrapCss . '",
	"fontUrls": [';
  $options2 = array();
  for ( $i = 1; $i <= 6; $i++ ) {
    if ( get_option( 'fonts_setting_field_' . $i ) ) {
      $options2[] = get_option( 'fonts_setting_field_' . $i );
    }
  }
  $count2 = count( $options2 );
  $k = 0;
  foreach ( $options2 as $value ) {
    if ( $k == ( $count2 - 1 ) ) {
      $comma = '';
    } else {
      $comma = ',';
    }
    $cont .= '"' . $value . '"' . $comma;
    $k++;
  }
  $cont .= '],
	"companyTitle": "' . get_option( 'footer_setting_field_1' ) . '",
	"companyDesc": "' . get_option( 'footer_setting_field_2' ) . '",
	"copyright": "© ' . date( 'Y' ) . ' ' . get_option( 'footer_setting_field_3' ) . '",
	"facebookUrl": "' . get_option( 'footer_setting_field_4' ) . '",
	"twitterUrl": "' . get_option( 'footer_setting_field_5' ) . '",
	"snapchatUrl": "' . get_option( 'footer_setting_field_6' ) . '",
	"instagramUrl": "' . get_option( 'footer_setting_field_7' ) . '",
	"bootstrapJs": "' . $bootstrap_js . '",
	"jqueryJs": "' . $jquery_js . '",
	"popperJs": "' . $popper_js . '",
  "defaultThumb": "' . $defaultThumb . '",
  "wpStylesheet": "' . get_template_directory_uri().'/style.css' . '",
  "brandingLogo": "' . get_option( 'branding_setting_field_1' ) . '",
  "fofBackground": "' . get_option( 'branding_setting_field_4' ) . '",
  "navbarClasses": "' . $navbarClasses . '",
  "footerClasses": "' . $footerClasses . '",

}';

  file_put_contents( get_template_directory() . '/js/config.js', $cont );
}
add_action( 'updated_option', 'config_save' );