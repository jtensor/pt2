angular
	.module('myApp')
	.controller('loginCtrl', function($scope, $location, drService){
		
		$scope.logMeIn = function (Name1){
			for (i = 0; i<patients.length; i++){
				{{patients.firstName}}
				if($scope.patients[i].firstName === Name1){
					var path = personal/patients[i].patientId;
				}else{
					alert("That name doesn't exist in our database");
				}
			}
		};
		$scope.go = function() {
  			$location.path();
		};
		

	});
