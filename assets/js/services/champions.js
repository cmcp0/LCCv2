app.factory('champions', ['$http', function($http) {
  //return $http.get('http://192.168.0.4:1337/champions/resImages')
  return $http.get('http://buildtester.herokuapp.com/champions/resimages')

            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
