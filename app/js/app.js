
var app = angular.module('onepageblog', [
    'ngRoute',
    'ngSanitize',
    'appControllers'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home-view.html',
                controller: 'HomeCtrl'
            }).
            when('/article/:filename', {
                templateUrl: 'partials/article-view.html',
                controller: 'ArticleCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

