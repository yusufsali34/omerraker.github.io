(function() {
	"use strict";

	angular
		.module('omerraker')
		.controller('HomeController',HomeController);


	function HomeController(HomeFactory){
		this.data = HomeFactory.getPosts();
	}

})();