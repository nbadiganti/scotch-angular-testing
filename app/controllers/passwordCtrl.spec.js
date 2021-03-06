describe('PasswordController', function() {
    beforeEach(module('api.controllers'));
  
    var $controller, $rootScope;
  
    beforeEach(inject(function(_$controller_, _$rootScope_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    
    }));
  
    describe('$scope.grade', function() {
      it('sets the strength to "strong" if the password length is >8 chars', function() {
        var $scope = $rootScope.$new();
      
        var controller = $controller('PasswordController', { $scope: $scope });
        $scope.password = 'longerthaneightchars';
        $scope.grade();
        expect($scope.strength).toEqual('strong');
      });
    });

    describe("$scope.testcase", function(){
      it('test the variable assignment', function(){
        var $scope = $rootScope.$new();
        var controller = $controller('PasswordController', {$scope:$scope });

        $scope.testcase = "codemonkey";
        expect($scope.testcase).toEqual("codemonkey");
      })
    })
  });