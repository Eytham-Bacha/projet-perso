function initMap() {
    var mapOptions = {
      center: { lat: 45.7745828, lng: 3.0822042},
      zoom: 10, // Adjust the zoom level as needed
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  // Call the initMap function when the page has finished loading
  google.maps.event.addDomListener(window, 'load', initMap);