
describe('app.chat', function() {
  beforeEach(module('app.chat'));

  describe('ChatCtrl', function() {
    var chatCtrl, $scope;
    beforeEach(function() {
      inject(function($controller) {
        $scope = {};
        chatCtrl = $controller('ChatCtrl', {$scope: $scope});
      });
    });

    it('creates messages array in scope', function() {
      expect(Object.prototype.toString.call($scope.messages)).toBe('[object Array]');
    });
  });
});