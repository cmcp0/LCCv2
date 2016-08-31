app.factory('championsf', ['$http', function($http,id) {


    return $http.get('http://192.168.0.4:1337/champions/resFull?id='+id)
              .success(function(data) {
                return data;
              })
              .error(function(err) {
                return err;
              });
  

}]);
