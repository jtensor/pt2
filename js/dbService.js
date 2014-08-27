angular
	.module('myApp')
	.service('dbService', function dbService($firebase,envService){
		var firebaseUrl = envService.getEnv().firebase;
		return{
			getAppt: function(patientId){
				return $firebase(new Firebase(firebaseUrl + '/patient/' + patientId));
			}
		};
});


//EXAMPLE!!!

	// angular.module('rtfmApp')
 //  .service('threadService', function threadService(EnvironmentService, $firebase) {
 //    var firebaseUrl = EnvironmentService.getEnv().firebase;

 //    return{
 //    	getThreads: function(){
 //    		return $firebase(new Firebase(firebaseUrl + '/threads'));
 //    	},
 //    	getThread: function(threadId) {
 //    		return $firebase(new Firebase(firebaseUrl +'/threads/'+threadId));
 //    	},
 //    	getComments: function(threadId){
 //    		return $firebase(new Firebase(firebaseUrl +'/threads/'+threadId+'/comments'));
 //    	}
 //    };
