//Initialize tooltips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

//Create the map variable
var map = L.map('my-map', {
    scrollWheelZoom: false
}).setView([37.914748,-121.262712], 13);

//Add the basemap
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

function getColor(d) {
  return d < 8 ? '#4FDE02' :
      d < 16 ? '#A0EB15' :
      d < 29 ? '#E9D00E' :
      d < 38 ? '#E76607' :
      '#EC0803';
};

function onEachFeature(feature, layer) {
    if (layer.feature.properties && layer.feature.properties.time) {
        layer.bindPopup("Time to X Service: " + layer.feature.properties.time);
    };
    layer.setStyle({
        fillColor: getColor(layer.feature.properties.time),
        weight: 0,
        opacity: 0,
        color: "lightgrey",
        // dashArray: '3',
        fillOpacity: 1
    });
};


L.geoJSON(test, {
  onEachFeature:onEachFeature,
}).addTo(map);

var legend = L.control({
    position: 'topright'
});

legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [7,8,16,29,38],
        labels = ['< 8 minutes', "8-16 minutes", '17-29 minutes',
        '30-38 minutes', '> 38 minutes'];
    div.innerHTML = '<div><b>Legend</b></div>';

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += '<i style="background:' + getColor(grades[i]) + '">&nbsp;</i>&nbsp;&nbsp;' +
            labels[i] + '<br/>';
    }

    return div;
};

legend.addTo(map);
