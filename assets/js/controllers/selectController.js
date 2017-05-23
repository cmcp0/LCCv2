app.controller('selectController', ['$scope', 'champions', function($scope, champions) {
 	var ccount = [];
 	champions.success(function(data) {
    	ccount = data.data;
      $scope.version = data.version;
  	});



}]);
