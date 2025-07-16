// function () {
//   'use strict';

//   // Use strict mode
//   // Setting up route
//   angular.module('app').config(['$routeProvider',
//     function($routeProvider) {
//       $routeProvider.
//         when('/home', {
//           templateUrl: 'views/home.html',
//           controller: 'HomeController'
//         }).
//         when('/about', {
//           templateUrl: 'views/about.html',
//           controller: 'AboutController'
//         }).
//         otherwise({
//           redirectTo: '/home'
//         });
//     }
//   ]);
// } 
// var app = angular.module('app', ['ngRoute']);
// app.controller('HomeController', ['$scope', function($scope) {
//   $scope.message = 'Welcome to the Home Page!';
// }]);    
// app.controller('AboutController', ['$scope', function($scope) {
//   $scope.message = 'Welcome to the About Page!';
// }]);
// app.controller('MainController', ['$scope', function($scope) {
//   $scope.message = 'Welcome to the Main Page!';
// }]);       

function x(){
    var a = 20;
    setTimeout(function(){
        console.log(a); //! 20
    }, 3000);
    console.log("hello World"); //! 20
}
x()


