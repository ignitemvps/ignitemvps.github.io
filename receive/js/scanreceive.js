var scanreceive = angular.module('scanreceive',['ui.grid','ui.grid.edit', 'ui.grid.saveState', 'ui.grid.selection', 'ui.grid.pinning', 'ui.bootstrap','ui-notification']);



scanreceive.controller('MainCtrl', ['$scope', '$http', '$interval', '$modal', '$log', '$window', function ($scope, $http, $interval, $modal, $log, $window) {

 $scope.gotomain = function(){

    $window.location.href="/receive/receiving.html"
    };

  $scope.myAppScopeProvider = {

      showInfo : function(row) {
           var modalInstance = $modal.open({
                controller: 'InfoController',
                templateUrl: 'ngTemplate/infoPopup.html',
                resolve: {
                  selectedRow: function () {
                      return row.entity;
                  }
                }
           });

           modalInstance.result.then(function (selectedItem) {
             $log.log('modal selected Row: ' + selectedItem);
           }, function () {
             $log.info('Modal dismissed at: ' + new Date());

           });
      }
  }

  $scope.gridOptions = {

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
    },
  appScopeProvider: $scope.myAppScopeProvider
}


   $scope.gridOptions.columnDefs = [
     { name: 'ItemNbr',enableCellEdit: false },
     { name: 'QRCode',enableFiltering: false,enableSorting: false,enableCellEdit: false,cellTemplate:"<img width=\"100px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
    // {name:'MetaData',enableSorting: false,enableColumnMenu: false,},
     {name:'Receive',displayName: ' ',enableSorting: false,enableFiltering: false,enableColumnMenu: false,cellTemplate:'<div id="scanbutton"><button type="button" class="btn btn-primary" ng-click="grid.appScope.showInfo(row)">Receive</button></div>'}
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


scanreceive.controller('InfoController',
    ['$scope', '$modal', '$modalInstance', '$filter', '$interval', 'selectedRow',
    function ($scope, $modal, $modalInstance, $filter, $interval, selectedRow) {

        $scope.selectedRow = selectedRow;

       $scope.ok = function () {
            $scope.selectedRow = null;
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $scope.selectedRow = null;
            $modalInstance.dismiss('cancel');
        };

    }

]);




scanreceive.controller('notificationController', function($scope, Notification) {

    $scope.successHtml = function(po,item,qty,slot) {

                  Notification.success({message:"Item Received and Label Generated Successfully..!!",delay: null});
                 //alert("item "+item+ " received for PO " + po);
                };


 });

