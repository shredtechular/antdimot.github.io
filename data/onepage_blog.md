# One page blog

Yes, I have changed my blog again, but this time i have decided to design and coding it personally.

Before to start the develop of my new blog, i collected the requirements useful to simplify the life of a developer.

Below, there is my short list of requirements:

1.  It must be easy to write a new post.
2.  It must easy the processing for updating.
3.  It must not use a database.
4.  It must possible to use any hosting solution.

To accomplish the first, I thought to write the articles using [Markdown](http://daringfireball.net/projects/markdown/) syntax.
It's super easy because it has few syntax elements to remember but they are enough to write any good article.
The problem was, how do you transform the markdown text into html text?
After a fast search, I found a small javascript library called [Pagedown](https://code.google.com/p/pagedown/wiki/PageDown).

An example of use is:

    var converter = new Markdown.Converter();

    document.write(converter.makeHtml("**I am bold!**"));

The second requirement has been easy to accomplish because I decided to use [GIT](http://git-scm.com) (using classic *PUSH* command).
In particularly there is the possibility to use a public repository hosted on [Github](https://github.com) using it as web site repository.

No database, it would be hard to accomplish.
So, I decided to reduce the number of data and saving them into json files.
This solution is good if i can load it using simple rest request.

To answer at last point, the best way is develop something that must working only into a browser.
So, I decided to use only html, css and javascript.
How did i put a complex logic into a web page without going crazy?
I decided to use [Angularjs](https://angularjs.org).

What is Angularjs?
Following the description as reported on home page of the project?

*"HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications.
AngularJS lets you extend HTML vocabulary for your application.
The resulting environment is extraordinarily expressive, readable, and quick to develop."*

Great, now we have all tools necessary to develop my new blog.

The result? It's the article that you are reading now :)

Please feel free to download and/or fork the code of this [One page blog](https://github.com/antdimot/antdimot.github.io).

All that you need is located into the **data** folder, where there are the articles and json files.

*Antonio Di Motta*


