angular
	.module('myApp')
  	.service('envService', function envService($window) {
	    return {
	      	getEnv: function () {
	        	return $window.env;
          }
        };
    	   
  });