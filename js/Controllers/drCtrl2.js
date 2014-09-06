angular
	.module('myApp')
	.controller('drCtrl2', function($scope, $state, drService, patientRef, apptsRef, assignmentsRef, upperBodyRef, lowerBodyRef, cardioRef){	
		
		$scope.patient = patientRef.$asObject();
		$scope.appts = apptsRef.$asArray();
		$scope.assignments = assignmentsRef.$asArray();

        $scope.days =['Mon', 'Tues', 'Wed', 'Thur', 'Fri'];

		$scope.addAppt = function(newAppt){
			$scope.appts.$remove(0);
      		$scope.appts.$add(newAppt); 
    	};
    	$scope.addAssignment = function(newAssignment){
    		if (typeof newAssignment === 'string'){
    			newAssignment = JSON.parse(newAssignment);
    		};
    		$scope.assignments.$add(newAssignment);
    	};

    	$scope.lowerExercises = lowerBodyRef.$asObject();
    	$scope.upperExercises = upperBodyRef.$asObject();
    	$scope.cardio = cardioRef.$asObject();

    	$scope.go = function(state) {
  			$state.go(state);
		};

// $scope.example5model = []; 
// $scope.example5data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}]; 
// $scope.example5settings = {}; 
// $scope.example5customTexts = {buttonDefaultText: 'Select Users'}


	});


