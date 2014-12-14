# AngularJS - Custom directives
AngularJS provides many built-in directives and someone of that I have already presented, but it's always possible define
a own directive using the great capability for creating custom directives.

To do that, we have to lear how to register a new directive. For example if you want define a new directive
you must write something like this:

    var app = angular.module("angularAppName", []);

    app.directive( "directiveName", function () {
        return {
        };
    });


 The creation of new directive it's important define what it has to show, so below there is an example:

    <div class="panel">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{article.title}}
            </h3>
        </div>
        <div class="panel-body">
            <p class="text-left">{{article.summary}}</p>
        </div>
    </div>

The html template code has to display the title and the summary of an article, formatting the data using the panel bootstrap component.

