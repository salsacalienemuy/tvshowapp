    var script = document.createElement('script');
        script.setAttribute(
            'src',
            'https://api.thetvdb.com/');
        document.getElementsByTagName('head')[0].appendChild(script);
      

      // Defines the callback function referenced in the jsonp file.
      function eqfeed_callback(data) {
        map.data.addGeoJson(data);
      }