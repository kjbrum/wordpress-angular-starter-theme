<!DOCTYPE html>
<html>
    <head>
        <title>WordPress Angular Starter Theme</title>
        <?php wp_head(); ?>
    </head>
    <body ng-app="wpAngularStarter">

        <header>
            <h1><a href="<?php echo home_url('#/'); ?>">WordPress Angular Starter Theme</a></h1>
        </header>

        <main ng-view class="fade-in"></main>

        <?php wp_footer(); ?>
    </body>
</html>