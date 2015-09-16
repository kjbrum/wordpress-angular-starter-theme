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

        <main ng-view></main>

        <footer>
            <p>
                &copy; <?php echo date( 'Y' ); ?>. WordPress Angular Starter Theme. Make some cool shit.
            </p>
        </footer>

        <?php wp_footer(); ?>
    </body>
</html>