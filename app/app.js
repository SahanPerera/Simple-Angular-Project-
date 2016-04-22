angular.module('MySimpleApp',['ui.router', 'Login.controllers','Home.controllers'])
.run(function() {
   
}) 
.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider    
    .state('home', {
        abstract:true,       
        templateUrl: 'views/templates/home.html' 
    })
    .state('login', {
        abstract:true,        
        templateUrl: 'views/templates/login.html',
    })
    .state('login.login', {
        url: '/login', 
        templateUrl: 'views/login.html',
        controller:'LoginController'
    })     
    .state('home.dashboard', {
        url: '/dashboard', 
        templateUrl: 'views/dashboard.html',
        controller:'DashboardController'
    })
    $urlRouterProvider.otherwise('/login');
})

