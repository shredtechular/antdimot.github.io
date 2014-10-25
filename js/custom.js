
var app = angular.module('adm', []);

app.controller('InfoCtrl', function ($scope) {
    $scope.author = "Antonio Di Motta";
    $scope.description = "Web addicted, passionate of cloud, mobile and running.";
    $scope.twitter = "http://twitter.com/dimotta";
    $scope.linkedin = "https://www.linkedin.com/in/dimotta";
    $scope.github = "http://github.com/antdimot";

    //$scope.website = "http://localhost:63342/antdimot.github.io";
    $scope.website = "http://antdimot.github.io";

    $scope.homepage = "index.html";
    //$scope.homepage = "workindex.html";
});

app.controller('ArticleCtrl', function ($scope) {
    $scope.articles = articles;
});

var articles  = [
    { file:'ef_custom_config.md',
      title:'EF Custom Configuration',
      summary:'With EF Code-First it’s easy create a database starting from domain objects, but it’s always possible create an our custom configuration...',
      date:'16/03/2012',
      color:'info' },
    { file:'ef_init.md',
      title:'EF database initialization',
      summary:'With version 4.1 or later Entity Framework provides a useful way for recreate and optionally re-seed the database...',
      date:'24/01/2012',
      color:'success' },
    { file:'autofac_mvc.md',
      title:'Autofac Dependency resolution',
      summary:'From the current version of ASP.NET MVC (release 3+) supports a new IDependencyResolver interface that makes it easier to...',
      date:'18/01/2012',
      color:'warning' },
    { file:'mongo_lab_restc.md',
        title:'MongoLab Rest Client',
        summary:'I love build ASP.NET MVC projects using C# for this reason I’m searching an inexpensive way for publish my web projects using...',
        date:'05/01/2012',
        color:'danger' },
    { file:'model_legacy.md',
        title:'When the model is legacy',
        summary:'I started a new Asp.Net MVC project with an existing domain model and DAL logic. Unfortunately “the legacy domain model” was...',
        date:'20/12/2011',
        color:'default' },
    { file:'ef_onmodel.md',
        title:'EF 4.1 – OnModelCreating',
        summary:'Also if EF 4.1 can generate the database for us, we still have the possibility to manage how the database have to be built....',
        date:'18/06/2011',
        color:'primary' },
    { file:'ef41_news.md',
        title:'Entity Framework 4.1 – News',
        summary:'I must admit I like very much the new release of Entity Framework. Although the EF team have also to work hard to catch up the quality...',
        date:'08/06/2011',
        color:'info' }
];
