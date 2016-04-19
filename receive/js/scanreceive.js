var scanreceive = angular.module('scanreceive',['ui.grid','ui.grid.expandable','ui.grid.edit', 'ui.grid.saveState', 'ui.grid.selection', 'ui.grid.pinning', 'ui.bootstrap','ui-notification']);



scanreceive.controller('MainCtrl', ['$scope', '$http', '$interval', '$modal', '$log', '$window', function ($scope, $http, $interval, $modal, $log, $window) {

 $scope.gotomain = function(){

    $window.location.href="/receive/receiving.html"
    };

  $scope.gridOptions = {
    expandableRowTemplate: 'scanreceive_expanded.html',
    enableExpandableRowHeader: false,
    expandableRowHeight: 500,
    //subGridVariable will be available in subGrid scope
    expandableRowScope: {
      subGridVariable: 'subGridScopeVariable'
	  },
    showFooter: true,
    enableSorting: true,
    multiSelect: false,
    enableFiltering: true,
     cellClass: 'ui-grid-vcenter',
    enableRowSelection: true,
    rowHeight: 'auto',
    enableSelectAll: false,
    enableRowHeaderSelection: false,
   selectionRowHeaderWidth: 35,
    noUnselect: true,
    enableGridMenu: true,
    onRegisterApi: function(gridApi){
    $scope.gridApi = gridApi;
    }
}


   $scope.gridOptions.columnDefs = [
     { name: 'ItemNbr',enableCellEdit: false },
     { name: 'QRCode',enableFiltering: false,enableSorting: false,enableCellEdit: false,cellTemplate:"<img width=\"100px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
    {
	name: 'Receive',
	headerCellClass: 'header-cell',
	cellClass: 'center-align',
	enableCellEdit: false,
	enableSorting: false,
	enableFiltering: false,
	enableColumnMenu: false,
	width: '14%', 
    cellTemplate:"<div class=\'ui-grid-cell-contents expand-row\'>" + "<button class=\'btn btn-primary\' ng-click=\'grid.api.expandable.toggleRowExpansion(row.entity)\'>Receive</button>" + "</div>"
	 }
  ];
        $scope.gridOptions.data = [
        {ItemNbr:765123,QRCode:"css/images/qrcode1.jpeg"},
        {ItemNbr:872345,QRCode:"css/images/qrcode2.jpeg"},
        {ItemNbr:378451,QRCode:"css/images/qrcode3.jpeg"},
        {ItemNbr:983452,QRCode:"css/images/qrcode4.jpeg"},
        {ItemNbr:567823,QRCode:"css/images/qrcode5.jpeg"},
        {ItemNbr:893276,QRCode:"css/images/qrcode6.jpeg"}
      ];

$scope.slotid = [
 {id:1,slot:'A001'},
{id:2,slot:'B001'},
{id:3,slot:'C001'},
{id:4,slot:'D001'}
];

}]);



scanreceive.controller('notificationController', function($scope, Notification) {

    $scope.successHtml = function(po,item,qty,slot) {

                  Notification.success({message:"Item Received and Label Generated Successfully..!!",delay: null});
                 //alert("item "+item+ " received for PO " + po);
                };


 });

