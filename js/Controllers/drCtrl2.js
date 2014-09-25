angular
	.module('myApp')
	.controller('drCtrl2', function($scope, $state, drService, patientRef, apptsRef, assignmentsRef, upperBodyRef, lowerBodyRef, cardioRef){	
		
		$scope.patient = patientRef.$asObject();
		$scope.appts = apptsRef.$asArray();
		$scope.assignments = assignmentsRef.$asArray();
        $scope.lowerExercises = lowerBodyRef.$asObject();
        $scope.upperExercises = upperBodyRef.$asObject();
        $scope.cardio = cardioRef.$asObject();

        $scope.days =['Mon', 'Tues', 'Wed', 'Thur', 'Fri'];

		$scope.addAppt = function(newAppt){
			$scope.appts.$remove(0);
      		$scope.appts.$add(newAppt); 
            $scope.showing=true;
    	};

    	$scope.addAssignment = function(newAssignment){
    		if (typeof newAssignment === 'string'){
    			newAssignment = JSON.parse(newAssignment);
    		};
    		$scope.assignments.$add(newAssignment);
    	};

    	$scope.go = function(state) {
  			$state.go(state);
		};

        $scope.redo = function(o){
              $scope.assignments.$remove(o);
            }

// This multi-select menu

        $scope.exerciseModel = {};
        $scope.exerciseText = {buttonDefaultText: 'Select Exercises'};
        $scope.exerciseData =[ 
                    {id:1, value: "{{upperExercises.externalRotation}}", label: "External Rotation", type: "upper"},
                    {id:2, value: "{{upperExercises.internalRotation}}", label: "Internal Rotation", type: "upper"},
                    {id:3, value: "{{upperExercises.biceps}}", label: "Bicep Curl", type: "upper"},
                    {id:4, value: "{{upperExercises.T}}", label: "Standing T", type: "upper"},
                    {id:5, value: "{{upperExercises.W}}", label: "W exercise", type: "upper"},
                    {id:6, value: "{{upperExercises.forwardPunch}}", label: "Forward Punch", type: "upper"},
                    {id:7, value: "{{upperExercises.hug}}", label: "Dynamic Hug", type: "upper"},
                    {id:8, value: "{{upperExercises.row}}", label: "Row", type: "upper"},
                    {id:9, value: "{{upperExercises.wallBall}}", label: "Ball on the Wall", type: "upper"},
                    {id:10, value: "{{lowerExercises.anklePump}}", label: "Ankle Pumps", type: "lower"},
                    {id:11, value: "{{lowerExercises.quadSets}}", label: "Quadriceps Setting", type: "lower"},
                    {id:12, value: "{{lowerExercises.heelSlides}}", label: "Heel Slides", type: "lower"},
                    {id:13, value: "{{lowerExercises.hipAbduct}}", label: "Hip Abduction", type: "lower"},
                    {id:14, value: "{{lowerExercises.legRaise}}", label: "Straight Leg Raises", type: "lower"},
                    {id:15, value: "{{lowerExercises.longArc}}", label: "Long Arc Quads", type: "lower"},
                    {id:16, value: "{{lowerExercises.shortArc}}", label: "Short Arc Quads", type: "lower"},
                    {id:17, value: "{{lowerExercises.luck}}", label: "Good Luck", type: "always"},
                     ];
        $scope.exerciseSettings = { groupByTextProvider: function(groupValue) {
            if (groupValue === 'upper'){
                return 'Upper Body';
            } else if (groupValue === 'lower') {
                return 'Lower Body';
            }else{
                return 'Add Last'
            }
        }
        };




	});


