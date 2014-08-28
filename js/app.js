// angular
// 	.module('myApp',['ui.router', 'firebase'])

var myApp = angular.module('myApp', ['ui.router', 'firebase']);	

myApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'views/Step1View.html',
		controller:'dbCtrl'
	})
	.state('patient',{
		url:'/patient/:patientId',		
		templateUrl:'views/patientView.html',
		controller:'videoCtrl',
		
	})
	.state('exercise',{
			url:'/exercise',
			templateUrl:'views/exerciseView.html',
			controller:'apptCtrl',
			// resolve:{
			// 	vidRef: function(vidService, $stateParams){
			// 		return vidService.getVideo($stateParams.patientId);
			// 	},
			// 	apptRef: function(dbService, $stateParams){
			// 		return dbService.getAppt($stateParams.patientId);
			// 	}
			// }
	});
			
});