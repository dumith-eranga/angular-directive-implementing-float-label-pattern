var app = angular.module('floatingLabelApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.user = {};
});

app.directive('withFloatingLabel', function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            var template = '<div class="floating-label">' + attrs.placeholder +'</div>';

            //append floating label template
            $element.after(template);

            //remove placeholder
            $element.removeAttr('placeholder');

            $scope.$watch(function () {
                if($element.val().toString().length < 1) {
                    $element.addClass('empty');
                } else {
                    $element.removeClass('empty');
                }
            });
        }
    };
});