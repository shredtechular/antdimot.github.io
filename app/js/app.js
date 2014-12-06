
var app = angular.module('onepageblog', [
    'ngRoute',
    'ngSanitize',
    'appControllers'
]);

app.config(['$logProvider',
    function($logProvider) {
        $logProvider.debugEnabled(false);
    }
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/views/home-view.html',
                controller: 'HomeCtrl'
            }).
            when('/article/:filename', {
                templateUrl: 'partials/views/article-view.html',
                controller: 'ArticleCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);

