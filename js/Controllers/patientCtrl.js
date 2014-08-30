   
angular
	.module('myApp')
	.controller('patientCtrl', function($scope, drService, apptRef, assignmentRef) {
    	$scope.appt = apptRef.$asObject();
    	$scope.assignment = assignmentRef.$asObject();
    	
	});
	//may need getPatient here too
