<?php
// Create id attribute allowing for custom "anchor" value.
$id = 'hero-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'hero';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assign defaults.
$title = get_field('hero_title') ?: 'Pavadinimas';
$description = get_field('hero_description') ?: 'Tekstas';
$button_left_title = get_field('hero_button_left_title') ?: 'Mygtuko pavadinimas';
$button_left_link = get_field('hero_button_left_link') ?: 'Mygtuko nuoroda';
$button_right_title = get_field('hero_button_right_title') ?: 'Mygtuko pavadinimas';
$button_right_link = get_field('hero_button_right_link') ?: 'Mygtuko nuoroda';
$bg_image = get_field('hero_background_image');

?>
<section class="hero">
    <div class="row u-flex">
        <div class="hero-text-box">
            <h1 class="heading heading--primary"><?= $title ?></h1>
            <p class="hero-text-box__text"><?= $description ?></p>
            <div class="hero-text-box__button-container">
                <a href="<?= $button_left_link ?>" class="button button-primary u-mr-2"><?= $button_left_title ?></a>
                <a href="<?= $button_right_link ?>" class="button button-secondary"><?= $button_right_title ?></a>
            </div>
        </div>
    </div>
</section>
<style>
.hero {
    background-image: url("<?= esc_url($bg_image['url']); ?>");
}
</style>