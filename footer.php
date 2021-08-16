    <footer id="footer" class="footer ">
        <div class="row u-flex-center u-flex-wrap">
            
                <div class="footer__column">
                    <h3 class="heading heading--tertiary">Kontaktai</h3>
                    <ul class="footer__list">
                        <li class="footer__item">
                        <?php
                          $contact_receiver = get_field('contact_receiver', 'option');
                          if ($contact_receiver): echo($contact_receiver);
                          else: echo("Įrašykite adresą Options parinktyje");
                          endif;
                        ?>
                        </li>
                        <li class="footer__item">
                          <?php
                            $contact_address = get_field('contact_address', 'option');
                            if ($contact_address): echo($contact_address);
                            else: echo("Įrašykite adresą Options parinktyje");
                            endif;
                          ?>
                        </li>
                        <?php
                          if( have_rows('contact_phones', 'option') ) :
                            while( have_rows('contact_phones', 'option') ) : the_row();
                              $sub_value = get_sub_field('contact_phone');
                        ?>
                          <li class="footer__item"><a href="tel: <?= $sub_value ?>" class="footer__link"><?= $sub_value ?></a></li>
                        <?php
                            endwhile;
                          else:
                        ?>
                          <li class="footer__item"><a href="tel: +37069984297" class="footer__link">+37069984297</a></li>
                        <?php endif; ?>
                        <?php
                          if( have_rows('contact_emails', 'option') ) :
                              while( have_rows('contact_emails', 'option') ) : the_row();
                                $sub_value = get_sub_field('contact_email');
                        ?>
                                <li class="footer__item"><a href="mailto: <?= $sub_value ?>" class="footer__link" target="_blank"><?= $sub_value ?></a></li>
                          <?php
                              endwhile;
                          else:
                          ?>
                              <li class="footer__item"><a href="mailto: <?= $sub_value ?>" class="footer__link" target="_blank"><?= $sub_value ?></a></li>
                          <?php endif; ?>
                    </ul>
                </div>
                <div class="footer__column">
                    <h3 class="heading heading--tertiary">Meniu</h3>
                    <?php
                        $args = array(
                          'menu' => 'primary-menu',
                          'container' => false,
                          'menu_class' => 'footer__list',
                          'add_li_class' => 'footer__item',
                          'add_subli_class' => '',
                          'link_class' => 'footer__link',
                          'depth' => 0,
                        );

                        wp_nav_menu($args);
                    ?>
                </div>
                <div class="footer__column">
                    <h3 class="heading heading--tertiary">Galerija</h3>
                    <p class="footer__text">
                    <?php
                      $gallery_address = get_field('gallery_address', 'option');
                      if ($gallery_address): echo($gallery_address);
                      else: echo("Įrašykite adresą Options parinktyje");
                      endif;
                    ?>
                    </p>
                </div>
                <div class="footer__column footer__social-column">
                    <div class="footer__social-wrap">
                        <h3 class="heading heading--tertiary">Bendraukime</h3>
                        <a href="<?= the_field('facebook_link', 'option'); ?>" class="footer__social" target="_blank">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title></title>
                                <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                            </svg>
                        </a>
                    </div>
                    <p class="footer__copyright">&#169; 2021 PP Creations</p>
                </div>
            
        </div>
    </footer>

    <?php wp_footer(); ?>

  </body>
</html>