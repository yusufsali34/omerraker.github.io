(function() {
	"use strict";

	angular
		.module('omerraker')
		.factory('Posts',PostFactory);

	function PostFactory($resource,$firebaseArray) {
		var PostsUrl = 'https://omerraker-9b666.firebaseio.com/Posts';
		var PostsRef = new Firebase(PostsUrl);

		return $resource($firebaseArray(PostsRef));
	}

})();
