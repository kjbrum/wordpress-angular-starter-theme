<?php

function wp_angular_scripts() {
    wp_enqueue_script( 'angularjs', get_stylesheet_directory_uri() . '/node_modules/angular/angular.min.js' );
    // wp_enqueue_script( 'angularjs-route', get_stylesheet_directory_uri() . '/node_modules/angular-route/angular-route.min.js' );
    wp_enqueue_script( 'angularjs-ui-router', get_stylesheet_directory_uri() . '/node_modules/angular-ui-router/build/angular-ui-router.min.js' );
    wp_enqueue_script( 'angularjs-animate', get_stylesheet_directory_uri() . '/node_modules/angular-animate/angular-animate.min.js' );

    wp_enqueue_script( 'wp-angular-starter', get_stylesheet_directory_uri() . '/js/app.js', array( 'angularjs', 'angularjs-ui-router', 'angularjs-animate' ), '', true );
    // wp_enqueue_script( 'posts-controller', get_stylesheet_directory_uri() . '/js/controllers/PostsController.js', array( 'angularjs', 'angularjs-ui-router', 'angularjs-animate' ), '', true );
    // wp_enqueue_script( 'post-controller', get_stylesheet_directory_uri() . '/js/controllers/PostController.js', array( 'angularjs', 'angularjs-ui-router', 'angularjs-animate' ), '', true );
    // wp_enqueue_script( 'posts-service', get_stylesheet_directory_uri() . '/js/services/posts.js', array( 'angularjs', 'angularjs-ui-router', 'angularjs-animate' ), '', true );
    // wp_enqueue_script( 'post-service', get_stylesheet_directory_uri() . '/js/services/post.js', array( 'angularjs', 'angularjs-ui-router', 'angularjs-animate' ), '', true );

    wp_localize_script(
        'wp-angular-starter',
        'wp',
        array(
            'views' => trailingslashit( get_template_directory_uri() ) . 'views/',
            'current_user' => wp_get_current_user()
        )
    );

    wp_enqueue_style( 'wp-angular-starter-style', get_stylesheet_directory_uri() . '/style.css' );
}

add_action( 'wp_enqueue_scripts', 'wp_angular_scripts' );

// Hide the admin bar
add_filter('show_admin_bar', '__return_false');