var app = angular.module( 'wpAngularStarter', ['ngAnimate', 'ui.router'] );

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('posts', {
            url: '/',
            templateUrl: wp.views + 'posts.html',
            resolve: {
                getPosts: function($http){
                    return $http.get( 'wp-json/posts' )
                        .success( function( data ) {
                            return data;
                        })
                        .error( function( err ) {
                            return err;
                        });
                }
            },
            controller: function($scope, getPosts) {
                $scope.posts = getPosts.data;
            }
        })
        .state('single', {
            url: '/post/:slug',
            templateUrl: wp.views + 'post.html',
            resolve: {
                getPost: function($http, $stateParams){
                    return $http.get( 'wp-json/posts/?filter[name]=' + $stateParams.slug )
                        .success( function( data ) {
                            return data;
                        })
                        .error( function( err ) {
                            return err;
                        });
                }
            },
            controller: function($scope, getPost) {
                $scope.post = getPost.data[0];
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: wp.views + 'login.html',
            resolve: {
                checkLogin: function($http) {
                    if(wp.current_user.ID == 0) {
                        return 'You are not logged in. Display login form here...';
                    } else {
                        return 'You are already logged in. Redirect to dashboard...';
                    }
                }
            },
            controller: function($scope, checkLogin) {
                $scope.form = checkLogin;
                console.log(checkLogin);
            }
        });
}]);

app.filter( 'unsafe', function( $sce ) {
    return function( val ) {
        return $sce.trustAsHtml( val );
    };
});