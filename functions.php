<?php

function wp_angular_scripts() {
    wp_enqueue_script( 'angularjs', get_stylesheet_directory_uri() . '/node_modules/angular/angular.min.js' );
    wp_enqueue_script( 'angularjs-route', get_stylesheet_directory_uri() . '/node_modules/angular-route/angular-route.min.js' );
    wp_enqueue_script( 'angularjs-animate', get_stylesheet_directory_uri() . '/node_modules/angular-animate/angular-animate.min.js' );

    wp_enqueue_script( 'wp-angular-starter', get_stylesheet_directory_uri() . '/js/app.js', array( 'angularjs', 'angularjs-route' ), '', true );
    wp_enqueue_script( 'posts-controller', get_stylesheet_directory_uri() . '/js/controllers/PostsController.js', array( 'angularjs', 'angularjs-route' ), '', true );
    wp_enqueue_script( 'post-controller', get_stylesheet_directory_uri() . '/js/controllers/PostController.js', array( 'angularjs', 'angularjs-route' ), '', true );
    wp_enqueue_script( 'posts-service', get_stylesheet_directory_uri() . '/js/services/posts.js', array( 'angularjs', 'angularjs-route' ), '', true );
    wp_enqueue_script( 'post-service', get_stylesheet_directory_uri() . '/js/services/post.js', array( 'angularjs', 'angularjs-route' ), '', true );

    wp_localize_script(
        'wp-angular-starter',
        'wpapi',
        array(
            'views' => trailingslashit( get_template_directory_uri() ) . 'views/'
        )
    );

    wp_enqueue_style( 'wp-angular-starter-style', get_stylesheet_directory_uri() . '/style.css' );
}

add_action( 'wp_enqueue_scripts', 'wp_angular_scripts' );