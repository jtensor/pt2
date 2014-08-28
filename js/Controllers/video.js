angular
	.module('myApp')
	.controller('videoCtrl', function videoCtrl($scope, vidService){
		$scope.search = function(){
			//debugger
			vidService.search($scope.query).then(function(res){
				$scope.results = res;
			});
		};

		// $scope.video = vidRef.$asArray();
		// $scope.video.$loaded().then(function(video){
		// 	console.log(video);
		// });
		// $scope.videoList = function(title){	//not sure what will go in this function-
		// 	$scope.video.$add({
		// 		title:title
		// 	});
		// };
	});

