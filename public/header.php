<!doctype html>
<html lang="en">

<head>
    <meta content-type="text/html" />
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/manifest.json" />
    <script src="<?php echo get_template_directory_uri(); ?>/js/config.js"></script>

    <title><?php echo the_title(); ?></title>
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

    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" id='wp-block-library-css'  href='<?php echo site_url(); ?>/wp-includes/css/dist/block-library/style.min.css?ver=5.3.2' media='all' />
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" id='wp-block-editor-css'  href='<?php echo site_url(); ?>/wp-includes/css/dist/block-editor/style.min.css?ver=5.3.2' media='all' />
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="<?php echo get_template_directory_uri(); ?>/style.css">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="https://fonts.googleapis.com/css?family=Hind|Montserrat:200,400,600,800&display=swap">

     
</head>