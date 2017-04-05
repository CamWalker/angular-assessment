angular.module('assessment').service('shopService', function($http) {

  this.getProducts = function () {
    var promise = $http.get('http://practiceapi.devmounta.in/products')
    return promise.then(function(response) {
      console.log(response.data);
      return response.data;
    })
  }

  this.getProductDetails = function (id) {
    var promise = $http.get('http://practiceapi.devmounta.in/products/' + id)
    return promise.then(function(response) {
      // console.log(response.data);
      return response.data;
    })
  }

})
