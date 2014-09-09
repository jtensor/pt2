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

        var assignments = $scope.assignments;
        $scope.removeAssignments = function(assignments){
            for( i = 0; i<assignments.length; i++){
                $scope.assignments.$remove(i);
        }
        };

        $scope.writeID = function(o){
              assignments.$remove(o.$id);
            }
        $scope.redo = function(o){
              assignments.$remove(o.$id);
            }

        $scope.exerciseModel = [];
        $scope.exerciseText = {buttonDefaultText: 'Select Exercises'};
        $scope.exerciseData =[ {id: "{{upperExercises.externalRotation}}", label: "External Rotation", type: "upper"},
                    {id: "{{upperExercises.internalRotation}}", label: "Internal Rotation", type: "upper"},
                    {id: "{{lowerExercises.anklePump}}", label: "Ankle Pumps", type: "lower"},
                    {id: "{{lowerExercises.quadSets}}", label: "Quadriceps Setting", type: "lower"}
                     ];
        $scope.exerciseSettings = { groupByTextProvider: function(groupValue) {
            if (groupValue === 'upper'){
                return 'Upper Body';
            } else {
                return 'Lower Body';
            }
        }
        };




	});


