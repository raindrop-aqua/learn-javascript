function PersonController($scope) {
  $scope.firstName = "Taro";
  $scope.lastName = "Yamada";
  $scope.getFullName = function () {
    return $scope.firstName + " " + $scope.lastName;
  };
}
