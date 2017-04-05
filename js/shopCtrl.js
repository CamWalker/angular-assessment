angular.module('assessment').controller('shopCtrl', function($scope, shopService) {
  $scope.getProducts = function() {
    var promise = shopService.getProducts();
    promise.then(function(reply) {
      $scope.products = reply;
    })
  }
  $scope.getProducts();

  $scope.visible = function() {
    $scope.show = !$scope.show
  }
})
