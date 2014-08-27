angular
  .module('myApp')
  .controller('dbCtrl', function dbCtrl($scope, $firebase){
	//.controller('dbCtrl', function dbCtrl($scope, $state, dbService, envService, $firebase, $apptRef){	

  var myDataRef = new Firebase('https://ptsite.firebaseio.com/');

  var sync = $firebase(myDataRef);
  $scope.info = sync.$asArray();


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
//Attempt1
  $scope.appts = sync.$asArray(); 
  $scope.addAppt = function(Day,Month,number){

    var Day = $scope.Day;
    var Month = $scope.Month;
    var number = $scope.number;
    myDataRef.push(
    {
      day:Day,
      month:Month,
      date:number
    });

//Attempt2
  // var apptRef = myDataRef.child;
  // var sync = $firebase(apptRef);
  // $scope.appts = apptRef.$asArray(); 
  //   $scope.addAppt = function(Day,Month,number){
  // // var Day = $scope.Day;
  // // var Month = $scope.Month;
  // // var number = $scope.number;
  //   apptRef.push(
  //   {
  //     day:Day,
  //     month:Month,
  //     date:number
  //   });

// //attempt 3
//     $scope.appts.$add({
//         day:Day,
//         month:Month,
//         date:number
//     });
 };
      




});

