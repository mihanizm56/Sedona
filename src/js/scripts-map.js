
var init = function() {

  var pinLocation = new google.maps.LatLng(36.057981, -112.123718);

  var mapOptions = {
    zoom: 15,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    
    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,


  };

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var markerColor = "";



  var startPosition = new google.maps.Marker({    // Создаем новый маркер
    position: pinLocation,                        // Устанавливаем его позицию
    map: venueMap                                // Определяем карту
                                // Путь к изображению, HTML-код
  });

}

function loadScript() {
  var script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBKJZS8iwdoRYBflFhOnLWWFhEUmP9a-uQ&callback=init";
  document.body.appendChild(script);
}

window.onload = loadScript;

