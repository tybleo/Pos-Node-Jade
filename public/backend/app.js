'use strict';

/* App Module */

var posManager = angular.module('posManager', ['ngRoute', 'ngResource']);

posManager.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/list/:page', {
                templateUrl: '/backend/home/home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/list/1'
            });
    }]);

posManager.factory('Item', ['$resource',
    function($resource){
        return $resource('/api/item/:operation/:itemId', { itemId: '@id'}, {
            query: { method: 'GET', params: { operation: 'page' }, isArray: true },
            count: { method: 'GET', params: { operation: 'count' }}
        });
    }]);
