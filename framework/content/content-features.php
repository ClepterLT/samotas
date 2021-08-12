<?php
// Create id attribute allowing for custom "anchor" value.
$id = 'features-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'features';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<section class="features">
    <div class="row u-flex-center u-flex-wrap">

    <?php
    if( have_rows('feature') ) :
        while( have_rows('feature') ) : the_row();
            $icon = get_sub_field('feature_icon');
            $title = get_sub_field('feature_title');
            $description = get_sub_field('feature_description');
    ?>
            <div class="features-card">
                <div class="features-card__wrap">
                    <svg class="features-card__icon">
                        <use xlink:href="<?= get_template_directory_uri() ?>/assets/images/symbol-defs.svg#<?= $icon ?>"></use>
                    </svg>
                    <h3 class="heading heading--tertiary"><?= $title ?></h3>
                </div>
                <p class="features-card__text"><?= $description ?></p>
            </div>
    <?php
        endwhile;
    else:
    ?>
        <div class="features-card">
            <div class="features-card__wrap">
                <svg class="features-card__icon">
                    <use xlink:href="<?= get_template_directory_uri() ?>/assets/images/symbol-defs.svg#icon-hammer"></use>
                </svg>
                <h3 class="heading heading--tertiary">Rankų darbo</h3>
            </div>
            <p class="features-card__text">Rankų darbo originalūs vienetiniai ar mažatiražiniai gaminiai.</p>
        </div>
    <?php endif; ?>

    </div>
</section>