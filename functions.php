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
	
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-11',
		get_stylesheet_directory_uri() . '/dist/js/chunk-0cda41aa.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-0cda41aa.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-10',
		get_stylesheet_directory_uri() . '/dist/js/chunk-1a450389.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-1a450389.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-9',
		get_stylesheet_directory_uri() . '/dist/js/chunk-2d0c8db9.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-2d0c8db9.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-8',
		get_stylesheet_directory_uri() . '/dist/js/chunk-2d2094f4.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-2d2094f4.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-7',
		get_stylesheet_directory_uri() . '/dist/js/chunk-2d21de06.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-2d21de06.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-6',
		get_stylesheet_directory_uri() . '/dist/js/chunk-396f5c22.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-396f5c22.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-5',
		get_stylesheet_directory_uri() . '/dist/js/chunk-48f0cc49.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-48f0cc49.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-4',
		get_stylesheet_directory_uri() . '/dist/js/chunk-5dc9f146.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-5dc9f146.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-3',
		get_stylesheet_directory_uri() . '/dist/js/chunk-78743710.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-78743710.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-2',
		get_stylesheet_directory_uri() . '/dist/js/chunk-7aac1130.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-7aac1130.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app-1',
		get_stylesheet_directory_uri() . '/dist/js/chunk-d1aa8c68.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-d1aa8c68.js' ),
		true
	);
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-app',
		get_stylesheet_directory_uri() . '/dist/js/app.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/app.js' ),
		true
	);	
	
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-vendors',
		get_stylesheet_directory_uri() . '/dist/js/chunk-vendors.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-vendors.js' ),
		true
	);	
	
	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css',
		get_stylesheet_directory_uri() . '/dist/css/app.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/css/app.css' )
	); 
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

/**
 * Customizer additions.
 */
require get_template_directory() . '/includes/navigations.php';

