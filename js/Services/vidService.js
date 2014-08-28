angular
	.module('myApp')
	.service('vidService', function ($firebase,$http){

		var apiToken = ' AIzaSyD9Iis-5U8f62a5bJztVAWCkNBBzC1V--w';

    	this.search = function (query) {
	        return $http({ 
		        	method: 'GET', 
		        	url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + apiToken })
		        .then(function (res) {
		            console.log(res.data.items);
		            return res.data.items;
	        });
		   };

		// return{
			
		// 	getAppt: function(patientId){
		// 		return $firebase(new Firebase(firebaseUrl + '/patient/' + patientId));
		// 	},
		// 	getVideo:function(patientId){
		// 		return $firebase(new Firebase(firebaseUrl + '/patient/' + patientId));
		// 	},
		// 	onYouTubeApiLoad :function(){
	 //  			gapi.client.setApiKey('AIzaSyD9Iis-5U8f62a5bJztVAWCkNBBzC1V--w');
	 //  			$scope.search();
	 // 		} , 
	 // 		onClientLoad: function () {
	 //    		gapi.client.load('youtube', 'v3', onYouTubeApiLoad)
	 //  		} ,
	 // 		onSearchResponse : function(res){
	 //  			showResponse(res)
	 // 		},
	 // 		showResponse:function(res){
	 // 			var responseString = JSON.stringify(res,'',2);
	 //  			document.getElementById('res').innerHTML+=responseString;
	 // 		},
	 // 		search: function(){
 	// 			var request = gapi.client.youtube.search.list({
  //     				part:'snippet',
  //     				q:'ytQuery'
  //  				});
  //  				request.execute(onSearchResponse);
	 // 		}
		// };
	});




// 	var youtubeApp = angular.module('youtubeApp');
// var apiToken = ' AIzaSyD9Iis-5U8f62a5bJztVAWCkNBBzC1V--w';

// youtubeApp.service('youtubeService', function ($http) {
//     this.search = function (query) {
//         return $http({ method: 'GET', url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&type=video&key=' + apiToken }).then(function (res) {
//             console.log(res.data.items);
//             return res.data.items;
//         });
//     };


