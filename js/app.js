var app = angular.module( 'wpAngularStarter', ['ngAnimate', 'ngRoute'] );

app.config( [ '$routeProvider', function( $routeProvider ) {
    $routeProvider
        .when( '/', {
            controller: 'PostsController',
            templateUrl: wpapi.views + 'posts.html'
        })
        .when( '/post/:slug', {
            controller: 'PostController',
            templateUrl: wpapi.views + 'post.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.filter( 'unsafe', function( $sce ) {
    return function( val ) {
        return $sce.trustAsHtml( val );
    };
});