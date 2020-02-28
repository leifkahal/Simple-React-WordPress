<?php
/****BEGIN************************************************************************************
 ***************Admin 'React Configure' add_settings, register_setting**************************
 *********************************************************************************************/
// save React Configure Settings to wpdb
add_action( 'admin_init', 'react_config_settings_init' );

function react_config_settings_init() {

  // Branding Section
  add_settings_section( 'react_config_branding_settings', __( 'Branding', 'react-config-textdomain' ), 'branding_setting_section_callback', 'react-config' );
  add_settings_field( 'branding_setting_field_1', __( 'Logo URL', 'react-config-textdomain' ), 'branding_setting_field_markup', 'react-config', 'react_config_branding_settings' );
  register_setting( 'react-config', 'branding_setting_field_1' );
  register_setting( 'react-config', 'branding_setting_field_2' );
  register_setting( 'react-config', 'branding_setting_field_3' );
  register_setting( 'react-config', 'branding_setting_field_4' );

  function branding_setting_section_callback() {
    echo '<em>URLs to Bootstrap dependencies...leave blank to use default URLs</em>';
  }

  // Bootstrap Section
  add_settings_section( 'react_config_bootstrap_settings', __( 'Bootstrap', 'react-config-textdomain' ), 'bootstrap_setting_section_callback', 'react-config' );
  add_settings_field( 'bootstrap_setting_field_1', __( 'Bootstrap CSS URL', 'react-config-textdomain' ), 'bootstrap_setting_field_markup', 'react-config', 'react_config_bootstrap_settings' );
  register_setting( 'react-config', 'bootstrap_setting_field_1' );
  register_setting( 'react-config', 'bootstrap_setting_field_2' );
  register_setting( 'react-config', 'bootstrap_setting_field_3' );
  register_setting( 'react-config', 'bootstrap_setting_field_4' );
  register_setting( 'react-config', 'bootstrap_setting_field_5' );

  function bootstrap_setting_section_callback() {
    echo '<em>URLs to Bootstrap dependencies...leave blank to use default URLs</em>';
  }

  // Stylesheet Section
  add_settings_section( 'react_config_css_settings', __( 'Add Stylesheets', 'react-config-textdomain' ), 'css_setting_section_callback', 'react-config' );
  add_settings_field( 'css_setting_field_1', __( 'URL to stylesheet', 'react-config-textdomain' ), 'css_setting_field_markup', 'react-config', 'react_config_css_settings' );
  register_setting( 'react-config', 'css_setting_field_1' );
  register_setting( 'react-config', 'css_setting_field_2' );
  register_setting( 'react-config', 'css_setting_field_3' );
  register_setting( 'react-config', 'css_setting_field_4' );
  register_setting( 'react-config', 'css_setting_field_5' );
  register_setting( 'react-config', 'css_setting_field_6' );

  function css_setting_section_callback() {
    echo '<em>Add additional CSS to the React App. Will add &lt;link rel="stylesheet" href="URL to stylesheet" /&gt; to the &lt;head&gt;</em>';
  }

  // WebFont Section
  add_settings_section( 'react_config_fonts_settings', __( 'Add Web Fonts', 'react-config-textdomain' ), 'fonts_setting_section_callback', 'react-config' );
  add_settings_field( 'fonts_setting_field_1', __( 'URL to WebFont', 'react-config-textdomain' ), 'fonts_setting_field_markup', 'react-config', 'react_config_fonts_settings' );
  register_setting( 'react-config', 'fonts_setting_field_1' );
  register_setting( 'react-config', 'fonts_setting_field_2' );
  register_setting( 'react-config', 'fonts_setting_field_3' );
  register_setting( 'react-config', 'fonts_setting_field_4' );
  register_setting( 'react-config', 'fonts_setting_field_5' );
  register_setting( 'react-config', 'fonts_setting_field_6' );

  function fonts_setting_section_callback() {
    echo '<em>Add additional fonts to the React App. Will add &lt;link rel="stylesheet" href="URL to WebFont" /&gt; to the &lt;head&gt;</em>';
  }

  // Footer Section
  add_settings_section( 'react_config_footer_settings', __( 'Footer Info', 'react-config-textdomain' ), 'footer_setting_section_callback', 'react-config' );
  add_settings_field( 'footer_setting_field_1', __( 'Company Name', 'react-config-textdomain' ), 'footer_setting_field_markup', 'react-config', 'react_config_footer_settings' );
  register_setting( 'react-config', 'footer_setting_field_1' );
  register_setting( 'react-config', 'footer_setting_field_2' );
  register_setting( 'react-config', 'footer_setting_field_3' );
  register_setting( 'react-config', 'footer_setting_field_4' );
  register_setting( 'react-config', 'footer_setting_field_5' );
  register_setting( 'react-config', 'footer_setting_field_6' );
  register_setting( 'react-config', 'footer_setting_field_7' );

  function footer_setting_section_callback() {
    echo '<em>Information that will be displayed in the Footer.</em>';
  }

  // Closing brace for react_config_settings_init

}
/*********************************************************************************************
 ******************Stylesheet Section Markup*****************************************************
 *********************************************************************************************/
function css_setting_field_markup() {
  ?>
<input type="text" id="css_setting_field_1" name="css_setting_field_1" value="<?php echo get_option('css_setting_field_1'); ?>" size="50">
</td>
</tr>
<tr>
  <th scope="row">URL to Stylesheet</th>
  <td><input type="text" id="css_setting_field_2" name="css_setting_field_2" value="<?php echo get_option('css_setting_field_2'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to Stylesheet</th>
  <td><input type="text" id="css_setting_field_3" name="css_setting_field_3" value="<?php echo get_option('css_setting_field_3'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to Stylesheet</th>
  <td><input type="text" id="css_setting_field_4" name="css_setting_field_4" value="<?php echo get_option('css_setting_field_4'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to Stylesheet</th>
  <td><input type="text" id="css_setting_field_5" name="css_setting_field_5" value="<?php echo get_option('css_setting_field_5'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to Stylesheet</th>
  <td><input type="text" id="css_setting_field_6" name="css_setting_field_6" value="<?php echo get_option('css_setting_field_6'); ?>" size="50"></td>
  <?php
  }
  /*********************************************************************************************
   ******************WebFonts Section Markup*****************************************************
   *********************************************************************************************/
  function fonts_setting_field_markup() {
    ?>
  <input type="text" id="fonts_setting_field_1" name="fonts_setting_field_1" value="<?php echo get_option('fonts_setting_field_1'); ?>" size="50">
  </td>
</tr>
<tr>
  <th scope="row">URL to WebFont</th>
  <td><input type="text" id="fonts_setting_field_2" name="fonts_setting_field_2" value="<?php echo get_option('fonts_setting_field_2'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to WebFont</th>
  <td><input type="text" id="fonts_setting_field_3" name="fonts_setting_field_3" value="<?php echo get_option('fonts_setting_field_3'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to WebFont</th>
  <td><input type="text" id="fonts_setting_field_4" name="fonts_setting_field_4" value="<?php echo get_option('fonts_setting_field_4'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to WebFont</th>
  <td><input type="text" id="fonts_setting_field_5" name="fonts_setting_field_5" value="<?php echo get_option('fonts_setting_field_5'); ?>" size="50"></td>
<tr>
  <th scope="row">URL to WebFont</th>
  <td><input type="text" id="fonts_setting_field_6" name="fonts_setting_field_6" value="<?php echo get_option('fonts_setting_field_6'); ?>" size="50"></td>
  <?php
  }
  /*********************************************************************************************
   ******************Footer Section Markup*****************************************************
   *********************************************************************************************/
  function footer_setting_field_markup() {
    ?>
  <input type="text" id="footer_setting_field_1" name="footer_setting_field_1" value="<?php echo get_option('footer_setting_field_1'); ?>" size="50">
  </td>
</tr>
<tr>
  <th scope="row">Company Description</th>
  <td><textarea id="footer_setting_field_2" name="footer_setting_field_2" cols="51" rows="6"><?php echo get_option('footer_setting_field_2'); ?></textarea></td>
<tr>
  <th scope="row">Copyright/Powered by</th>
  <td><label>© <?php echo date('Y'); ?></label>
    <input type="text" id="footer_setting_field_3" name="footer_setting_field_3" value="<?php echo get_option('footer_setting_field_3'); ?>" size="42"></td>
<tr>
  <th scope="row">Facebook URL</th>
  <td><input type="text" id="footer_setting_field_4" name="footer_setting_field_4" value="<?php echo get_option('footer_setting_field_4'); ?>" size="50"></td>
<tr>
  <th scope="row">Twitter URL</th>
  <td><input type="text" id="footer_setting_field_5" name="footer_setting_field_5" value="<?php echo get_option('footer_setting_field_5'); ?>" size="50"></td>
<tr>
  <th scope="row">Snapchat URL</th>
  <td><input type="text" id="footer_setting_field_6" name="footer_setting_field_6" value="<?php echo get_option('footer_setting_field_6'); ?>" size="50"></td>
<tr>
  <th scope="row">Instagram URL</th>
  <td><input type="text" id="footer_setting_field_6" name="footer_setting_field_6" value="<?php echo get_option('footer_setting_field_7'); ?>" size="50"></td>
  <?php
  }

  /*********************************************************************************************
   ******************bootstrap Section Markup*****************************************************
   *********************************************************************************************/
  function bootstrap_setting_field_markup() {
    ?>
  <input type="text" id="bootstrap_setting_field_1" name="bootstrap_setting_field_1" value="<?php echo get_option('bootstrap_setting_field_1'); ?>" size="50">
  </td>
</tr>
<tr>
  <th scope="row">Bootstrap JS URL</th>
  <td><input type="text" id="bootstrap_setting_field_2" name="bootstrap_setting_field_2" value="<?php echo get_option('bootstrap_setting_field_2'); ?>" size="50"></td>
<tr>
  <th scope="row">jQuery URL</th>
  <td><input type="text" id="bootstrap_setting_field_3" name="bootstrap_setting_field_3" value="<?php echo get_option('bootstrap_setting_field_3'); ?>" size="50"></td>
<tr>
  <th scope="row">Popper.js URL</th>
  <td><input type="text" id="bootstrap_setting_field_4" name="bootstrap_setting_field_4" value="<?php echo get_option('bootstrap_setting_field_4'); ?>" size="50"></td>
  <tr>
  <th scope="row">Navbar Classes</th>
  <td><input type="text" id="bootstrap_setting_field_5" name="bootstrap_setting_field_5" value="<?php echo get_option('bootstrap_setting_field_5'); ?>" size="50"></td>
  <?php
  }

  /*********************************************************************************************
   ******************Branding Section Markup*****************************************************
   *********************************************************************************************/
  function branding_setting_field_markup() {
    ?>
  <input type="text" id="branding_setting_field_1" name="branding_setting_field_1" value="<?php echo get_option('branding_setting_field_1'); ?>" size="50">
  </td>
</tr>
<tr>
  <th scope="row">Default Thumb</th>
  <td><input type="text" id="branding_setting_field_2" name="branding_setting_field_2" value="<?php echo get_option('branding_setting_field_2'); ?>" size="50"></td>
<tr>
  <th scope="row">Default Sharing Image</th>
  <td><input type="text" id="branding_setting_field_3" name="branding_setting_field_3" value="<?php echo get_option('branding_setting_field_3'); ?>" size="50"></td>
<tr>
  <th scope="row">404 Backround Image</th>
  <td><input type="text" id="branding_setting_field_4" name="branding_setting_field_4" value="<?php echo get_option('branding_setting_field_4'); ?>" size="50"></td>
  <?php
  }
/****END**************************************************************************************
 ***************Admin React Configure add_settings, register_setting**************************
 *********************************************************************************************/