<?php
// Create id attribute allowing for custom "anchor" value.
$id = 'cta-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'cta';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assign defaults.
$title = get_field('cta_title') ?: 'Įrašykite pavadinimą';
$description = get_field('cta_description') ?: 'Tekstas';
$phone = get_field('cta_phone') ?: 'Mygtuko pavadinimas';
?>

<section class="cta">
    <div class="cta__wrapper">
        <h2 class="heading heading--primary"><?= $title ?></h2>
        <p class="cta__text"><?= $description ?></p>
        <a href="tel: <?= $phone ?>" class="cta__number"><?= $phone ?></a>
    </div>
</section>