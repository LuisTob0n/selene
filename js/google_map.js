var google;

function init() {
    // Coordenadas fijas (Brooklyn, NY en este ejemplo)
    var myLatlng = new google.maps.LatLng(40.6782, -73.9442);

    // Opciones del mapa
    var mapOptions = {
        zoom: 12, // nivel de zoom (entre más alto, más cerca)
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{ "hue": "#f49935" }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    { "hue": "#a1cdfc" },
                    { "saturation": 30 },
                    { "lightness": 49 }
                ]
            }
        ]
    };

    // Elemento HTML que contendrá el mapa (usa <div id="map"></div>)
    var mapElement = document.getElementById('map');

    // Crear el mapa
    var map = new google.maps.Map(mapElement, mapOptions);

    // Marcador en la ubicación
    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png' // usa tu icono o quita esta línea
    });
}

// Inicializar el mapa cuando cargue la página
google.maps.event.addDomListener(window, 'load', init);