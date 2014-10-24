
var app = angular.module('adm', []);

app.controller('InfoCtrl', function ($scope) {
    $scope.author = "Antonio Di Motta";
});

app.controller('ArticleCtrl', function ($scope) {
    $scope.articles = articles;
});

var articles = [
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' },
    { title:'title title title', description:'bla bla bla bla bla bla bla' }
];