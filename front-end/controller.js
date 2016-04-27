var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', function($scope, $http){

	$scope.search = function(){
		$scope.message = "Hello, World!";

		var apiUrl = 'http://localhost:3000/search';
		
		$http({
            method: 'POST',
            url: apiUrl,
            data: {name: $scope.who}
        }).then(
			function successCallback(response) {
				$scope.result = response.data.message;
    			// this callback will be called asynchronously
    			// when the response is available
  			}, function errorCallback(response) {
  				$scope.result = "ERROR!!!"
    			// called asynchronously if an error occurs
    			// or server returns response with an error status.
  			});
	}

});

