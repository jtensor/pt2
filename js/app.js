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
	.state('patient',{
		url:'/patient/:patientId',		
		templateUrl:'views/patientView.html',
		controller:'dbCtrl',
		resolve:{
			apptRef: function(dbService, $stateParams){
				return dbService.getAppt($stateParams.patientId);
			}
		}
	})
	.state('exercise',{
			url:'/exercise',
			templateUrl:'views/exerciseView.html',
			controller:'dbCtrl'
	});
			//EXAMPLE!
				// .state('secure',{
				// 	abstract:true,
				// 	template:'<div ui-view>',
				// 	controller:'SecureCtrl',
				// 	resolve:{
				// 		username:function(UserService){
				// 			return UserService.getUser();
				// 		}
				// 	}
				// })
				// .state('secure.thread',{
				// 	url:'/thread/:threadId',
				// 	templateUrl:'views/thread.html',
				// 	controller:'ThreadCtrl',
				// 	resolve:{
				// 		threadRef: function(threadService, $stateParams){
				// 			return threadService.getThread($stateParams.threadId);
				// 		},
				// 		commentsRef: function(threadService,$stateParams){
				// 			return threadService.getComments($stateParams.threadId);
				// 		}	
				// 	}
				// });


	

});