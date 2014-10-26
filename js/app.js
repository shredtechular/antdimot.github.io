
var app = angular.module('adm', [
    'ngRoute',
    'ngSanitize',
    'appControllers'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/article-list.html',
                controller: 'ArticleListCtrl'
            }).
            when('/article/:filename', {
                templateUrl: 'partials/article-detail.html',
                controller: 'ArticleDetailCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

