// angular
// 	.module('myApp',['ui.router', 'firebase'])

var myApp = angular.module('myApp', ['ui.router', 'firebase', 'angularjs-dropdown-multiselect']);	

myApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/patient',
		templateUrl:'views/doctorView1.html',
		controller:'drCtrl1',
		resolve:{
			patientsRef: function(drService) {
				return drService.getPatients();
			}
		}
	})
	.state('patient',{
		url:'/patient/:patientId',		
		templateUrl:'views/doctorView2.html',
		controller:'drCtrl2',
		resolve:{
			patientRef: function(drService, $stateParams){
				return drService.getPatient($stateParams.patientId);
			},
			apptsRef: function(drService, $stateParams){
				return drService.getAppts($stateParams.patientId);
			},
			assignmentsRef: function(drService, $stateParams){
				return drService.getAssignments($stateParams.patientId);
			},
			upperBodyRef: function(drService){
				return drService.getUpperBody();
			},
			lowerBodyRef: function(drService){
				return drService.getLowerBody();
			},
			cardioRef: function(drService){
				return drService.getCardio();
			}
		}
	})
	.state('login',{
		url:'/',
		templateUrl:'views/loginView.html',
		controller:'loginCtrl',
		resolve:{
			apptsRef: function(drService, $stateParams){
				return drService.getAppts($stateParams.patientId, $stateParams.apptId);
			},
			patientsRef: function(drService) {
				return drService.getPatients();
			}
		}
	})
	.state('personal',{
		url:'/personal/:patientId',
		templateUrl:'views/patientView.html',
		controller:'patientCtrl',
		resolve:{
			apptsRef: function(drService, $stateParams){
				return drService.getAppts($stateParams.patientId, $stateParams.apptId);
			},
			assignmentsRef: function(drService, $stateParams){
				return drService.getAssignments($stateParams.patientId);
			},
			patientsRef: function(drService) {
				return drService.getPatients();
			}
		}

	 });
			
});