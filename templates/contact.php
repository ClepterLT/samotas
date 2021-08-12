<?php
/*
Template Name: Kontaktai
*/

get_header(); ?>

<main>

<section class="contact">
    <div class="contact__wrapper">
            <?php if (isset( $_GET['formreturn'] ) && $_GET['formreturn'] == true) : ?>
                <h1 class="heading heading--primary" style=" background-color: green;">Pavyko. Susisieksime greitu metu.</h1>
            <?php else: ?>
                <h1 class="heading heading--primary">Susisiekite</h1>
            <?php endif; ?>
        <p class="cta__text">Turite klausimų? Mielai į juos atsakysime. Susisiekti galite Jums patogiu būdu.</p>
        <div class="contact-sheet">
            <div class="contact-sheet__letter">
                <h2 class="heading heading--secondary u-mb-2">Parašykite mums</h2>
                <form class="contact-sheet__form" method="POST">
                    <input type="text" id="fname" name="fname" placeholder="Jūsų vardas" required>
                    <div class="contact-sheet__form-wrap">
                        <input type="email" id="email" name="email" placeholder="El. paštas" required>
                        <input type="tel" id="tel" name="tel" placeholder="Tel. Nr." required>
                    </div>
                    <textarea id="textbox" name="textbox" rows="5" placeholder="Ką norite parašyti..." required></textarea>
                    <input type="hidden" id="link" name="link" value="<?= the_permalink(); ?>">
                    <input type="submit" id="submit" name="submit" value="Siųsti">
                </form>
            </div>
            <div class="contact-sheet__info">
                <h2 class="heading heading--secondary u-mb-2">Info</h2>
                <ul class="contact-sheet__list">
                    <li class="contact-sheet__item">
                        <?php
                            $contact_receiver = get_field('contact_receiver', 'option');
                            if ($contact_receiver): echo($contact_receiver);
                            else: echo("Įrašykite adresą Options parinktyje");
                            endif;
                        ?>
                    </li>
                    <li class="contact-sheet__item">
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
                                <li class="contact-sheet__item"><a href="tel: <?= $sub_value ?>" class="contact-sheet__link"><?= $sub_value ?></a></li>
                    <?php
                            endwhile;
                        else:
                    ?>
                        <li class="contact-sheet__item"><a href="tel: +37069984297" class="contact-sheet__link">+37069984297</a></li>
                    <?php endif; ?>
                    <?php
                        if( have_rows('contact_emails', 'option') ) :
                            while( have_rows('contact_emails', 'option') ) : the_row();
                                $sub_value = get_sub_field('contact_email');
                    ?>
                                <li class="contact-sheet__item"><a href="mailto: <?= $sub_value ?>" class="contact-sheet__link" target="_blank"><?= $sub_value ?></a></li>
                        <?php
                            endwhile;
                        else:
                        ?>
                            <li class="contact-sheet__item"><a href="mailto: samotokeramika@gmail.com" class="contact-sheet__link">samotokeramika@gmail.com</a></li>
                    <?php endif; ?>
                </ul>
                <a href="" class="contact-sheet__social">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title></title>
                            <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                        </svg>
                </a>
            </div>
        </div>
    </div>
</section>

</main>

<?php get_footer(); ?>