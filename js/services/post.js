app.factory( 'post', [ '$http', function( $http ) {
    return function( id ) {
        return $http.get( 'wp-json/posts/'+id )
            .success( function( data ) {
                return data;
            })
            .error( function( err ) {
                return err;
            });
    }
}]);