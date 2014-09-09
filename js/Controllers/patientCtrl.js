   
angular
	.module('myApp')
	.controller('patientCtrl', function($scope, $state, drService, apptsRef, patientsRef, assignmentsRef) {

		$scope.appts = apptsRef.$asObject();
		$scope.appts.$loaded().then(function(){
		});

    	$scope.assignments = assignmentsRef.$asObject();

    	$scope.go = function(state) {
  			$state.go(state);
		};

	});

