---
layout: default
title: jQuery Promise Patterns
---
## Resources
* [Promises/A+](http://promisesaplus.com) – The open standard
* [jQuery Deferred Object](http://api.jquery.com/category/deferred-object/) – jQuery's implementation of promises with additional methods
* [jQuery.ajax()](http://api.jquery.com/jquery.ajax/) – AJAX calls return a promise
* [JavaScript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/) – ECMAScript 6 now has native promise support

## Basics

How to instantiate and retrieve your promises:

	var deferred = new $.Deferred();
	var promiseByDeferred = deferred.promise();
	var promiseByAjax = $.ajax({ url: http://baohouse.github.io });

That's a good start. Now how about passing in a callback after the promises resolve? Continuing from above:

	var resolveHandle = function () { console.log("Resolved!"); }
	var rejectHandle = function () { console.log("Rejected!"); }

	promiseByDeferred.then(resolveHandle, rejectHandle);
	promiseByAjax.then(resolveHandle, rejectHandle);

What happens if you run this in the console? Instead of two *Resolved!* messages in the console, you will only see one, and that came from the AJAX call. Why is that? It turns out that the promise from the Deferred object needs to be resolved before `responseHandle` can be called in the chained `then()`. So run this line:

	deferred.resolve();

Now you will see the other "Resolved!" message.