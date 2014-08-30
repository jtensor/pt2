// angular
// 	.module('myApp',['ui.router', 'firebase'])

var myApp = angular.module('myApp', ['ui.router', 'firebase']);	

myApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/',
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
			}
		}
		
	})
	.state('personal',{
		url:'/personal/:patientId',
		templateUrl:'views/patientView.html',
		controller:'patientCtrl',
		resolve:{
			apptRef: function(drService, $stateParams){
				return drService.getAppt($stateParams.patientId);
			},
			assignmentRef: function(drService, $stateParams){
				return drService.getAssignment($stateParams.patientId);
			}
		}
	 });
			
});