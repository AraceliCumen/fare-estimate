/* Inicializa y agrega el mapa cuando se carga la página web */
initMap = () => {
  /* variable para la ruta */
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  let laboratoriaLima = {
    lat: -12.1260837,
    lng: -77.0228761
  };

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: laboratoriaLima
  });

  let marker = new google.maps.Marker({
    position: laboratoriaLima,
    map: map,
    icon: 'assets/images/bicicleta.png'
  });

  /* Se dibujará la ruta */
  directionsDisplay.setMap(map);

  /* Autocompletar */
  let startAutoComp = (document.getElementById('start'));
  let autocompliteStart = new google.maps.places.Autocomplete(startAutoComp);
  autocompliteStart.bindTo('bounds', map);
  let EndAutoComp = (document.getElementById('end'));
  let autocompliteEnd = new google.maps.places.Autocomplete(EndAutoComp);
  autocompliteEnd.bindTo('bounds', map);

  /* Evento boton trazar ruta */
  document.getElementById('ruta').addEventListener('click', () => { 
    calculateAndDisplayRoute(directionsService, directionsDisplay);
    getPrices();

    /* Visibilisando el contenedor price rate */
    document.getElementById('container-departure').classList.add('hiden');
    document.getElementById('container-form-input').setAttribute('id', 'container-new-input');
    document.getElementById('container-rate').classList.toggle('hiden');
    document.getElementById('prices').appendChild();
  });
};

/* Calcular la ruta */
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

  /* Calcular los precios */
  function getPrices() {
    
  }
}