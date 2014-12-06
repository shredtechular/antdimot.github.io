var appControllers = angular.module('appControllers', []);

appControllers.controller('InfoCtrl',[ '$scope','$http',
    function($scope,$http) {
        $http.get('data/config.json').success(function(data) {
            $scope.author = data.author;
            $scope.description = data.description;
            $scope.about = data.about;
            $scope.twitter = data.twitter;
            $scope.linkedin = data.linkedin;
            $scope.github = data.github;
            $scope.imageurl = data.imageurl;
            $scope.rss= data.rss;
        });
}]);

appControllers.controller('HomeCtrl', ['$scope', '$log', 'dataService',
    function($scope, $log, dataService ) {
        dataService.getArticleList(
            function(data) {
                $scope.articles = data;
            }
        );
}]);

appControllers.controller('ArticleCtrl', ['$scope', '$routeParams', '$log', 'dataService',
    function($scope, $routeParams, $log, dataService) {

        dataService.getArticle($routeParams.filename,
            function(data) {
                var mkconverter = new Markdown.Converter();
                var result = mkconverter.makeHtml(data);

                $scope.articleText = result;
        });
}]);
