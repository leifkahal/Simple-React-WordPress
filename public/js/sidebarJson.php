<?php
header('Access-Control-Allow-Origin: *');
$contents = file_get_contents('http://admin.simplereactwordpress.com/wp-json/wp/v2/sidebar/json');
$find = array('var','Configs =');
$replace = array('','');
$configJs = str_replace($find,$replace, $contents);
echo 'var widgetContent = '.htmlentities($configJs);