angular
	.module('myApp')
	.controller('loginCtrl', function($scope, drService, patientsRef, apptsRef, $state){

		$scope.logMeIn = function (Name1){
			var appts = apptsRef.$asObject;
			var patients = patientsRef.$asArray();
			patients.$loaded().then(function(){

				for (i = 0; i<patients.length; i++){
					console.log(patients[i].firstName)
					
					if(patients[i].firstName === Name1){
						$state.go('personal', {patientId:patients[i].$id, apptId:patients[i].appts.$id});
					}else{
						alert("That name doesn't exist in our database");
					}
				}

			});
		};

		$scope.go = function(state) {
  			$state.go(state);
		};
		

	});

