var app = angular.module('app',['ui.grid', 'ui.grid.saveState','ui.grid.selection', 'ui.grid.cellNav', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.bootstrap', 'ui.grid.autoResize','ui-notification']);



app.controller('MainCtrl', ['$scope', '$http', '$interval', '$modal', '$log', '$window', function ($scope, $http, $interval, $modal, $log,$window) {

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
    appScopeProvider: $scope.myAppScopeProvider,
    rowTemplate: "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  };





$http.get('data1.json')
  .success(function(data) {
   $scope.gridOptions.data = data;
   });


$http.get('data6.json')
 .success(function(result) {
    //$scope.Pos = result.Pos;
    $scope.pos = result;
    $scope.items = result.Items;
});



$scope.slotid = [
 {id:1,slot:'A001'},
{id:2,slot:'B001'},
{id:3,slot:'C001'},
{id:4,slot:'D001'}
];


}]);


app.controller('InfoController',
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




app.controller('notificationController', function($scope, Notification) {

    $scope.successHtml = function(po,item,qty,slot) {

                  Notification.success({message:"Delivery Received and Label Generated Successfully..!!",delay: null});
                 //alert("item "+item+ " received for PO " + po);
                };


 });

