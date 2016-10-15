'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  	.controller('LoginCtrl', function ($cookies, $scope, login, $location) 
  	{
    	this.awesomeThings = [
      	'HTML5 Boilerplate',
      	'AngularJS',
      	'Karma'
    	];

	    $scope.checkCookies = function()
	    {
	 		if($cookies.get('token') == undefined )
	 			console.log('has not been defined yet');      
 			else
 			{
 				console.log('has been defined')
 				$location.path('/projects');
 			}
	    }

	    $scope.validateUser = function()
	    {
	     	if ($scope.userName == undefined || $scope.userPassword == undefined)
		    	window.alert("Invalid Username and Password Combination");
	    	else
	    		$scope.authenticate();
	    }

	  	$scope.authenticate = function()
	  	{
	  		login.userlogin($scope.userName, $scope.userPassword).then(
  			function (response) 
	  		{
	  			console.log(response);
	  			$location.path('/projects');
          	}, 
          	function (error) 
          	{
        		console.error(error);
              	$scope.userName = '';
            });
	  	};

        // This has to be at the bottom of your controller
	    var init = function () 
	    {
       		$scope.checkCookies();
	    };

	    init(); 
  	});
