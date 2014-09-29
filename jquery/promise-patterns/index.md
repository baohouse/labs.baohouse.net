---
layout: default
title: jQuery Promise Patterns
---

# Basics

How to instantiate and retrieve your promises:

	var deferred = new $.Deferred();
	var promiseByDeferred = deferred.promise();
	var promiseByAjax = $.ajax({ url: http://baohouse.github.io });

That's a good start. Now how about passing in a callback after the promises resolve? We can do this by chaining methods onto the promise. Continuing from above:

	var resolveHandle = function () { console.log("Resolved!"); }
	var rejectHandle = function () { console.log("Rejected!"); }

	promiseByDeferred.then(resolveHandle, rejectHandle);
	promiseByAjax.then(resolveHandle, rejectHandle);

What happens if you run this in the console? Instead of two *Resolved!* messages in the console, you will only see one, and that came from the AJAX call. Why is that? It turns out that the promise from the Deferred object needs to be resolved before `responseHandle` can be called in the chained `then()`. So run this line:

	deferred.resolve();

Now you will see the other *Resolved!* message.

An important method is [`Deferred.state()`](http://api.jquery.com/deferred.state/) which returns either *pending*, *resolved*, or *rejected*. When a promise is *resolved*, the `done()` callbacks or the resolved handler for `then()` gets invoked. Likewise, when it is *rejected*, the `fail()` callbacks and the reject handler for `then()` gets invoked. This will be important to know as you start chaining and aggregating multiple asynchronous operations together.

	var deferred = new $.Deferred();
	console.log(deferred.state()); // => pending
	deferred.resolve();
	console.log(deferred.state()); // => resolved
	deferred = new $.Deferred().reject();
	console.log(deferred.state()); // => rejected

# Chaining

So you're familiar with the ability to chain methods in jQuery, for example:

	$("h1").show().css({color: "red"}); // show() and css() are chained

Chaining works similarly for `then()`, `done()`, and `fail()`.

	var deferred = new $.Deferred();
	var promiseByDeferred = deferred.promise();
	var resolveHandle = function () { console.log("Resolved!"); }
	var rejectHandle = function () { console.log("Rejected!"); }

	promiseByDeferred.then(resolveHandle, rejectHandle)
		.done(resolveHandle)
		.fail(rejectHandle);

	deferred.resolve();

You should see *Resolved!* twice, one from the `then()` and one from `done()`.

## Passing Values Along A Chain

Functions are useful in that they take an input and give an output. We can have values return from each chained callback and passed along to the next one in the chain using `then()`. The first thing is to understand how and where promises get their input.

	var deferred = new $.Deferred();
	var promiseByDeferred = deferred.promise();

	/*
	 * Notice that the second argument for then() is optional
	 * if you don't expect to handle a failure
	 */
	promiseByDeferred.then(function (resultFromResolvedPromise) {
		console.log(resultFromResolvedPromise);
	});

	deferred.resolve(1); // => 1

When you pass an argument to `Deferred.resolve()`, this becomes the argument passed into the `then()` resolve handler. Cool! Now what happens if we have two chained `then()`?

	var deferred = new $.Deferred();
	var promiseByDeferred = deferred.promise();
	promiseByDeferred.then(function (firstThenResult) {
		console.log("firstThenResult: " + firstThenResult);
	}).then(function (secondThenResult) {
		console.log("secondThenResult: " + secondThenResult);
	});

	deferred.resolve(1);
	// => 1
	// => undefined

Well, that's no good. The second `then()` didn't get anything passed into it. This can be remedied simply by returning a value in the first `then()`, which becomes the argument for the following `then()`.

	var deferred = new $.Deferred();
	var promiseByDeferred = deferred.promise();
	promiseByDeferred.then(function (firstThenResult) {
		console.log("firstThenResult: " + firstThenResult);
		return firstThenResult + 1;
	}).then(function (secondThenResult) {
		console.log("secondThenResult: " + secondThenResult);
	});

	deferred.resolve(1);
	// => 1
	// => 2

# Resources
* [Promises/A+](http://promisesaplus.com) – The open standard
* [jQuery Deferred Object](http://api.jquery.com/category/deferred-object/) – jQuery's implementation of promises with additional methods
* [jQuery.ajax()](http://api.jquery.com/jquery.ajax/) – AJAX calls return a promise
* [JavaScript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/) – ECMAScript 6 now has native promise support