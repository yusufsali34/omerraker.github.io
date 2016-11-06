(function() {
	"use strict";

	angular
		.module('omerraker')
		.config(AppConfig);

	function AppConfig($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl: '/templates/home.html',
				controller: 'HomeController as HomeCtrl'
			});
	}

})();