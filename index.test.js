require("angular");
require("angular-mocks");
require("./index.js");

describe('angular-show-on-hover', function () {
  beforeEach(angular.mock.module('angular-show-on-hover'));

  var div, span, scope;
  beforeEach(inject(function ($rootScope, $compile) {
    div = angular.element('<div show-on-hover="span"><span></span></div>');
    scope = $rootScope.$new();
    $compile(div)(scope);
    scope.$digest();
    span = angular.element(div.find('span'));
  }));

  describe('when mouse is not over the div', function () {
    it('should not show the span', function () {
      expect(span.css('display')).toBe("none");
    });
  });

  describe('when mouse is over the div', function () {
    beforeEach(function () {
      div.triggerHandler('mouseenter');
    });

    it('should show the span', function () {
      expect(span.css('display')).toBe("");
    });

    describe('and when mouse is no longer over the div', function () {
      beforeEach(function () {
        div.triggerHandler('mouseleave');
      });

      it('should hide the span', function () {
        expect(span.css('display')).toBe("none");
      });
    });
  });
});
