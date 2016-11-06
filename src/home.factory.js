(function() {
	"use strict";

	angular
		.module('omerraker')
		.factory('HomeFactory',HomeFactory);

	function HomeFactory(Posts) {
		var homeFactory = new Object({});

		homeFactory.getPosts = function() {
			return Posts.query();
		};

		return homeFactory;
	}


})();