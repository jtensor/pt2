angular
  .module('myApp')
  .controller('dbCtrl', function dbCtrl($scope, $firebase, dbService){
	//.controller('dbCtrl', function dbCtrl($scope, $state, dbService, envService, $firebase, $apptRef){	

  var myDataRef = new Firebase('https://ptsite.firebaseio.com/patient');

  var sync = $firebase(myDataRef);
  $scope.info = sync.$asArray();


	//$scope.addPatient= function(){
 //    $scope.user = {};
 //    myDataRef.push(
 //      $scope.user
 //    );
	// };  
  $scope.addPatient= function(){
     var name1 = $scope.name1;
      var name2 = $scope.name2;
      var address1 = $scope.address1;
      var address2 = $scope.address2;
      var address3 = $scope.address3;
      var address4 = $scope.address4;
      var injury = $scope.injury;
      var phone = $scope.phone;
      var email = $scope.email;
      var appts = $scope.appts;
      myDataRef.push(
        { 
          firstName: name1, 
          lastName: name2,
          address:address1,
          addressCity:address2,
          addressState:address3,
          addressZipcode:address4,
          injury:injury,
          phone:phone,
          email:email,
          appts: []
        }
      );
    };

});

  //
  //  $scope.user = {};
  //   myDataRef.push(
  //     $scope.user
  //   );
  // };  