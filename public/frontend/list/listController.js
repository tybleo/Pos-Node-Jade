posApp.controller('ListController', ['$scope', '$location', '$route', '$routeParams', 'Cart',
    function($scope, $location, $route, $routeParams, Cart) {
        var initialize = function () {
            Cart.available().then(function (data) {
                $scope.items = data;
            });
        };
        initialize();

        $scope.buy = function (item) {
            Cart.alterAmount(item, null, 1);
        };
    }]);


