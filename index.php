<!DOCTYPE html>
<html ng-app="wpAngularStarter">
    <head>
        <title>WordPress Angular Starter Theme</title>
        <?php wp_head(); ?>
    </head>
    <body>

        <header>
            <h1><a href="<?php echo home_url('#/'); ?>">WordPress Angular Starter Theme</a></h1>
            <?php
                $current_user = wp_get_current_user();
                if( $current_user->ID == 0 ) {
                    echo "<a ui-sref='login' class='login'>Login</a>";
                } else {
                    echo "<a href='".wp_logout_url()."' class='login'>Logout</a>";
                }
            ?>
        </header>

        <main ui-view class="fade-slide"></main>

        <?php wp_footer(); ?>
    </body>
</html>