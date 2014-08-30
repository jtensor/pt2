angular
	.module('myApp')
	.controller('drCtrl2', function($scope, drService, patientRef, apptsRef, assignmentsRef){	
		
		$scope.patient = patientRef.$asObject();
		$scope.appts = apptsRef.$asArray();
		$scope.assignments = assignmentsRef.$asArray();

		$scope.addAppt = function(newAppt){
      		$scope.appts.$add(newAppt); //this needs to update not add, maybe?
    	};
    	$scope.addAssignment = function(newAssignment){
    		$scope.assignments.$add(newAssignment);
    	};
	});


