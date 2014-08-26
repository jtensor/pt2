// angular
// 	.module('myApp',['ui.router', 'firebase'])

var myApp = angular.module('myApp', ['ui.router', 'firebase'])	

myApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'views/Step1View.html',
		controller:'dbCtrl'
	})
	// .state('patient',{
	// 	url:'/js/patient',
	// 	//templateUrl:'views/addview.html',
	// 	controller:'dbCtrl'
	// })
	.state('exercise',{
		url:'/exercise',
		templateUrl:'views/ExerciseView.html',
		controller:'dbCtrl'
	})

});