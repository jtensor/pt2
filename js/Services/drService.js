angular
	.module('myApp')
	.service('drService', function drService($firebase, envService, $http){
		var firebaseUrl = envService.getEnv().firebase;
		return{
			getPatients:function(){
				return $firebase(new Firebase(firebaseUrl + '/patients/'));
			},
			getPatient: function(patientId){
				return $firebase(new Firebase(firebaseUrl + '/patients/' + patientId));
	 		},
	 		getAppts: function(patientId){
	 			return $firebase(new Firebase(firebaseUrl + '/patients/' + patientId + '/appts/'));
	 		},
	 		getAppt: function(patientId, apptId){
	 			return $firebase(new Firebase(firebaseUrl + '/patients/' + patientId + '/appts/' + apptId));
	 		},
	 		getAssignments: function(patientId){
	 			return $firebase(new Firebase(firebaseUrl + '/patients/' + patientId + '/assignments/'));
	 		},
	 		getAssignment: function(patientId, assignmentId){
	 			return $firebase(new Firebase(firebaseUrl + '/patients/' + patientId + '/assignments/' + assignmentId));
	 		},
	 		getUpperBody: function(id){
	 			return $firebase(new Firebase(firebaseUrl + '/resources/' + 'upper body' + id));
	 		},
	 		getLowerBody: function(id){
	 			return $firebase(new Firebase(firebaseUrl + '/resources/' + 'lower body' + id));
	 		}
		};
	});
