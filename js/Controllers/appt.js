angular
	.module('myApp')
	.controller('apptCtrl', function($scope, apptRef){
		// var appt = apptRef.$asArray();
		// appt.$bindTo($scope, 'appt');
		$scope.appt=apptRef.$asArray();
		$scope.appt.$loaded().then(function(appt){
			console.log(appt);
		});

		$scope.addAppt = function(day, month, number, time){
			debugger
			$scope.appt.$add({
				day:day,
				month:month,
				number:number,
				time:time
			});
		};
	});