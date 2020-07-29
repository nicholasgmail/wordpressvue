<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

//hooks
function mihdan_add_async_attribute( $tag, $handle ) {
	if ( 'my-js-handle' !== $handle ) {
		 return $tag;
	}

	return str_replace( ' src', ' async="async" src', $tag );
}
add_filter( 'vuejs-wordpress-theme-starter-app', 'mihdan_add_async_attribute', 100);

// Load scripts
function load_vue_scripts() {
	wp_enqueue_script('vuejs-wordpress-theme-starter-app1', get_stylesheet_directory_uri() . '/dist/js/chunk-07c9d3c4.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app2', get_stylesheet_directory_uri() . '/dist/js/chunk-0bf79c31.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app3', get_stylesheet_directory_uri() . '/dist/js/chunk-0cda41aa.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app4', get_stylesheet_directory_uri() . '/dist/js/chunk-13dee5fe.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app5', get_stylesheet_directory_uri() . '/dist/js/chunk-15609e94.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app6', get_stylesheet_directory_uri() . '/dist/js/chunk-1a450389.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app7', get_stylesheet_directory_uri() . '/dist/js/chunk-2d0c8db9.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app8', get_stylesheet_directory_uri() . '/dist/js/chunk-2d2094f4.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app9', get_stylesheet_directory_uri() . '/dist/js/chunk-2d21b0fa.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app10', get_stylesheet_directory_uri() . '/dist/js/chunk-2d21de06.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app11', get_stylesheet_directory_uri() . '/dist/js/chunk-2d50840a.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app12', get_stylesheet_directory_uri() . '/dist/js/chunk-396f5c22.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app13', get_stylesheet_directory_uri() . '/dist/js/chunk-39e422af.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app14', get_stylesheet_directory_uri() . '/dist/js/chunk-48a14841.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app15', get_stylesheet_directory_uri() . '/dist/js/chunk-48cbf52c.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app16', get_stylesheet_directory_uri() . '/dist/js/chunk-4bcaa815.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app17', get_stylesheet_directory_uri() . '/dist/js/chunk-68312676.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app18', get_stylesheet_directory_uri() . '/dist/js/chunk-e933e7e2.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app19', get_stylesheet_directory_uri() . '/dist/js/chunk-eb3dfd8c.js',null);
wp_enqueue_script('vuejs-wordpress-theme-starter-app20', get_stylesheet_directory_uri() . '/dist/js/chunk-f57197c4.js',null);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-vandors-js',
		get_stylesheet_directory_uri() . '/dist/js/chunk-vendors.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-vendors.js' ),
		true
	);	
	wp_enqueue_script('vuejs-wordpress-theme-starter-app', get_stylesheet_directory_uri() . '/dist/js/app.js', null,
		filemtime( get_stylesheet_directory() . '/dist/js/app.js' ),
		true
	);	
	
	wp_enqueue_style('vuejs-wordpress-theme-starter-css-1', get_stylesheet_directory_uri() . '/dist/css/chunk-07c9d3c4.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css2', get_stylesheet_directory_uri() . '/dist/css/chunk-0cda41aa.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css3', get_stylesheet_directory_uri() . '/dist/css/chunk-13dee5fe.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css4', get_stylesheet_directory_uri() . '/dist/css/chunk-15609e94.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css5', get_stylesheet_directory_uri() . '/dist/css/chunk-1a450389.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css6', get_stylesheet_directory_uri() . '/dist/css/chunk-2d50840a.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css7', get_stylesheet_directory_uri() . '/dist/css/chunk-396f5c22.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css8', get_stylesheet_directory_uri() . '/dist/css/chunk-39e422af.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css9', get_stylesheet_directory_uri() . '/dist/css/chunk-48a14841.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css10', get_stylesheet_directory_uri() . '/dist/css/chunk-4bcaa815.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css11', get_stylesheet_directory_uri() . '/dist/css/chunk-68312676.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css12', get_stylesheet_directory_uri() . '/dist/css/chunk-eb3dfd8c.css', null);
wp_enqueue_style('vuejs-wordpress-theme-starter-css13', get_stylesheet_directory_uri() . '/dist/css/chunk-f57197c4.css', null);

	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-chunk-vendors',
		get_stylesheet_directory_uri() . '/dist/css/chunk-vendors.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/css/chunk-vendors.css' )
	); 
	wp_enqueue_style('vuejs-wordpress-theme-starter-css', get_stylesheet_directory_uri() . '/dist/css/app.css', null,
		filemtime( get_stylesheet_directory() . '/dist/css/app.css' )
	); 
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

/**
 * Customizer additions.
 */
require get_template_directory() . '/includes/navigations.php';

