<?php
// include_once(__DIR__ . '/../../content/news/news-register.php');

add_action('acf/init', 'my_acf_init');
function my_acf_init()
{

    // check function exists
    if (function_exists('acf_register_block')) {
        acf_register_block(array(
            'name'				=> 'image-with-text',
            'title'				=> __('Paveiksliukas su tekstu'),
            'render_callback'	=> 'acf_block_render_callback',
            'enqueue_style'     => get_template_directory_uri() . '/framework/content/content-image-with-text.css',
            'category'			=> 'embed',
            'icon'				=> 'admin-comments',
            'keywords'			=> array( 'paveiksliukas', 'tekstu', 'tekstas' ),
        ));

        acf_register_block(array(
            'name'				=> 'hero',
            'title'				=> __('Įžanginė sekcija'),
            'render_callback'	=> 'acf_block_render_callback',
            'enqueue_style'     => get_template_directory_uri() . '/framework/content/content-hero.css',
            'category'			=> 'embed',
            'icon'				=> 'admin-comments',
            'keywords'			=> array( 'sekcija', 'įžanginė', 'įžanga', 'izangine', 'izanga' ),
        ));

        acf_register_block(array(
            'name'				=> 'cta',
            'title'				=> __('Susisiekime sekcija'),
            'render_callback'	=> 'acf_block_render_callback',
            'enqueue_style'     => get_template_directory_uri() . '/framework/content/content-cta.css',
            'category'			=> 'embed',
            'icon'				=> 'admin-comments',
            'keywords'			=> array( 'sekcija', 'susisiekime', 'susisiekti' ),
        ));

        acf_register_block(array(
            'name'				=> 'features',
            'title'				=> __('Savybių sekcija'),
            'render_callback'	=> 'acf_block_render_callback',
            'enqueue_style'     => get_template_directory_uri() . '/framework/content/content-features.css',
            'category'			=> 'embed',
            'icon'				=> 'admin-comments',
            'keywords'			=> array( 'sekcija', 'savybes', 'savybiu' ),
        ));
    }
}
