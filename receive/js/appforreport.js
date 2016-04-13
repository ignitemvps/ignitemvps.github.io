var appforreport = angular.module('appforreport',['ui.grid', 'monospaced.qrcode', 'ui.grid.saveState','ui.grid.selection', 'ui.grid.cellNav', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.bootstrap', 'ui.grid.autoResize','ui-notification']);



appforreport.controller('MainCtrl', ['$scope', '$http', '$interval', '$modal', '$log', '$window' ,function ($scope, $http, $interval, $modal, $log,$window) {

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


  $scope.gridOptions1 = {

    showFooter: true,
    enableSorting: true,
    multiSelect: false,
    enableFiltering: true,
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

    $scope.gridOptions1.columnDefs = [
       { name: 'PoNbr' },
       {name:'DeliveryNo'},
       {name:'ItemNbr'},
       {name:'LabelNo'},
       { name: 'UserID'},
       { name: 'Timestamp'},
 {name:'ShowLabel',displayName: ' ',enableSorting: false,enableFiltering: false,enableColumnMenu: false,cellTemplate:'<button class="btn btn-primary" ng-click="grid.appScope.showInfo(row)">Show Label</button>'}
];



  $http.get('data7.json')
    .success(function(data) {
      $scope.gridOptions1.data = data;
    });


}]);


appforreport.controller('InfoController',
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




appforreport.controller('notificationController', function($scope) {

              $scope.giveprint = function(printsec) {
                              window.print();
              };



 });

