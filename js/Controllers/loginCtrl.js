angular
	.module('myApp')
	.controller('loginCtrl', function($scope, drService, $state){

		$scope.logMeIn = function (Name1){

			 var patients = drService.getPatients();
			 console.log(patients);
			 debugger;
			for (i = 0; i<patients.length; i++){
				console.log(patients.firstName)
				if($scope.patients[i].firstName === Name1){
					var path = personal/patients[i].patientId;
				}else{
					alert("That name doesn't exist in our database");
				}
			}
			$scope.go = function(path){
					$state.go(path);
				};
		};
		$scope.go = function(state) {
  			$state.go(state);
		};
		

	});

