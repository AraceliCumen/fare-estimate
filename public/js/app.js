/* Inicializa y agrega el mapa cuando se carga la página web */
initMap = () => {
  // variable para la ruta
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
  });

  /* Al cargar la pagina se pedirá permiso para saber la ubicación geografica del user */
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  let functionError = (error) =>{
    alert('We have an error locating your location');
  };
  
  let search = () => {
    event.preventDefault(event);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(functionSuccess, functionError);
    }
  };
};