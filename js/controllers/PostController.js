app.controller( 'PostController', ['$scope', 'post', '$state', function( $scope, post, $state ) {
    post($state.slug)
        .success( function( data ) {
            $scope.post = data[0];
        });
}]);