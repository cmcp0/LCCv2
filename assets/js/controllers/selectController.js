app.controller('selectController', ['$scope', 'champions', function($scope, champions) {
 	var ccount = 0;
 	champions.success(function(data) {
    	$scope.champions = data.data;
      $scope.version = data.version;
  	});



}]);
