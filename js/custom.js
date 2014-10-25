
var app = angular.module('adm', []);

app.controller('InfoCtrl', function ($scope) {
    $scope.author = "Antonio Di Motta";
});

app.controller('ArticleCtrl', function ($scope) {
    $scope.articles = articles2;
});

var articles  = [
    { file:'article1.md', title:'article1', summary:'bla bla bla bla bla', date:'31/10/2014' }
];

var articles2 = [
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