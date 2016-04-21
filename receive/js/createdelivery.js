var app = angular.module('app',['ui.grid','ui.grid.saveState','ui.grid.selection', 'ui.grid.cellNav', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.bootstrap', 'ui.grid.autoResize','ui-notification']);



app.controller('gridCtrl', ['$rootScope','$scope', '$http', '$interval', '$modal', '$log', '$window', function ($rootScope,$scope, $http, $interval, $modal, $log,$window) {
	
	
  $scope.gridOptions = {
    showFooter: true,
    enableSorting: true,
    multiSelect: false,
    enableFiltering: true,
    enableRowSelection: true,
    enableSelectAll: false,
    rowHeight: 'auto',
    enableRowHeaderSelection: false,
    selectionRowHeaderWidth: 35,
    noUnselect: true,
    enableGridMenu: true,
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
    }
  }

  $scope.gridOptions.columnDefs = [
    { name: 'deliverynbr',displayName:'Delivery Number'},
    { name: 'trailernbr',displayName:'Trailer Number'},
    { name: 'carriernbr',displayName: 'Carrier Number'},
	{ name: 'truckqty',displayName: 'Truck Qty'},
	{ name: 'door',displayName: 'Door Number'},
	{ name: 'tstatus',displayName: 'Status'},	
    { name: 'sdate',displayName:'Scheduled Date'}
  ];
  
$http.get('opentrailer.txt')
  .success(function(data) {
   $scope.gridOptions.data = data;
   });

//	     $scope.toggle = true;

  //  $scope.$watch('toggle', function(){
  //  $scope.$watch('toggle', function(){
    //    $scope.buttontext = $scope.toggle ? 'Show' : 'Hide';
    //});
	
  $scope.toggle = false;

    $scope.$watch('toggle', function(){
        $scope.toggleText = $scope.toggle ? 'Hide Delivery' : 'Show Delivery';
    })
	
	
}]);



app.controller('MainCtrl',['$rootScope','$scope','$window',function($rootScope,$scope,$window) {

 $scope.gotomain = function(){

    $window.location.href="trailer.html"
    };
	
$scope.pos = [
 {id:1,ponbr:23456},
{id:2,ponbr:34789},
{id:3,ponbr:23897},
{id:4,ponbr:76234}
];

}]);


