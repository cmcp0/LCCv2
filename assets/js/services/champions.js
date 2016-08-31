app.factory('champions', ['$http', function($http) {
  return $http.get('http://buildtester.herokuapp.com/champions/resimages')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
