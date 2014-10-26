
var appControllers = angular.module('appControllers', []);


appControllers.controller('InfoCtrl',[ '$scope','$http', function ($scope,$http) {
    $http.get('data/config.json').success(function(data) {
        $scope.author = data.author;
        $scope.description = data.description;
        $scope.twitter = data.twitter;
        $scope.linkedin = data.linkedin;
        $scope.github = data.github;
        $scope.imageurl = data.imageurl;
    });
}]);

appControllers.controller('ArticleListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/articles.json').success(function(data) {
        $scope.articles = data;
    });
}]);

appControllers.controller('ArticleDetailCtrl', ['$scope', '$http', '$routeParams', '$sanitize',
    function($scope,$http,$routeParams) {
        var url = 'data/' + $routeParams.filename;

        $http.get(url).success(function(data) {
            var mkconverter = new Markdown.Converter();

            var result = mkconverter.makeHtml(data);
            $scope.articleText = result;
        });
}]);
