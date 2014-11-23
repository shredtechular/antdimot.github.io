
app.directive("articlepanel", function () {
    return {
        restrict: 'E',
        templateUrl: "partials/article-summary-template.html",
        replace: true,
        scope: {
            article: '=data'
        }
    }});
