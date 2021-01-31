(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = "";
  $scope.totalValue = 0;
  $scope.message = "";

  $scope.displayMsg = function () {

    if ($scope.food == ""){
      $scope.totalValue = 0
    }
    else{
      $scope.totalValue = $scope.food.split(',').length;
    }

    if ($scope.totalValue == 0){
      $scope.message = "Please enter data first"
    }
    else if ($scope.totalValue <= 3){
      $scope.message = "Enjoy!"
    }
    else if ($scope.totalValue > 3){
      $scope.message = "Too much!"
    }
  };
}

})();
