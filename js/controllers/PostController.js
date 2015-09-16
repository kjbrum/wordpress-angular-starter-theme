app.controller( 'PostController', ['$scope', 'post', '$routeParams', function( $scope, post, $routeParams ) {
    post($routeParams.id)
        .success( function( data ) {
            $scope.post = data;
        });
}]);