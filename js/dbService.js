// angular
// 	.module('myApp')
// 	.service('dbService', function($firebase){
// 		var firebaseUrl

// 	var d = $q.defer();
// 	this.getPatient = function(){
// 		$http({
// 			method:'GET',
// 			url:'http://localhost:5555/views/Step1View.html'
// 		}).success(function(data){
// 			d.resolve(data);
// 		});
// 		return d.promise;
// 	};
// 	this.addPatient = function(name1,name2,address1,address2,address3,address4,injury,phone,email){
// 		$http({
// 			method:'POST',
// 			url:'http://localhost:8000/views/Step1View.html',
// 			data:{	name_first:name1,
// 					name_last:name2
// 			}
// 		}).success(function(data){
// 			d.resolve(data);
// 		}).error(function(err){
// 			d.reject(err);
// 		});
// 		return d.promise;
// 	};
// });



// 	angular.module('rtfmApp')
//   .service('threadService', function threadService(EnvironmentService, $firebase) {
//     var firebaseUrl = EnvironmentService.getEnv().firebase;

//     return{
//     	getThreads: function(){
//     		return $firebase(new Firebase(firebaseUrl + '/threads'));
//     	},
//     	getThread: function(threadId) {
//     		return $firebase(new Firebase(firebaseUrl +'/threads/'+threadId));
//     	},
//     	getComments: function(threadId){
//     		return $firebase(new Firebase(firebaseUrl +'/threads/'+threadId+'/comments'));
//     	}
//     };
