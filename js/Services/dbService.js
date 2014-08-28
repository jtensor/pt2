angular
	.module('myApp')
	.service('dbService', function dbService($firebase,envService){
		var firebaseUrl = envService.getEnv().firebase;
		return{
			getPatient:function(){
				return $firebase(new Firebase(firebaseUrl + '/patient/'));
			},
			getAppt: function(patientId){
				return $firebase(new Firebase(firebaseUrl + '/patient/' + patientId));
			},
			getVideo:function(patientId){
				return $firebase(new Firebase(firebaseUrl + '/patient/' + patientId));
			// },
			// onYouTubeApiLoad :function(){
	  // 			gapi.client.setApiKey('AIzaSyD9Iis-5U8f62a5bJztVAWCkNBBzC1V--w');
	  // 			$scope.search();
	 	// 	} , 
	 	// 	onClientLoad: function () {
	  //   		gapi.client.load('youtube', 'v3', onYouTubeApiLoad)
	  // 		} ,
	 	// 	onSearchResponse : function(res){
	  // 			showResponse(res)
	 	// 	},
	 	// 	showResponse:function(res){
	 	// 		var responseString = JSON.stringify(res,'',2);
	  // 			document.getElementById('res').innerHTML+=responseString;
	 	// 	},
	 	// 	search: function(){
 		// 		var request = gapi.client.youtube.search.list({
   //    				part:'snippet',
   //    				q:'ytQuery'
   // 				});
   // 				request.execute(onSearchResponse);
	 		}
		};
	});
