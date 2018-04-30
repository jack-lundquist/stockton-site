//Initialize tooltips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

//Create the map variable
var map = L.map('my-map', {
    scrollWheelZoom: false
}).setView([37.914545, -121.287861], 12);


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

function getColorAmen(d) {
  switch (d) {
    case 'pet_store':
      return '#db5f57';
    case 'florist':
      return '#db8657';
    case 'gym':
      return '#dbae57';
    case 'laundry':
      return '#dbd657';
    case 'shoe_store':
      return '#b9db57';
    case 'book_store':
      return '#91db57';
    case 'doctor':
      return '#69db57';
    case 'shopping_mall':
      return '#57db6c';
    case 'pharmacy':
      return '#57db94';
    case 'bank':
      return '#57dbbb';
      case 'meal_takeaway':
        return '#57d3db';
      case 'department_store':
        return '#57acdb';
      case 'hardware_store':
        return '#5784db';
      case 'cafe':
        return '#575cdb';
      case 'clothing_store':
        return '#7957db';
      case 'beauty_salon':
        return '#a157db';
      case 'supermarket':
        return '#c957db';
      case 'bakery':
        return '#db57c6';
      case 'convenience_store':
        return '#db579e';
      case 'restaurant':
        return '#db5777';
    default:
      return 'black';
    }
  };

// function onEachFeature(feature, layer) {
//     if (layer.feature.properties && layer.feature.properties.time) {
//         layer.bindPopup("Time to X Service: " + layer.feature.properties.time);
//     };
//     layer.setStyle({
//         fillColor: '#A0EB15',
//         // fillColor: getColor(layer.feature.properties.VALUE1),
//         weight: 0,
//         opacity: 0,
//         color: "lightgrey",
//         // dashArray: '3',
//         fillOpacity: 1
//     });
// };

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};
//
var blockgroups = L.geoJSON(bg, {
    style: myStyle
});

var petStore = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "pet_store");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var florist = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "florist");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var bookStore = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "book_store");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var gym = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "gym");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var laundry = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "laundry");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var shoeStore = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "shoe_store");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var doctor = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "doctor");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var shoppingMall = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "shopping_mall");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var pharmacy = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "pharmacy");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var bank = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "bank");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var mealTakeaway = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "meal_takeaway");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var departmentStore = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "department_store");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var hardwareStore = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "hardware_store");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var cafe = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "cafe");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var clothingStore = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "clothing_store");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var beautySalon = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "beauty_salon");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var supermarket = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "supermarket");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var bakery = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "bakery");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var convenienceStore = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "convenience_store");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var restaurant = L.geoJson(amenities, {
  filter: function(feature, layer) {
    return (feature.properties.type === "restaurant");
  },
    pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85, color: getColorAmen(feature.properties.type)});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            feature.properties.name
        )
        }
  });

var legend = L.control({
    position: 'topright'
});

legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [7,8,16,29,38],
        labels = ['< 8 minutes', "8-16 minutes", '17-29 minutes',
        '30-38 minutes', '> 38 minutes'];
    div.innerHTML = '<div><b>Time from Services</b></div>';

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += '<i style="background:' + getColor(grades[i]) + '">&nbsp;</i>&nbsp;&nbsp;' +
            labels[i] + '<br/>';
    }

    return div;
};

legend.addTo(map);

var legend1 = L.control({
    position: 'bottomleft'
});

legend1.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = ['pet_store',"florist","book_store","gym","laundry","shoe_store", "doctor", "shopping_mall", "pharmacy","bank","meal_takeaway","department_store", "hardware_store","cafe","clothing_store","beauty_salon","supermarket","bakery","convenience_store","restaurant"];
        labels = ['Pet Store',"Florist","Book Store","Gym","Laundry","Shoe Store", "Doctor", "Shopping Mall", "Pharmacy","Bank","Takeout","Department Store", "Hardware Store","Cafe","Clothing Store","Beauty Salon","Supermarket","Bakery","Corner Store","Restaurant"];
    div.innerHTML = '<div><b>Amenity Type</b></div>';

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += '<i style="background:' + getColorAmen(grades[i]) + '">&nbsp;</i>&nbsp;&nbsp;' +
            labels[i] + '<br/>';
    }

    return div;
};

legend1.addTo(map);


var overlays = {
    "Block Groups": blockgroups,
    "Clothing Store": clothingStore,
    "Pet Store": petStore,
    "Florist": florist,
    "Book Store": bookStore,
    "Gym": gym,
    "Laundry": laundry,
    "Shoe Store": shoeStore,
    "Doctor": doctor,
    "Shopping Mall": shoppingMall,
    "Pharmacy": pharmacy,
    "Bank": bank,
    "Takeout": mealTakeaway,
    "Department Store": departmentStore,
    "Hardware Store": hardwareStore,
    "Cafe": cafe,
    "Beauty Salon": beautySalon,
    "Supermarket": supermarket,
    "Bakery": bakery,
    "Corner Store": convenienceStore,
    "Restaurant": restaurant
		};

L.control.layers(null, overlays).addTo(map);
//
// var ST1=5;
// var ST2=1;
// var Walk=5;
// var Bike=2;
// var Transit=7;
// var Drive=5;
// var MarginalDestination=0.1;
//
// var features = studyParcels.features;
//
// var FC = {
//     type: 'FeatureCollection',
//     features: features,
//   };
// // filteredLayer.clearLayers();
//   // create a Leaflet geojson layer from the FeatureCollection
// var j = 0;
// var parkFeatures = parks.features;
// function updateScore(feature, layer) {
//   feature.properties.POLY_CODE = 0;
//   var score = 0;
//   for (var i = 0; i < parkFeatures.length; i++) {
//     var marginalDFactor = (1-(MarginalDestination*i))
//     if (marginalDFactor > 0) {
//         console.log(((bikeScores[i][j] * Bike) + (walkScores[i][j] * Walk) + (transitScores[i][j] * Transit) + (driveScores[i][j] * Drive)))
//         score += (marginalDFactor*((bikeScores[i][j] * Bike) + (walkScores[i][j] * Walk) + (transitScores[i][j] * Transit) + (driveScores[i][j] * Drive)));
//     } else {
//         score = score
//     }
//         // score += MarginalDestination*((bikeScores[i][j] * Bike) + (walkScores[i][j] * Walk) + (transitScores[i][j] * Transit) + (driveScores[i][j] * Drive));
//   };
//   console.log(score*ST1);
//   layer.feature.properties.POLY_CODE = score*ST1;
//   j = j + 1;
// };
// filteredLayer = L.geoJSON(FC, {
//   onEachFeature: updateScore,
// });
// console.log(filteredLayer);
