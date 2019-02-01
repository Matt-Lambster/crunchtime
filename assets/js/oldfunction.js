var config = {
    apiKey: "AIzaSyCoOGrGt0CINOs1a20Tn1O9rJJ_GEjUmeE",
    authDomain: "crunchtime-da4a8.firebaseapp.com",
    databaseURL: "https://crunchtime-da4a8.firebaseio.com",
    projectId: "crunchtime-da4a8",
    storageBucket: "crunchtime-da4a8.appspot.com",
    messagingSenderId: "851108485503"
  };
  firebase.initializeApp(config);


function simpleLibrary(library) {
    var request = new XMLHttpRequest();
        request.open("GET", "https://crunchtime-da4a8.firebaseio.com/libraries/" + library + ".json", false);
        request.onload = function(){
            var data = JSON.parse(this.response);
            seats = data.capacity - data.count;
            capacity = Math.round((data.count / data.capacity) * 100);
            image = data.image;
            var d = new Date();
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            day = days[d.getDay()];
            if (day == "Friday" || day == "Saturday") {
                hours = data.weekend;
            } else {
                hours = data.weekday;
            }

            if (data.sound == true) {
                soundimage = 'https://i.imgur.com/d4fQUV5.png';
            } else {
                soundimage = 'https://i.imgur.com/QuEuwB4.png';
            }
            if (data.food == true) {
                foodimg = 'https://i.imgur.com/J896HT9.png';
            } else {
                foodimg = 'https://i.imgur.com/eZpInTj.png';
            }
        }
        request.send();

    var text = "\
    <div id = 'cardcontainer'>\
      <div id = 'imagecontainer'>\
        <img src = '" + image + "'>\
      </div>\
      <div id = 'infoblock'>\
      "+ library +"\
      </div>\
      <div id = 'infoline'>\
        <img src = '"+ soundimage +"'>\
        <img src = '"+ foodimg +"'>\
        <div id = 'infotext'>\
          "+ day +"\
          "+ hours +"\
        </div>\
      </div>\
      Seats: "+ seats +"<br>\
      Capacity: "+ capacity +"% full\
      <button id='submit' onclick='seeMore()'>See More</button>\
    </div>\
    ";



    return text;
  }