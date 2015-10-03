app.controller( 'PostController', ['$scope', 'post', '$routeParams', function( $scope, post, $routeParams ) {
    post($routeParams.slug)
        .success( function( data ) {
            $scope.post = data[0];
        });
}]);