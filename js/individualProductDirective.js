angular.module('assessment').directive('product', function() {
  return {
    restrict: 'E',
    templateUrl: '././views/product-tmpl.html',
    scope: {
      product: '=',
      show: '='
    },
    controller: function($scope, shopService) {
      $scope.getProducts = shopService.getProducts;

      $scope.show = false
      $scope.visible = function() {
        $scope.show = !$scope.show
      }
    },
    link: function(scope, element, attributes) {
      scope.getProducts.then(function(reply) {
        scope.products = reply;
      })

    }
  }
})
