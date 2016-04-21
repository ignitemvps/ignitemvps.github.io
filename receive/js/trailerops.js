var app = angular.module('app',['ui.grid','ui.grid.expandable','angular-confirm','ui.grid.saveState','ui.grid.selection', 'ui.grid.cellNav', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.bootstrap', 'ui.grid.autoResize','ui-notification']);



app.controller('MainCtrl', ['$scope', '$http', '$interval', '$modal', '$log', '$window', function ($scope, $http, $interval, $modal, $log,$window) {

 $scope.gotomain = function(){

    $window.location.href="trailer.html"
    };
	
 $scope.gotoreceivebydel = function(){

    $window.location.href="delivery.html"
    };	
	

  $scope.gridOptions = {
    expandableRowTemplate: 'trailerops_expanded.html',
    enableExpandableRowHeader: false,
    expandableRowHeight: 220,
    //subGridVariable will be available in subGrid scope
    expandableRowScope: {
      subGridVariable: 'subGridScopeVariable'
	  },
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
    },
  }

  $scope.gridOptions.columnDefs = [
    { name: 'deliverynbr',displayName:'Delivery Number'},
    { name: 'trailernbr',displayName:'Trailer Number'},
    { name: 'carriernbr',displayName: 'Carrier Number'},
	{ name: 'truckqty',displayName: 'Truck Qty'},
	{ name: 'door',displayName: 'Door Number'},
	{ name: 'tstatus',displayName: 'Status'},	
    { name: 'sdate',displayName:'Scheduled Date'},
    {
    name: 'Receive',
	displayName:' ',
	headerCellClass: 'header-cell',
	cellClass: 'center-align',
	enableCellEdit: false,
	enableSorting: false,
	enableFiltering: false,
	enableColumnMenu: false,
	width: '14%',
	cellTemplate: "<div class=\'ui-grid-cell-contents expand-row\'>" + "<button class=\'btn btn-primary\' ng-disabled=\'isDisabled\' ng-click=\'grid.api.expandable.toggleRowExpansion(row.entity);grid.appScope.toggle = !grid.appScope.toggle\'>{{grid.appScope.buttontext}}</button>" + "</div>"
     },

  ];
$http.get('opentrailer.txt')
  .success(function(data) {
   $scope.gridOptions.data = data;
   });

	     $scope.toggle = true;

    $scope.$watch('toggle', function(){
        $scope.buttontext = $scope.toggle ? 'Show' : 'Hide';
    });
	
$scope.deleteRow = function(){
  angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
    $scope.gridOptions.data.splice($scope.gridOptions.data.lastIndexOf(data), 1);
  });
}
}]);



app.controller('notificationController', function($scope, Notification) {

   $scope.error = function(delnbr) {
                Notification.error({message:"Delivery " + delnbr + " has been deleted!!",delay:4000,positionY:'top',positionX:'left'});
             
             };

});


