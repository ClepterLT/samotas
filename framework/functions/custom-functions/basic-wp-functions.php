<?php

// ACF OPTIONS PAGE
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Options',
        'menu_title' => 'Options',
        'menu_slug' => 'options',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}

// ACF blocks renderer
function acf_block_render_callback($block)
{
    // convert name ("acf/testimonial") into path friendly slug ("testimonial")
    $slug = str_replace('acf/', '', $block['name']);

    // include a template part from within the "template-parts/block" folder
    if (file_exists(get_theme_file_path("/framework/content/content-{$slug}.php"))) {
        include(get_theme_file_path("/framework/content/content-{$slug}.php"));
    }
}

// REGISTER NAVIGATIONS
function register_my_nav_menus()
{
    register_nav_menus(array(
        'primary' => __('Main Navigation'),
        'footer' => __('Footer Navigation')
    ));
}
add_action('init', 'register_my_nav_menus');

//nav filters
function add_additional_class_on_li($classes, $item, $args, $depth)
{
    if( in_array( 'current-menu-item', $classes ) ||
    in_array( 'current-menu-ancestor', $classes ) ||
    in_array( 'current-menu-parent', $classes ) ||
    in_array( 'current_page_parent', $classes ) ||
    in_array( 'current_page_ancestor', $classes )
    ) {
        $classes[] = 'active ';
    }
    if ($args->add_li_class && $depth == 0) {
        $classes[] = $args->add_li_class;
    }
    if ($args->add_subli_class && $depth) {
        $classes[] = $args->add_subli_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 4);

function add_menu_link_class( $atts, $item, $args ) {
    if (property_exists($args, 'link_class')) {
      $atts['class'] = $args->link_class;
    }
    return $atts;
  }
add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );

// REGISTER IMAGE SIZES
add_theme_support('post-thumbnails');

add_image_size('testimonial-portrait', 85, 85, array('center', 'center'));
add_image_size('card-list', 360, 170, array('center', 'center'));
add_image_size('image-showoff', 500, 320, array('center', 'center'));
add_image_size('smartphones', 640, 640, array('center', 'center'));
add_image_size('smartphones2x', 768, 768, array('center', 'center'));
add_image_size('desktop', 1366, 1366, array('center', 'center'));
add_image_size('large-desktop', 1600, 1600, array('center', 'center'));
add_image_size('hero', 1920, 999999, false);

// GET IMAGE SRCSET AND SIZES FROM ACF IMAGE ARRAY
function get_img_srcset_and_sizes($acfImgArray, $classes = null, $customSizes = null)
{
    $htmlClasses = '';
    if (!empty($classes)) {
        $htmlClasses .= ' class="' . $classes . '"';
    }

    $htmlSizes = '';
    if (!empty($customSizes) && function_exists('wp_image_add_srcset_and_sizes')) {
        $htmlSizes .= ' sizes="' . $customSizes . '"';
    } else if (function_exists('wp_image_add_srcset_and_sizes')) {
        $htmlSizes .= ' sizes="(max-width: ' . $acfImgArray['width'] . 'px) 100vw, ' . $acfImgArray['width'] . 'px"';
    }

    $img_html = '<img src="' . $acfImgArray['url'] . '" alt="' . $acfImgArray['alt'] . '"' . $htmlClasses . $htmlSizes . '>';

    if (function_exists('wp_image_add_srcset_and_sizes')) {
        $final_image = wp_image_add_srcset_and_sizes($img_html, wp_get_attachment_metadata($acfImgArray['ID']), $acfImgArray['ID']);
        return $final_image;
    } else {
        return $img_html;
    }
}

function adjust_image_sizes_attr($sizes, $size)
{
    $sizes = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 1362px) 62vw, 840px';
    return $sizes;
}
add_filter('wp_calculate_image_sizes', 'adjust_image_sizes_attr', 10, 2);

// EXCERPT
function hd_custom_excerpt_length($length)
{
    return 20;
}
add_filter('excerpt_length', 'hd_custom_excerpt_length', 999);

function hd_excerpt_more($more)
{
    return '...';
}
add_filter('excerpt_more', 'hd_excerpt_more');


/* Convert hexdec color string to rgb string */
function hex2rgb($color)
{
    $default = 'rgb(0,0,0)';
    if (empty($color)) return $default;

    if ($color[0] == '#') {
        $color = substr($color, 1);
    }

    if (strlen($color) == 6) {
        $hex = array($color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5]);
    } elseif (strlen($color) == 3) {
        $hex = array($color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2]);
    } else {
        return $default;
    }

    $rgb =  array_map('hexdec', $hex);
    $output = 'rgba(' . implode(",", $rgb) . ', 0.7)';
    return $output;
}
