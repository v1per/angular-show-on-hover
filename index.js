(function () {
  "use strict";

  var moduleName = 'angular-show-on-hover';

  angular
    .module(moduleName, [])
    .directive('showOnHover', showOnHover);

  function showOnHover($log) {

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (!attrs.showOnHover) {
          $log.error('You must specify child element in showOnHover attr');
          return;
        }
        getChild(attrs.showOnHover).css('display', "none");


        element.on('mouseenter', function () {
          getChild(attrs.showOnHover).css('display', "");
        });

        element.on('mouseleave', function () {
          getChild(attrs.showOnHover).css('display', "none");
        });

        function getChild(selector) {
          return angular.element(element[0].querySelector(selector));
        }
      }
    };
  }

  if (typeof module !== 'undefined') {
    module.exports = moduleName;
  }

}());
