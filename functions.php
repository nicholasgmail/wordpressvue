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
		'vuejs-wordpress-theme-starter-chunk-2d0ac036',
		get_stylesheet_directory_uri() . '/dist/js/chunk-2d21de06.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-2d21de06.js' ),
		true
	);	
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-chunk-06a21ec4',
		get_stylesheet_directory_uri() . '/dist/js/chunk-06a21ec4.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-06a21ec4.js' ),
		true
	);	
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-chunk-60ad1d0c',
		get_stylesheet_directory_uri() . '/dist/js/chunk-60ad1d0c.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-60ad1d0c.js' ),
		true
	);	
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-chunk-95acb4cc',
		get_stylesheet_directory_uri() . '/dist/js/chunk-95acb4cc.js',
		null,
		filemtime( get_stylesheet_directory() . '/dist/js/chunk-95acb4cc.js' ),
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
	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css-chunk-06a21ec4',
		get_stylesheet_directory_uri() . '/dist/css/chunk-06a21ec4.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/css/chunk-06a21ec4.css' )
	); 
	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css-chunk-60ad1d0c',
		get_stylesheet_directory_uri() . '/dist/css/chunk-60ad1d0c.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/css/chunk-60ad1d0c.css' )
	); 
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

/**
 * Customizer additions.
 */
require get_template_directory() . '/includes/navigations.php';

