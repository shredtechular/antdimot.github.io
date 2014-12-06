

app.factory("dataService", [ '$http', '$log',
    function($http,$log) {
        return {
            getArticleList: function( getArticleList_successCallbak ) {
                $log.debug('dataService.getArticleList');

                $http.get('data/articles.json').success( function(data) {
                    $log.debug(data);

                    getArticleList_successCallbak(data);
                });
            },
            getArticle: function( paramid, getArticle_successCallbak ) {
                $log.debug("dataService.getArticle");

                var url = 'data/' + paramid + ".md";

                $http.get(url).success(function(data) {
                    getArticle_successCallbak(data);
                });
            }
        }
}]);
