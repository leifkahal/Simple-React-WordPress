<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta content-type="text/html" />
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/manifest.json" />
    <script src="<?php echo get_template_directory_uri(); ?>/js/config.js"></script>

    <title><?php echo the_title(); ?> | Hickory, North Carolina</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo the_title(); ?>" />
    <meta name="twitter:description" content="<?php echo the_excerpt(); ?>" />
    <meta name="description" content="<?php echo the_excerpt(); ?>" />
    <meta property="og:url" content="<?php echo the_permalink(); ?>" />
    <meta property="og:title" content="<?php echo the_title(); ?>" />
    <meta name="keywords" content="" />
    <meta property="og:description" content="<?php echo the_excerpt(); ?>" />
    <meta name="twitter:image" content="<?php echo wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail'); ?>" />
    <meta property="og:image" content="<?php echo wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail'); ?>" />
    <meta property="og:image:url" content="<?php echo wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail'); ?>" />
    <meta property="og:image:secure_url" content="<?php echo wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail'); ?>" />
    <meta name="google-site-verification" content="v4E99j91Ut-CuYlmWmgiGU5pJKm6eTlfjhwM17-t5mc" />
    
    <?php wp_head(); ?>

    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="<?php echo get_template_directory_uri(); ?>/style.css">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="https://fonts.googleapis.com/css?family=Hind|Montserrat:200,400,600,800&display=swap">
    <link rel="stylesheet" as="style" onload="this.rel = 'stylesheet'" id="gutenberg_forms-cgb-style-css-css" href="http://admin.simplereactwordpress.com/wp-content/plugins/forms-gutenberg/dist/blocks.style.build.css" media="all">
    
</head>

<body>
<noscript>You need to enable JavaScript to run this app.</noscript>

    <?php wp_body_open(); ?>