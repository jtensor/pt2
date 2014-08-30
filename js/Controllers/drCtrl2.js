angular
	.module('myApp')
	.controller('drCtrl2', function($scope, drService, patientRef, apptsRef, assignmentsRef, upperBodyRef, lowerBodyRef){	
		
		$scope.patient = patientRef.$asObject();
		$scope.appts = apptsRef.$asArray();
		$scope.assignments = assignmentsRef.$asArray();

		$scope.addAppt = function(newAppt){
			$scope.appts.$remove(0);
      		$scope.appts.$add(newAppt); 
    	};
    	$scope.addAssignment = function(newAssignment){
    		$scope.assignments.$add(newAssignment);
    	};

    	$scope.exercises = lowerBodyRef.$asArray();
	});


