<?php
/*
Template Name: Produktai
*/

$category_slug = (isset($_GET['product-categories']) && !empty($_GET['product-categories'])) ? $_GET['product-categories'] : 'all';
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

$args = array(
    'post_type' => 'post',
    'post_status’' => 'publish',
    'posts_per_page' => 12,
    'paged' => $paged,
    'order' => 'DESC',
    'orderby' => 'publish_date',
);

if($category_slug && $category_slug != 'all') {
    $args['category_name'] = $category_slug;
}

$product_posts = new WP_Query( $args );

get_header(); ?>

<main>

<section class="products">
    <div class="row u-flex u-justify-between u-mb-2 u-flex-wrap">
        <div class="products__title">
            <h1 class="heading heading--primary">Produktai</h1>
        </div>
        <div class="js-custom-select samotas-select">
            <form action="">
                <select name="product-categories" id="product-categories" onchange="this.form.submit()">
                    <option value="all">Visi</option>
                    <?php
                        $cats = get_categories();

                        foreach ($cats as $cat) {
                            $name = $cat->name;
                            $slug =$cat->slug;
                        ?>
                            <option value="<?= $slug ?>" <?= $category_slug == $slug ? 'selected' : '' ?>><?= $name ?></option>
                        <?php
                        }
                    ?>
                </select>
            </form>
        </div>
    </div>

    <?php if ( $product_posts->have_posts() ) :?>
    <div class="row u-flex-center u-flex-wrap">
        <?php while ( $product_posts->have_posts() ) : $product_posts->the_post();
        $post_id = get_the_ID(); ?>
        <div class="img-with-box-small">
            <?= the_post_thumbnail('medium_large', ['class' => 'img-with-box-small__img', 'title' => 'Produkto nuotrauka']); ?>
            <div class="img-with-box-small__box">
                <div class="heading heading--fourth"><b>Kodas:</b> <?= the_title(); ?></div>
                <div class="img-with-box-small__link"><button type="button" class="button-small popup__button-open" id="<?= $post_id ?>">Daugiau</button></div>
                <button type="button" id="<?= $post_id ?>" class="button-small button-small--question popup__button-open">&hellip;</button>
            </div>
        </div>
        <div class="popup popup__hidden" id="<?= $post_id ?>">
            <div class="popup__header"><button class="popup__button-close">&times;</button></div>
            <div class="popup__img-wrap"><?= the_post_thumbnail('medium_large', ['class' => 'popup__img', 'title' => 'Produkto nuotrauka']); ?></div>
            <div class="popup__content">
                <h2 class="heading heading--secondary"><b>Kodas:</b> <?= the_title(); ?></h2>
                <div class="popup__text"><?= the_content(); ?></div>
                <a href="<?php echo get_permalink( get_page_by_path( 'kontaktai' ) ); ?>" class="button button-primary">Susisiekite</a>
            </div>
        </div>
        <?php endwhile; ?>
    </div>
    <div class="row u-flex-center--2">
        <?php echo paginate_links( array(
                'format' => '?paged=%#%',
                'current' => max( 1, get_query_var('paged') ),
                'total' => $product_posts->max_num_pages,
                'prev_text' => __('Atgal &laquo;'),
                'next_text' => __('Pirmyn &raquo;'),
                ) ); ?>
    </div>
    <div class="popup__overlay popup__hidden"></div>
    <?php endif;
    wp_reset_postdata(); ?>
</section>

</main>

<?php get_footer(); ?>