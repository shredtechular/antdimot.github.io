
app.directive("articlepanel", function () {
    return {
        restrict: 'E',
        templateUrl: "partials/templates/article-summary-template.html",
        replace: true,
        scope: {
            article: '=data'
        }
    }});
