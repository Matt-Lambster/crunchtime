// import test from "./mapstyle.js";

var map;
var allMarkers = [];
var libs = [
  ['Moffitt', 37.872646, -122.26072],
  ['Doe', 37.872285, -122.259604]
];



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.8720, lng: -122.2599},
    zoom: 18,
    disableDefaultUI: true,
    styles: test
  });

  var image = {
   url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
   // This marker is 20 pixels wide by 32 pixels high.
   size: new google.maps.Size(100, 100),
   // The origin for this image is (0, 0).
   origin: new google.maps.Point(0, 0),
   // The anchor for this image is the base of the flagpole at (0, 32).
   anchor: new google.maps.Point(0, 32)
  };
 var infowindow = new google.maps.InfoWindow({
          content: "test"
        });

  var marker, i;
  for (i = 0; i < libs.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(libs[i][1], libs[i][2]),
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
        title: libs[i][0]
      });
    allMarkers.push(marker);
  }
  for (i = 0; i < allMarkers.length; i++) {
    google.maps.event.addListener(allMarkers[i], 'click', function() {
          map.setCenter(this.getPosition());
          infowindow.setContent(simpleLibrary(this.getTitle()));
          infowindow.open(map, this);
    });
  }
}


