var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', function($scope, $http){

	var apiUrl = 'http://localhost:3000/search';		
	$http({
           method: 'GET',
           url: apiUrl
       }).then(
		function successCallback(response) {
			$scope.studentsOnLoad = response.data;
			console.log($scope.studentsOnLoad);
 			}, function errorCallback(response) {
 				$scope.result = "ERROR!!!"
 			});



	$scope.search = function(){
		var apiUrl = 'http://10.150.41.253:3000/search';		
		$http({
            method: 'POST',
            url: apiUrl,
            data: {name: $scope.who}
        }).then(
			function successCallback(response) {
				$scope.result = response.data;
    			// this callback will be called asynchronously
    			// when the response is available
  			}, function errorCallback(response) {
  				$scope.result = "ERROR!!!"
    			// called asynchronously if an error occurs
    			// or server returns response with an error status.
  			});
	}

});

