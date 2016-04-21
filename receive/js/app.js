var myApp = angular.module("myApp", []);

myApp.controller("logincntrl", function ($scope, $window) {
  $scope.call = function () {
    /*var url="http://" + $window.location.host + "menu.html"; */
    var url="menu.html"
    $window.location.href = url;                
  }

  $scope.cancel = function () {
    $scope.frm = {};
  }

  $scope.logoff = function () {
        var url="index.html";
    $window.location.href = url;
  }

});

myApp.controller("blogcntrl", function ($scope, $window) {
  $scope.back = function () {
  	var url4="menu.html"
  	$window.location.href = url4;
  }

  $scope.cancel = function () {
   	$scope.frm1 = {};
  }
  
});

myApp.controller("FrmController", function ($scope, $filter, $window) {
    $scope.comment = [];
    $scope.datetime = [];
    $scope.btn_add = function () {
        if($scope.txtcomment !='')
        	var date = new Date();
        	$scope.ddMMMMyyyy = $filter('date')(new Date(), 'dd, MMMM yyyy HH:mm:ss');
          $scope.comment.push($scope.ddMMMMyyyy + "   DC Associate: " + $scope.txtcomment);           
          $scope.txtcomment = "";
    }

   $scope.likecount = 0;
    $scope.likeClick = function ($inc) {
      $scope.likecount += $inc;
    }

    $scope.btn_home = function () {
    var url="menu.html"
      $window.location.href = url;
  }  

});




