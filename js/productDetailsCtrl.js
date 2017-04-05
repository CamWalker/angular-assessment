angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams) {
  $scope.getProductDetails = function() {
    var promise = shopService.getProductDetails($stateParams.id);
    promise.then(function(reply) {
      $scope.productDetails = reply;
    })
  }
  $scope.getProductDetails();
})
