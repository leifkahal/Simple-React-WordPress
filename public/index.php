<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 */

get_header(); ?>

<link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="<?php echo get_template_directory_uri(); ?>/style.css">
    <link rel="preload" as="style" onload="this.rel = 'stylesheet'" href="https://fonts.googleapis.com/css?family=Hind|Montserrat:200,400,600,800&display=swap">
    <link rel="stylesheet" as="style" onload="this.rel = 'stylesheet'" id="gutenberg_forms-cgb-style-css-css" href="https://admin.simplereactwordpress.com/wp-content/themes/build/style.css" media="all">
</head>

<body>
<noscript>You need to enable JavaScript to run this app.</noscript>

<?php
    if ( have_posts() ) { ?>
    
				<div id="root"></div>
    <div id="spinner"></div>

		<?php	}




get_footer(); ?>
