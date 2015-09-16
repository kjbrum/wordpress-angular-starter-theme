app.factory( 'posts', [ '$http', function( $http ) {
    return $http.get( 'wp-json/posts' )
        .success( function( data ) {
            return data;
        })
        .error( function( err ) {
            return err;
        });
}]);