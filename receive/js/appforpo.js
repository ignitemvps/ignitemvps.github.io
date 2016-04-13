var appforpo = angular.module('appforpo',['ui.grid', 'ui.grid.saveState', 'ui.grid.selection', 'ui.grid.pinning', 'ui.bootstrap','ui-notification']);



appforpo.controller('MainCtrl', ['$scope', '$http', '$interval', '$modal', '$log', '$window', function ($scope, $http, $interval, $modal, $log,$window) {

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
  appScopeProvider: $scope.myAppScopeProvider,
 // rowTemplate: "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=// \"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //rowTemplate: "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" //class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  }


   $scope.gridOptions.columnDefs = [
     { name: 'PoNbr' },
     { name: 'ItemNbr'},
     { name: 'TotQty',enableFiltering: false },
     { name: 'DueQty',enableFiltering: false },
     { name: 'DeliveryNo' },
     { name: 'UserID'},
     { name: 'Timestamp',enableFiltering: false},
     {name:'Receive',displayName: ' ',enableSorting: false,enableFiltering: false,enableColumnMenu: false,cellTemplate:'<button class="btn btn-primary" ng-click="grid.appScope.showInfo(row)">Receive</button>'}
  ];



  $http.get('data7.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
       //$scope.items = data.Items;
    });


$scope.slotid = [
 {id:1,slot:'A001'},
{id:2,slot:'B001'},
{id:3,slot:'C001'},
{id:4,slot:'D001'}
];

}]);


appforpo.controller('InfoController',
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




appforpo.controller('notificationController', function($scope, Notification) {

    $scope.successHtml = function(po,item,qty,slot) {

                  Notification.success({message:"PO Received and Label Generated Successfully..!!",delay: null});
                 //alert("item "+item+ " received for PO " + po);
                };


 });

