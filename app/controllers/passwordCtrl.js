angular.module('api.controllers', [])
.controller('PasswordController', function PasswordController($scope) {
  $scope.password = '';
  $scope.testcase = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };

  $scope.getTestcaseName = function() {
    return $scope.testcase;
  }
});