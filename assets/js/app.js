var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'selectController',
      templateUrl: 'templates/champSelector.html'
    })
  .when('/champ/:id',{
    controller: 'champInfo',
    templateUrl: 'templates/champInfo.html'
  })
    .otherwise({
      redirectTo: '/'
    });
});
