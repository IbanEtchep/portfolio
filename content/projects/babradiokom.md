---
title: BAB-Radiokom
description: Site web pour l'entreprise BAB Radiokom !
slug: babradiokom
img: babrad-thumb.png
period: fin mai - juin 2021
---

## Présentation

Ce projet est un site que j'ai réalisé durant mon stage de 1ère année de BTS SIO dans l'entreprise BAB RADIOKOM.

BAB RADIOKOM est le spécialiste des systèmes de radiocommunications pour les départements 64 et 40 (Pyrénées Atlantiques et Landes).
Ils interviennent dans le conseil , la vente , la maintenance , la location de systèmes radios et dans l'étude et l'installation de systèmes de vidéosurveillance.

Ce projet m'a permis de progresser en html/css/php et d'apprendre à créer un thème Wordpress.

## Extraits de code 

Page services :

```html
<?php get_header(); ?>

<h1 class="center page-title">
        <?php
        wp_title('');
        ?>
</h1>

<div class="content">

    <?php if(have_posts()): ?>

        <div class="services">
            <?php while(have_posts()): the_post();
                get_template_part('template-parts/service');
            ?>
            <?php endwhile; ?>
        </div>

    <?php else: ?>

    <?php endif; ?>

</div>

<?php get_footer(); ?>

```

Ajout de fonctionnalités spécifiques au thème crée.
```php
<?php 

//Ajoute le support dynamique du titre
function iban_theme_support(){
    add_theme_support('title-tag');
    add_theme_support( 'post-thumbnails' );    
}

function iban_menus(){
    $locations = array(
        'primary' => "Desktop navbar",
    );

    register_nav_menus( $locations );
}

function iban_register_styles(){
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style('iban-style', get_template_directory_uri() . "/style.css" , array() , 1.0, 'all');

    if (class_exists('woocommerce')){
        wp_enqueue_style('iban-woocommerce-style', get_template_directory_uri().'/assets/css/woocommerce.css', array('woocommerce-general'));
    }

}

function iban_register_scripts(){
    $version = wp_get_theme()->get('Version');

    wp_enqueue_script('iban-scripts', get_template_directory_uri() . "/main.js" , array());
}

function iban_init(){
    register_post_type('services', [
        'label' => 'Services',
        'public' => true,
        'menu_position' => 3,
        'has_archive' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
    ]);
}

function iban_register_widget(){
    register_sidebar([
        'id' => 'boutique',
        'name' => 'Boutique'
    ]);
}

add_action('after_setup_theme' , 'iban_theme_support');
add_action('wp_enqueue_scripts' , 'iban_register_styles');
add_action('wp_enqueue_scripts' , 'iban_register_scripts');
add_action( 'init' , 'iban_menus' );
add_action('init', 'iban_init');
add_action('widgets_init', 'iban_register_widget');

add_action( 'woocommerce_before_main_content', 'iban_add_sidebar', 11);

//add_action('add_meta_boxes', 'iban_add_custom_box');

//Remove Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
	wp_dequeue_style( 'wc-blocks-style' );
	wp_dequeue_style( 'wc-block-style' ); // Remove WooCommerce block CSS
} 
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );
```


## Technologies utilisées

- Wordpress
- PHP
- HTMl/CSS
