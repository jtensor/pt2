angular
  .module('myApp')
  .controller('drCtrl1', function drCtrl1($scope, $firebase, patientsRef){
	
  $scope.patients = patientsRef.$asArray();

  $scope.addPatient = function(newPatient){
      $scope.patients.$add(newPatient);
    };

});