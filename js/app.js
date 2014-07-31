'use strict';


// Declare app level module which depends on filters, and services
angular.module('QuestionnaireApp', [
    'ngRoute',
    'QuestionnaireApp.filters',
    'QuestionnaireApp.services',
    'QuestionnaireApp.directives',
    'QuestionnaireApp.controllers',
//    'leaflet-directive'
]).
        config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'MyCtrl2'});
                $routeProvider.when('/services', {templateUrl: 'partials/services.html', controller: 'servicesCtrl'});
                $routeProvider.when('/support', {templateUrl: 'partials/support.html', controller: 'MyCtrl2'});
                $routeProvider.when('/contacts', {templateUrl: 'partials/contacts.html', controller: 'MyCtrl2'});
                $routeProvider.otherwise({redirectTo: '/home'});
            }]);
