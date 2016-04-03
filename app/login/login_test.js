
describe('app.login', function() {
  beforeEach(function() {
    module('app');
    module('app.login');
  });

  describe('LoginCtrl', function() {
    var loginCtrl, $scope;
    beforeEach(function() {
      inject(function($controller) {
        $scope = {};
        loginCtrl = $controller('LoginCtrl', {$scope: $scope});
      });
    });

    it('should define login function', function() {
      expect(typeof $scope.login).toBe('function');
    });

  });
});