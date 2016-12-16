(function() {
angular.module('showApp', ['ngRoute', 'uiGmapgoogle-maps']);

function config($routeProvider, uiGmapGoogleMapApiProvider) {

    // Google Maps API
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCM0VW99rb6eJ1vbq-aphBmLaE_wTjbp_g',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
//I see you devonte
    $routeProvider
        .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .when('/map', {
            templateUrl: '/map/map.view.html',
            controller: 'mapCtrl',
            controllerAs: 'vm'
        })
        .when('/list', {
            templateUrl: '/list/list.view.html',
            controller: 'listCtrl',
            controllerAs: 'vm'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}

angular
    .module('showApp')
    .config(['$routeProvider', 'uiGmapGoogleMapApiProvider', config]);
})();