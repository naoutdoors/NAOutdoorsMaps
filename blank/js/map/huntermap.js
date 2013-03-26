var HMap = HMap || {};

HMap.map = (function() {

	var gmap;

	return {
		init: function(div, options) {
	        options = options || {};
		    
	        options.center = options.left || new google.maps.LatLng(0, 0);
	        options.zoom = options.zoom || 12;
	        options.h_disableDefaultInfoWindows = options.h_disableDefaultInfoWindows || false;

	        options.disableDefaultUI = true;
	        options.navigationControl = true;
	        options.scaleControl = false;
		    options.backgroundColor = "#0d2e3d";

		    if (options.mapTypeControl !== false) {
			options.mapTypeControl = true;
			options.mapTypeControlOptions = {
			    mapTypeIds: ['th_satellite', 'th_default']
			};
		    }

	            gmap = new google.maps.Map(div, options);

		    HMap.mapTypes.set(gmap);

	            return gmap;
		},

		getMap: function() {
		    return gmap;
		},

		toLatLng: function(point) {
		    return new google.maps.LatLng(-point.y / 16384 * 0.08789, point.x / 16384 * 0.08789);
		},

		toPoint: function(latLng) {
	            return new google.maps.Point(Math.round(-latLng.lat() / 0.08789 * 16384), Math.round(latLng.lng() / 0.08789 * 16384));
		}
	};
})();

HMap.mapTypes = (function() {

    var types = {};

    var getTileUrl = function(coord, zoom, mapType) {
        var z = zoom - 11;
        var corr = Math.pow(2, zoom) - Math.pow(2, z);

        var p_x = coord.x - corr;
        var p_y = coord.y - corr;

        var maxCoord = Math.pow(2, (z+1)) - 1;
        if (p_x > maxCoord || p_y > maxCoord || p_x < 0 || p_y < 0) {
            return 'http://maps.gstatic.com/intl/en_us/mapfiles/transparent.png';
        }

        p_x = (p_x < 16 ? '0' : '') + p_x.toString(16);
        p_y = (p_y < 16 ? '0' : '') + p_y.toString(16);

        return 'http://map.thehunter.com/' + mapType + '/' + (z + 1) + '/tile_' + p_y + p_x + '.jpg';
    };

    types['th_satellite'] = new google.maps.ImageMapType({
        name: 'Satellite',
        getTileUrl: function(coord, zoom) {
	    return getTileUrl(coord, zoom, 'satellite');
        },
        tileSize: new google.maps.Size(128, 128),
        isPng: false,
        minZoom: 13,
        maxZoom: 16
    });

    types['th_default'] = new google.maps.ImageMapType({
        name: 'Map',
        getTileUrl: function(coord, zoom) {
	    return getTileUrl(coord, zoom, 'default');
        },
        tileSize: new google.maps.Size(128, 128),
        isPng: false,
        minZoom: 13,
        maxZoom: 16
    });

    return {
	set: function(gmap) {
	    for (var k in types) {
	        gmap.mapTypes.set(k, types[k]);
	    }
	    gmap.setMapTypeId('th_default');
	}
    };

})();


HMap.marker = function(location, map, disableInfoWindows, onclick) {
	var me = this;

	this.location = location;
	this.infoWindow = null;
	this.iconType = "default";

    this.iconSize = function(map) {
		map = map || this.marker.getMap();
		return map.getZoom() < 15 ? 1 : 0;
    };

	this.getVisibleState = function() {
		if (this.location["hidable"] && this.iconType != "highlighted")
			return false;

		var type = me.location.type;
		var zoom = this.marker.getMap().getZoom();
	    return (zoom >= HMap.markerTypes[type].minZoom && zoom <= HMap.markerTypes[type].maxZoom);
    };

	this.marker = new google.maps.Marker({
		title: location.title,
		icon: HMap.markerTypes[location.type].icon[this.iconType][this.iconSize(map)],
		position: HMap.map.toLatLng(new google.maps.Point(location.map_x, location.map_z)),
		map: map
	});

	if  (!disableInfoWindows && location.content) {
		this.infoWindow = new google.maps.InfoWindow({ content: location.content, maxWidth: 200 });
	}

	if (!location["disabled"] && !(location["click"] == false)) {
		google.maps.event.addListener(this.marker, 'click', function() {
			onclick(me);
		});
	}

	this.update();
}

HMap.marker.prototype = {
	openInfo: function() {
		if (!this.infoWindow)
			return;

		this.infoWindow.open(this.marker.getMap(), this.marker);
	},

	closeInfo: function() {
		if (!this.infoWindow)
			return;

		this.infoWindow.close();
	},

	update: function(iconType) {
		if (this.location["disabled"]) {
			iconType = "disabled";
		} else {
			if (typeof iconType == "undefined")
				iconType = this.iconType;
			else
				this.iconType = iconType;
		}

		this.marker.setIcon(HMap.markerTypes[this.location.type].icon[iconType][this.iconSize()])
		this.marker.setVisible(this.getVisibleState());
	},

	center: function(force) {
		var map = this.marker.getMap();
		var pos = this.marker.getPosition();
		if (force) {
			map.setCenter(pos);
		} else {
			map.panTo(pos);
		}
	}
}


HMap.markers = (function() {

	var markers = [];
	var map = null;

    return {
		init: function(m) {
			map = m;
			markers = [];
			google.maps.event.addListener(map.getMap(), 'zoom_changed', HMap.markers.update);
		},

		add: function(locations, disableInfoWindows, onclick) {
			var map = HMap.map.getMap();

			for (var i = 0; i < locations.length; i++) {
				var location = locations[i];

				var marker = new HMap.marker(location, map, disableInfoWindows, onclick);
				markers.push(marker);
			}
		},

    	/**
    	 * Update markers on zoom change.
    	 */
    	update: function() {
    		// currently loops all markers, room for optimizations by
    		// doing lookup arrays per marker type
    		for (var i = 0; i < markers.length; i++) {
				markers[i].update();
    		}
    	},

		get: function(id) {
			for (var i = 0; i < markers.length; i++) {
				var marker = markers[i];
				if (marker.location.id == id)
					return marker;
			}

			return null;
		}
    }
})();

HMap.util = {};
HMap.util.objectAsString = function(obj) {
	var row = [];
	$.each(obj, function(name, value) {
		row.push('<b>' + name + '</b>: ' + value);
	});
	return row.join('<br>');
};

HMap.util.bindInfoWindow = function(marker, content, map) {
	var infoWindow = new google.maps.InfoWindow({ content: content });

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map, marker);
	});

	return infoWindow;
};

HMap.expedition = (function() {

    var currentPath = null;
    var eventMarkers = [];
    var markersEnabled = [];

	function resetEnabledMarkers(state) {
		state = state || 0;
		for (var i = 0; i <= HMap.eventIDMax; i++) {
			markersEnabled[i] = state;
		}
	}

	// init
	resetEnabledMarkers();

})();