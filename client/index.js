'use strict';

angular.module('alpha', [])
.controller('gamma', ['$scope', function($scope){
  console.info('gamma controller initialized');
  $scope.x = 5;
  $scope.y = 7;
}])
.controller('rainbow', ['$scope', function($scope){
  console.info('rainbow controller initialized');
  $scope.colors = ['blue', 'green', 'purple', 'red'];
  $scope.newcolor = '#ff33cc';
  $scope.addColor = function(){
    console.warn('you just clicked add color');
    var color = $scope.newColor;
    console.info('you want to add the color', color);
    $scope.colors.push(color);
  }
  $scope.removeColor = function(index){
    console.warn('you just clicked remove color', index);
    $scope.colors.splice(index, 1);
  }
}])
.controller('beta', ['$scope', function($scope){
  console.info('beta controller initialized');
  $scope.x = 3;
  $scope.y = 2;
}])
.run(['$rootScope', function($rootScope){
  console.info('running the run function');
  $rootScope.z = 12;
}])
.controller('calculator', ['$scope', function($scope){
  console.info('calculator controller initialized');
  $scope.compute = function(){
    console.warn('we just clicked the green compute button');

    var result;
    var x = $scope.x;
    var y = $scope.y;
    switch($scope.op){
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
    }

    $scope.result = result;
  };
}]);
