var app = angular.module( 'wpAngularStarter', ['ngRoute'] );

app.config( [ '$routeProvider', function( $routeProvider ) {
    $routeProvider
        .when( '/', {
            controller: 'PostsController',
            templateUrl: wpapi.views + 'posts.html'
        })
        .when( '/:id', {
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

// surroundings.config( function( $routeProvider, $locationProvider ) {
//     $routeProvider
//         .when( '/', {
//             templateUrl: wpapi.partials + 'posts.html',
//             controller: 'Posts'
//         })
//         .when( '/:ID', {
//             templateUrl: wpapi.partials + 'single-post.html',
//             controller: 'SinglePost'
//         });
// })

// surroundings.controller( 'Posts', function( $scope, $http, $routeParams ) {
//     $http.get( 'wp-json/posts/' ).success( function( res ) {
//         console.log(res);
//         $scope.posts = res;
//     });
// });

// surroundings.controller( 'SinglePost', function( $scope, $http, $routeParams ) {
//     $http.get( 'wp-json/posts/' + $routeParams.ID ).success( function( res ) {
//         $scope.post = res;
//     });
// });

// // Set the configuration
// surroundings.run( ['$rootScope', function($rootScope) {
//     // Variables defined by wp_localize_script
//     $rootScope.api = aeJS.api;
// }]);

// // Add a controller
// surroundings.controller( 'mycontroller', ['$scope', '$http', function( $scope, $http ) {
//     // Load posts from the WordPress API
//     $http({
//         method: 'GET',
//         url: $scope.api,
//         params: {
//             'filter[posts_per_page]' : 10
//         },
//     }).
//     success( function( data, status, headers, config ) {
//         console.log( $scope.api );
//         console.log( data );
//         $scope.posts = data;
//     }).
//     error(function(data, status, headers, config) {});
// }]);