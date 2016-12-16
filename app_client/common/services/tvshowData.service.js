
    angular
        .module('showApp')
        .service('x', x);



    function x($http) {
  
        var getData =  function(){
            return $http.jsonp('https://api.thetvdb.com/', 
            {
                    jsonpCallbackParam: 'callback'
                });        
        }        

        return {
            getData: getData,
        };
    }
  /*
        var getData =  function(){
            return $http.get('http://api.sigimera.org/v1/crises?auth_token=pYoCeHLDJqc-9fRMi9Ns');        
        }        

        return {
            getData: getData,
        };
        */
       /*
        var getData =  function(){
            return $http.jsonp('https://api.sigimera.org/v1/crises?auth_token=pYoCeHLDJqc-9fRMi9Ns'
                     + "?callback=JSON_CALLBACK", {
                    jsonpCallbackParam: 'callback'
                });        
        }
        return {
            getData: getData
        };
    }
    */
    
//I tried many APIs to retrieve tvshow data
//http://api.thetvdb.com/