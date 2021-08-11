<?php
// Create id attribute allowing for custom "anchor" value.
$id = 'image-with-text-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'img-with-box';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assign defaults.
$title = get_field('img_with_text_title') ?: 'įrašykite bloko pavadinimą';
$text = get_field('img_with_text_text') ?: 'Tekstas';
$button_title = get_field('img_with_text_button_title') ?: 'Mygtuko pavadinimas';
$button_link = get_field('img_with_text_button_link') ?: 'Mygtuko nuoroda';
$image = get_field('img_with_text_img') ?: 295;

?>
<section>
    <div class="row">
        <div class="img-with-box">
            <img src="<?= esc_url($image['url']); ?>" alt="<?= esc_url($image['alt']); ?>" class="img-with-box__img">
            <div class="img-with-box__box">
                <h2 class="heading heading--secondary"><?= $title ?></h2>
                <p class="img-with-box__text"><?= $text ?></p>
                <a href="<?= $button_link ?>" class="button button-secondary"><?= $button_title ?></a>
            </div>
        </div>
    </div>
</section>