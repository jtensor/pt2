angular
	.module('myApp')
	.controller('loginCtrl', function($scope, envService){	
		$scope.env = EnvironmentService.getEnv();
 		$scope.logMeIn = function(username){
   			EnvironmentService.saveUserName(username);
   			$state.go('secure.threads');
   		};

	});
