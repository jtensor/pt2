   
angular
	.module('myApp')
	.controller('patientCtrl', function($scope, drService, apptRef, assignmentRef) {
    	$scope.appt = apptRef.$asObject();
    	$scope.assignment = assignmentRef.$asObject();
    	console.log($scope.appt);

    	
	});
//need to inject patientId somehow
