angular
    .module('showApp')
    .controller('homeCtrl', homeCtrl);



function homeCtrl($scope, $http, x) {
    var vm = this;
    console.log(window.location); 
    vm.pageHeader = {
        title: 'Shows',
        strapline: 'Tvshow info app'
    };
    vm.sidebar = {
        content: "Get the latest information about tvshows."
    };

    
    x.getData().then(function my(response){
        vm.output = response;
        }, function myError(response){
            alert(response);
        });
}
