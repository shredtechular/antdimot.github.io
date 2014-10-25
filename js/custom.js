
var app = angular.module('adm', []);

app.controller('InfoCtrl', function ($scope) {
    $scope.author = "Antonio Di Motta";
    $scope.description = "Web developer addicted, passionate of cloud, mobile and running.";
    $scope.twitter = "http://twitter.com/dimotta";
    $scope.linkedin = "https://www.linkedin.com/in/dimotta";
    $scope.github = "http://github.com/antdimot";
    //$scope.website = "http://localhost:63342/antdimot.github.io";
    $scope.website = "http://antdimot.github.io";
});

app.controller('ArticleCtrl', function ($scope) {
    $scope.articles = articles;
});

var articles  = [
    { file:'ef_custom_config.md',
      title:'EF Custom Configuration',
      summary:'With EF Code-First it’s easy create a database starting from domain objects, but it’s always possible create an our custom configuration...',
      date:'31/10/2014' },
    { file:'article1.md', title:'article1', summary:'bla bla bla bla bla', date:'31/10/2014' },
    { file:'article1.md', title:'article1', summary:'bla bla bla bla bla', date:'31/10/2014' }
];
