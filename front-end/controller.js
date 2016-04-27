var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', function($scope, $http){

	$scope.search = function(){
		$scope.message = "Hello, World!"
	}

});
