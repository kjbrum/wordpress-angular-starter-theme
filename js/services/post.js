app.factory( 'post', [ '$http', function( $http ) {
    return function( slug ) {
        return $http.get( 'wp-json/posts/?filter[name]=' + slug )
            .success( function( data ) {
                return data;
            })
            .error( function( err ) {
                return err;
            });
    }
}]);