app.controller('champInfo', ['$scope', 'champions','$http', '$routeParams', function($scope, champions, $http, $routeParams) {
	var count = 1;
	$scope.lvlfactor = 0;



	champions.success(function(data) {

      $scope.version = data.version;
  	});
	$http({
	  method: 'GET',
	  //url: 'http://192.168.0.4/champions/resFull?id='+$routeParams.id
		url: 'http://buildtester.herokuapp.com/champions/resFull?id='+$routeParams.id

	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
			$scope.detail = response.data;

			d = $scope.detail.title;
			$scope.detail.title = d[0].toUpperCase()+d.slice(1,d.length);
			console.log($scope.detail.name);
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
			console.log(response);
	  });

	$scope.increase = function()	{
		if ($scope.lvlfactor<17) {
			$scope.lvlfactor++;

		};
	};
	$scope.decrease = function()	{
		if ($scope.lvlfactor>0) {
			$scope.lvlfactor--;

		};
	};

}]);
