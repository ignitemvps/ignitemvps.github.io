var myApp = angular.module("myApp", []);

myApp.controller("indexcntrl", function ($scope, $window) {
  $scope.login = function () {
    var url7="http://" + $window.location.host + "/receive/login.html"
      $window.location.href = url7;
  }

});

myApp.controller("logincntrl", function ($scope, $window) {
  $scope.call = function () {
    var url="http://" + $window.location.host + "/receive/menu.html";
    $window.location.href = url;                
  }

  $scope.cancel = function () {
    $scope.frm = {};
  }

  $scope.logoff = function () {
        var url="http://" + $window.location.host + "/receive/index.html";
    $window.location.href = url;
  }

});

myApp.controller("blogcntrl", function ($scope, $window) {
  $scope.trlr_ops = function () {
    var url1="http://" + $window.location.host + "/receive/trailerops.html"
    $window.location.href = url1;
  }

  $scope.rcv_ops = function () {
  	var url2="http://" + $window.location.host + "/receive/rcvops.html"
  	$window.location.href = url2;
  }

  $scope.report = function () {
  	var url3="http://" + $window.location.host + "/receive/report.html"
  	$window.location.href = url3;
  }

  $scope.back = function () {
  	var url4="http://" + $window.location.host + "/receive/login.html"
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
    var url="http://" + $window.location.host + "/receive/menu.html"
      $window.location.href = url;
  }  

});

myApp.controller("logoutcntrl", function ($scope, $window) {
	$scope.login = function () {
		var url6="http://" + $window.location.host + "/receive/index.html"
  		$window.location.href = url6;
	}

	$scope.cancel = function () {
		$scope.frm2 = {};
	}

});

myApp.controller("reportcntrl", function ($scope, $window) {
  $scope.downloadPDF = function () {
    var doc = new jsPDF();
    doc.text(20,20, 'Hello World!');
  }

});