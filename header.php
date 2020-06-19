<?php status_header(200); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">

  <head>
    <meta
      charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link href="./assets/css/app.css" rel=preload as=style>
    <link href="./assets/js/app.js" rel=preload as=script>
    <link href="./assets/js/chunk-vendors.js" rel=preload as=script>
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>
