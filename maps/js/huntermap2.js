var HMap = HMap || {};

HMap.map = (function() {

	var gmap;

	return {
		init: function(div, options) {
	        options = options || {};

	        options.center = options.center || new google.maps.LatLng(0, 0);
	        options.zoom = options.zoom || 12;
	        options.h_disableDefaultInfoWindows = options.h_disableDefaultInfoWindows || false;

	        options.disableDefaultUI = true;
	        options.navigationControl = true;
	        options.scaleControl = false;
			options.backgroundColor = "#0f3b4f";

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

    types[HMap.mapTypeId.SATELLITE] = new google.maps.ImageMapType({
        name: 'theHunter Satellite',
        getTileUrl: function(coord, zoom) {
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
            var p_type = "satellite";

            return 'http://map.thehunter.org/tiles/' + p_type + '/' + (z + 1) + '/tile_' + p_y + p_x + '.jpg';
        },
        tileSize: new google.maps.Size(128, 128),
        isPng: false,
        minZoom: 11,
        maxZoom: 16
    });

	return {
		set: function(gmap) {
	        for (var k in types) {
	            gmap.mapTypes.set(k, types[k]);
	        }
	        gmap.setMapTypeId(HMap.mapTypeId.SATELLITE);
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

	if  (!disableInfoWindows && location.desc) {
		this.infoWindow = new google.maps.InfoWindow({ content: '<b>'+ location.title +'</b><br><br><span style="font-size: 9px">'+ location.desc +'</span>', maxWidth: 200 });
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

    return {
    	/**
    	 * Plot array with objects having properties x, z.
    	 */
        plotPath: function(list) {
            var coords = [];

            for (var i = 0; i < list.length; i++) {
            	coords.push( HMap.map.toLatLng(new google.maps.Point(list[i].x, list[i].z)) );
            }

            var expeditionPath = new google.maps.Polyline({
			    path: coords,
			    strokeColor: "#FF0000",
			    strokeOpacity: 1.0,
			    strokeWeight: 2
			});

			expeditionPath.setMap(HMap.map.getMap());

			currentPath = expeditionPath;
        },

        removePath: function() {
            if (currentPath !== null) {
                currentPath.setMap();
            }
        },

        addEventMarkers: function(events, enabled) {
			var map = HMap.map.getMap(), i;

			if (arguments[1]) {
	        	for (i = 0; i < enabled.length; i++) {
					markersEnabled[enabled[i]] = 1;
	        	}
			} else {
				resetEnabledMarkers(1);
			}

			for (var i = 0; i < events.length; i++) {
				var desc = HMap.util.objectAsString(events[i]);

				events[i].marker = new google.maps.Marker({
	    			title: events[i].event_name,
	    			icon: HMap.eventMarkers[events[i].event_id].icon,
	    			position: HMap.map.toLatLng(new google.maps.Point(events[i].x, events[i].z))
	    		});

	    		// info window
	    		HMap.util.bindInfoWindow(events[i].marker, desc, map);

				events[i].marker.setMap( markersEnabled[events[i].event_id] ? map : null );
			}

			eventMarkers = events;
        },

        toggleEventMarker: function(eventId) {
			markersEnabled[eventId] = 1 - markersEnabled[eventId];

        	var state = markersEnabled[eventId] ? HMap.map.getMap() : null;

        	for (var i = 0; i < eventMarkers.length; i++) {
        		if (eventMarkers[i].event_id == eventId) {
					eventMarkers[i].marker.setMap(state);
        		}
        	}
        },

        removeEventMarkers: function() {
        	for (var i = 0; i < eventMarkers.length; i++) {
        		eventMarkers[i].marker.setMap();
        	}
        }
    }
})();