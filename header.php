<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <meta name="description" content="<?php bloginfo('description') ?>">

  <title>
    <?php bloginfo('name'); ?>
    <?php if (!is_front_page()) {
      echo ' | ';
    } ?>
    <?php is_home() ? bloginfo('description') : wp_title(''); ?>
  </title>

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header class="header ">
        <div class="row-big u-flex-center">
                <div class="logo"><a href="<?php echo get_home_url(); ?>" class="logo__link"><img src=" <?php 
                    $logo_image = get_field('logo_image', 29);
                    if ($logo_image) {
                        $url = $logo_image['url'];
                        echo ($url);
                    } else {
                        echo get_template_directory_uri() . "/assets/images/Samoto-logo-resized.png";
                    }
                ?>" /></a></div>
                <div class="nav-header-wrap" id="nav-header-wrap">
                    <nav class="nav-header">
                        <?php
                          $args = array(
                            'menu' => 'primary-menu',
                            'container' => false,
                            'menu_class' => 'nav-header__list',
                            'add_li_class' => 'nav-header__item',
                            'add_subli_class' => '',
                            'link_class' => 'nav-header__link',
                            'depth' => 0,
                          );

                          wp_nav_menu($args);
                        ?>
                    </nav>
                    <a href="<?php
                      $menu_button_link = get_field('menu_button_link', 7);
                      if ($menu_button_link): echo($menu_button_link);
                      else: echo("#");
                      endif;
                    ?>" class="button button-primary">
                      <?php
                        $menu_button_title = get_field('menu_button_title', 7);
                        if ($menu_button_title): echo($menu_button_title);
                        else: echo("PRODUKTAI");
                        endif;
                      ?>
                    </a>
                </div>
                <button type="button" class="nav-header__button">
                    <svg class="nav-header__icon"><use xlink:href="<?php echo get_template_directory_uri() . '/assets/images/symbol-defs.svg#icon-menu'?>"></use></svg>
                    <svg class="nav-header__icon nav-header__icon--hidden"><use xlink:href="<?php echo get_template_directory_uri() . '/assets/images/symbol-defs.svg#icon-close'?>"></use></svg>
                </button>
        </div>
    </header>