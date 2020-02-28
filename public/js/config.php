<?php
header('Access-Control-Allow-Origin: *');
$contents = file_get_contents('./config.js');
$find = array('var','Configs =');
$replace = array('','');
$configJs = str_replace($find,$replace, $contents);
echo $configJs;
