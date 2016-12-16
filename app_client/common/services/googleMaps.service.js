(function() {

    angular
        .module('showApp')
        .service('GoogleMaps', googleMaps);

    googleMaps.$inject = ['$http', 'KeyStore'];
    
    function initMap() {
        var map;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

    function googleMaps($http, KeyStore) {
        var getMap = function(lat, lon) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    var googlemapskey = keys.GOOGLE_MAPS_KEY;
                    return $http.jsonp('https://maps.googleapis.com/maps/api/js?key='+ googlemapskey + '&callback=initMap', {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };


        return {
            getMap: getMap,
        };
    }
    


})();