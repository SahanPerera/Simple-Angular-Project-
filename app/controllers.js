var LoginModule =  angular.module('Login.controllers',[])

LoginModule.controller('LoginController',function($scope){
	console.log("login");
});

var HomeModule = angular.module('Home.controllers',[])

HomeModule.controller('DashboardController',function($scope){
	console.log('dashboad');
});