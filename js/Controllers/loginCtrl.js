angular
	.module('myApp')
	.controller('loginCtrl', function($scope, drService, patientsRef, apptsRef, $state){

		var appts = apptsRef.$asObject;
		var patients = patientsRef.$asArray();

		$scope.logMeIn = function (){

			for (i = 0; i<patients.length; i++){
				
				console.log(patients[i].firstName)
				
				if(patients[i].firstName === $scope.Name1){
					var p = patients[i];
					$state.go('personal', {patientId:p.$id, apptId:p.appts.$id});
				}
			}
		};

		$scope.go = function(state) {
  			$state.go(state);
		};
		

	});

