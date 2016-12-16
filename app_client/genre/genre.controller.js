(function() {
  
  console.log("I'm here before");
  
  angular
    .module('showApp')
    .controller('mapCtrl', mapCtrl);

 mapCtrl.$inject = ['$scope', 'uiGmapGoogleMapApi'];

function mapCtrl($scope, uiGmapGoogleMapApi) {
    var vm = this;
    console.log("I'm here");

    vm.map = {
      center: {
        latitude: 34.9824649,
        longitude: -101.9175232
      },
      zoom: 14
    };
    
    vm.pageHeader = {
        title: 'Shows',
        strapline: 'Tvshow info app'
    };
    vm.sidebar = {
        content: "Get the latest information about tvshows."
    };
    
    uiGmapGoogleMapApi.then(function(maps) {
      //vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    });
  }
})();