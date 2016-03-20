var displayMap = function (octoz, clients) {

    try {

        var mapCanvas = document.getElementById('map-canvas');

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styles = [{
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{"color": "#63b5e5"}]
        }, {"featureType": "all", "elementType": "geometry.fill", "stylers": [{"color": "#004990"}]}, {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#004990"}]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{"gamma": 0.01}, {"lightness": 20}, {"color": "#fdfefe"}]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{"saturation": -31}, {"lightness": -33}, {"weight": 2}, {"gamma": 0.8}]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}, {"color": "#e5941c"}]
        }, {
            "featureType": "administrative.province",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"lightness": 30}, {"saturation": 30}]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#00468d"}]
        }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"saturation": 20}]}, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#002b57"}]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{"lightness": 20}, {"saturation": -20}]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{"lightness": 10}, {"saturation": -30}]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{"saturation": 25}, {"lightness": 25}]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#ff9900"}]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#ff9900"}]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#11ff00"}]
        }, {
            "featureType": "transit.station.bus",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {
            "featureType": "transit.station.rail",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#00468d"}]
        }, {"featureType": "water", "elementType": "all", "stylers": [{"lightness": -20}]}, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#005da4"}]
        }];
        var styles2 = [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#000000"}, {"lightness": 20}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry",
            "stylers": [{"visibility": "on"}]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"lightness": 20}, {"color": "#545454"}, {"visibility": "simplified"}]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [{"visibility": "on"}]
        }, {
            "featureType": "landscape",
            "elementType": "labels.text",
            "stylers": [{"visibility": "on"}]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{"visibility": "on"}]
        }, {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{"visibility": "on"}]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 21}]
        }, {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [{"visibility": "on"}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#000000"}, {"lightness": 17}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 18}, {"visibility": "simplified"}]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{"lightness": 16}, {"color": "#787878"}, {"visibility": "on"}]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 19}, {"visibility": "off"}]
        }, {"featureType": "transit", "elementType": "labels", "stylers": [{"visibility": "on"}]}, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#728287"}, {"lightness": 17}]
        }];
        var style3 = [{
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{"color": "#eec8df"}]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{"gamma": 0.01}, {"lightness": 20}]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{"saturation": -31}, {"lightness": -33}, {"weight": 2}, {"gamma": 0.8}]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "administrative.province",
            "elementType": "labels.text.stroke",
            "stylers": [{"saturation": "-98"}, {"lightness": "87"}]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{"lightness": "-84"}]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{"lightness": "100"}, {"saturation": "-1"}]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.stroke",
            "stylers": [{"saturation": "66"}, {"lightness": "0"}, {"weight": "2.60"}]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"lightness": 30}, {"saturation": 30}]
        }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"saturation": 20}]}, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{"lightness": 20}, {"saturation": -20}]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{"lightness": "68"}, {"saturation": "-14"}, {"visibility": "simplified"}]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{"saturation": 25}, {"lightness": 25}]
        }, {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [{"saturation": "-100"}, {"lightness": "-32"}, {"gamma": "1.21"}, {"weight": "0.01"}]
        }, {"featureType": "water", "elementType": "all", "stylers": [{"lightness": -20}]}];

        var styledMap = new google.maps.StyledMapType(style3, {name: "Styled Map"});

        var mapOptions = {
            center: new google.maps.LatLng(48.8567, 2.3508),
            zoom: 12,
            //mapTypeId: google.maps.MapTypeId.ROADMAP,
            //mapTypeId: google.maps.MapTypeId.SATELLITE,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            },
            panControl: false,
            mapTypeControl: false
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var heatmapPoints = [];
        var heatmapOctoPoints = [];
        octoz.forEach(function (octo, idx) {


            var icon = {
                url: '/img/octomarker.png',
                scaledSize: new google.maps.Size(20, 20), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(10, 10) // anchor
            };
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(octo.lat, octo.lng),
                map: map,
                icon: icon,
                optimized: false,
                url: "octopod.octo.com",
                title: octo.address + ' ' + octo.zip_code + ' ' + octo.state
            });

            google.maps.event.addListener(marker, 'click', function () {
                //window.location.href = marker.url;
                window.open(marker.url);
            });

            heatmapOctoPoints.push(new google.maps.LatLng(octo.lat, octo.lng));
            heatmapPoints.push(new google.maps.LatLng(octo.lat, octo.lng));

        });


        var clientsMarkers = [];
        var addClientsMarker = function () {
            clients.forEach(function (client) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(client[0], client[1]),
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 5,
                        fillOpacity: 0.8,
                        fillColor: 'red',
                        strokeColor: '#333',
                        strokeWeight: 1
                    },
                    url: "octopod.octo.com",
                    map: map,
                    title: 'OCTO'
                });
                clientsMarkers.push(marker);
                heatmapPoints.push(new google.maps.LatLng(client[0], client[1]));
            });
        };
        addClientsMarker();

        var setMapOnClients = function (map) {
            for (var i = 0; i < clientsMarkers.length; i++) {
                clientsMarkers[i].setMap(map);
            }
        };
        var clearClientsMarkers = function () {
            setMapOnClients(null);
        };

        $('#cb-clients').change(function() {
            if($(this).is(':checked')) {
                setMapOnClients(map);
                if($('#cb-heatmap').is(':checked')) {
                    heatmapOcto.setMap(null);
                    heatmap.setMap(map);
                } else {
                    heatmapOcto.setMap(null);
                    heatmap.setMap(null);
                }
            } else {
                clearClientsMarkers();
                if($('#cb-heatmap').is(':checked')) {
                    heatmapOcto.setMap(map);
                    heatmap.setMap(null);
                } else {
                    heatmapOcto.setMap(null);
                    heatmap.setMap(null);
                }
            }
        });


        google.maps.event.addListener(map, 'zoom_changed', function () {

            var pixelSizeAtZoom0 = 1; //the size of the icon at zoom level 0
            var maxPixelSize = 350; //restricts the maximum size of the icon, otherwise the browser will choke at higher zoom levels trying to scale an image to millions of pixels

            var zoom = map.getZoom();
            var relativePixelSize = Math.round(pixelSizeAtZoom0 * Math.pow(2, zoom)); // use 2 to the power of current zoom to calculate relative pixel size.  Base of exponent is 2 because relative size should double every time you zoom in

            if (relativePixelSize > maxPixelSize) //restrict the maximum size of the icon
                relativePixelSize = maxPixelSize;

            //change the size of the icon
            if(marker) {
                marker.setIcon(
                    new google.maps.MarkerImage(
                        marker.getIcon().url, //marker's same icon graphic
                        null,//size
                        null,//origin
                        null, //anchor
                        new google.maps.Size(relativePixelSize, relativePixelSize) //changes the scale
                    )
                );
            }
        });


        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapPoints,
            map: map
        });
        heatmap.set('radius', heatmap.get('radius') ? null : 80);
        var gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
        function toggleHeatmap() {
            heatmap.setMap(heatmap.getMap() ? null : map);
        }
        //--- heatmap octoz
        var heatmapOcto = new google.maps.visualization.HeatmapLayer({
            data: heatmapOctoPoints,
            map: map
        });
        heatmapOcto.set('radius', heatmapOcto.get('radius') ? null : 80);
        var gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ]
        heatmapOcto.set('gradient', heatmapOcto.get('gradient') ? null : gradient);
        function toggleHeatmapOcto() {
            heatmapOcto.setMap(heatmapOcto.getMap() ? null : map);
        }
        toggleHeatmap();
        toggleHeatmapOcto();
        clearClientsMarkers();
        heatmapOcto.setMap(map);
        //--- /heatmap octoz

        $('#cb-heatmap').change(function() {
            console.log('cb heatmap toggled');
            if($(this).is(':checked')) {
                console.log('cb heatmap checked !');
                if ($('#cb-clients').is(':checked')) {
                    console.log('cb clients checked !');
                    heatmap.setMap(map);
                    heatmapOcto.setMap(null);
                } else {
                    console.log('cb clients NOT checked !');
                    heatmapOcto.setMap(map);
                    heatmap.setMap(null);
                }
            } else {
                console.log('cb heatmap NOT checked !');
                heatmap.setMap(null);
                heatmapOcto.setMap(null);
            }

        });
        //------

        // Create the search box and link it to the UI element.
        var input = /** @type {HTMLInputElement} */(
            document.getElementById('pac-input'));
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var searchBox = new google.maps.places.SearchBox(
            /** @type {HTMLInputElement} */(input));

        // Listen for the event fired when the user selects an item from the
        // pick list. Retrieve the matching places for that item.
        var markers = [];
        google.maps.event.addListener(searchBox, 'places_changed', function () {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }
            for (var i = 0, marker; marker = markers[i]; i++) {
                marker.setMap(null);
            }

            // For each place, get the icon, place name, and location.
            markers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
                var image = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                var marker = new google.maps.Marker({
                    map: map,
                    icon: image,
                    title: place.name,
                    position: place.geometry.location
                });

                markers.push(marker);

                bounds.extend(place.geometry.location);
            }

            map.fitBounds(bounds);
        });

        // Bias the SearchBox results towards places that are within the bounds of the
        // current map's viewport.
        google.maps.event.addListener(map, 'bounds_changed', function () {
            var bounds = map.getBounds();
            searchBox.setBounds(bounds);
        });
        //------

    } catch(e){
        console.log("google maps error" + e);
    }
}
