

app.factory("dataService", [ '$http', '$log', 'appConfig',
    function( $http, $log, appConfig ) {
        return {
            getArticleList: function( getArticleList_successCallbak ) {
                $log.debug('dataService.getArticleList');

                $http.get( appConfig.dataPath + '/articles.json').success( function(data) {
                    $log.debug(data);

                    getArticleList_successCallbak(data);
                });
            },
            getArticle: function( paramid, getArticle_successCallbak ) {
                $log.debug("dataService.getArticle");

                var url =  appConfig.dataPath + '/' + paramid + ".md";

                $http.get(url).success(function(data) {
                    getArticle_successCallbak(data);
                });
            }
        }
}]);
