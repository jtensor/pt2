   
angular
	.module('myApp')
	.controller('patientCtrl', function($scope, drService, apptRef) {
    	scope.appt = apptRef.$asObject();
    	
	});
	//may need getPatient here too
