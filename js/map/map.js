function initialize() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      response = JSON.parse(xmlhttp.responseText);
      setMap(response.data);
    }
  };
  xmlhttp.open("GET", "./inc/map.php");
  xmlhttp.send();
}

function setMap(response) {
  // console.log(response);
  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(51.4778, 0.0015)
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var markers = [];
  var contents = new Object();
  for(var i=0; i<Object.keys(response).length; i++) {
    if(response[i].institutions.hide == true) {
      continue;
    }
    
    var latLng = new google.maps.LatLng(response[i].institutions.latitude, response[i].institutions.longitude);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: response[i].institutions.name,
      icon: './images/marker/marker_pink.png'
    });

    var infoWindow = new google.maps.InfoWindow();
    var header = (response[i].institutions.link?'<a href="' +response[i].institutions.link+ '">' + response[i].institutions.name + '</a>':response[i].institutions.name) + "</h6>"
    var semester_link = response[i].programs.semester_link?'<h6><a href="' +response[i].programs.semester_link+ '">' + "Semester Program" + '</a></h6>':""
    var summer_link = response[i].programs.summer_link?'<h6><a href="' +response[i].programs.summer_link+ '">' + "Summer Program" + '</a></h6>':""
    var winter_link = response[i].programs.winter_link?'<h6><a href="' +response[i].programs.winter_link+ '">' + "Winter Program" + '</a></h6>':""

    var infoContent = "<h3>" + header + "</h3>"
      + "<h6>Founded Year - " + response[i].institutions.since + "</h6>"
      + "<h6>Location - " + response[i].institutions.city +  ", " + response[i].institutions.country + "</h6>"
      + semester_link
      + summer_link
      + winter_link
      // + "<h6>Institution Link - " + (response[i].institutions.link?'<a href="' +response[i].institutions.link+ '">' + "Link" + '</a>':"None") + "</h6>"
      // + "<h6>Semester Program - " + (response[i].programs.semester_link?'<a href="' +response[i].programs.semester_link+ '">' + "Link" + '</a>':"None") + "</h6>"
      // + "<h6>Summer Program - " + (response[i].programs.summer_link?'<a href="' +response[i].programs.summer_link+ '">' + "Link" + '</a>':"None") + "</h6>"
      // + "<h6>Winter Program - " + (response[i].programs.winter_link?'<a href="' +response[i].programs.winter_link+ '">' + "Link" + '</a>':"None") + "</h6>"

    if(response[i].term) {
      infoContent += "<h6>Terms - " + response[i].programs.term + "</h6>";
    }

    if(response[i].language) {
      infoContent += "<h6>Languages - " + response[i].programs.language + "</h6>";
    }

    contents[response[i].institutions.name] = infoContent;

    google.maps.event.addListener(marker, 'click', (function(marker, infoWindow, content, i) {
      return function() {
        map.setZoom(16);
        map.setCenter(marker.getPosition());
        infoWindow.setContent(content);
        infoWindow.open(map,marker);
        var table = $('#main_table').DataTable();
        table.search(response[i].institutions.name).draw();

      }
    })(marker, infoWindow, infoContent, i));
    markers.push(marker);
  }

  var table = $('#main_table').DataTable();
  $('#main_table tbody').on('click', 'tr', function () { // select the tbody that is nested inside the main table 
    var data = table.row( this ).data();
    for(let i=0; i<markers.length; i++){
      if(markers[i].title===data.name){
        console.log(markers[i])

        // var infoWindow = new google.maps.InfoWindow();
        // var infoContent = "<h3>" + markers[i].institutions.name + "</h3>"
        // + "<h6>Founded Year - " + markers[i].institutions.since + "</h6>"
        // + "<h6>Location - " + markers[i].institutions.city +  ", " + markers[i].institutions.country + "</h6>"

        // if(markers[i].term) {
        //   infoContent += "<h6>Terms - " + markers[i].programs.term + "</h6>";
        // }

        // if(markers[i].language) {
        //   infoContent += "<h6>Languages - " + markers[i].programs.language + "</h6>";
        // }

        map.setZoom(16);
        map.setCenter(markers[i].getPosition());
        infoWindow.setContent(contents[markers[i].title]);
        infoWindow.open(map,markers[i])
        table.search(markers[i].title).draw();
        break;
      }
    }
    // console.log(data);
  });

  var clusterStyles = [
  {
    textColor: 'white',
    url: './images/marker/marker_green.png',
    width: 50,
    height: 72,
    anchor: [16, 0]
  },
  {
    textColor: 'white',
    url: './images/marker/marker_orange.png',
    width: 50,
    height: 72,
    anchor: [16, 0]
  },
  {
    textColor: 'white',
    url: './images/marker/marker_blue.png',
    width: 50,
    height: 72,
    anchor: [16, 0]
  },
  {
    textColor: 'white',
    url: './images/marker/marker_purple.png',
    width: 50,
    height: 72,
    anchor: [16, 0]
  },
  {
    textColor: 'white',
    url: './images/marker/marker_black.png',
    width: 50,
    height: 72,
    anchor: [16, 0]
  }
  ];

  var mcOptions = {
    gridSize: 80,
    styles : clusterStyles,
    maxZoom: 15
  };

  var mc = new MarkerClusterer(map, markers, mcOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);