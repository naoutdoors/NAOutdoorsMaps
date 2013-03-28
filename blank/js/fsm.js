
/*global devel HMap:false google:false hunter:false */
(function () {
	"use strict";

	var fsm = {
		map: null,
		waypoint: null,
		player: null,
		path: null,
		markers: [],

		iconType: {
			ICON_LODGE: 0,
			ICON_CAMPSITE: 1,
			ICON_ARCHEOLOGY: 2,
			ICON_TOWER: 3,
			ICON_ANIMAL: 4,
			ICON_INTEREST: 5,
			ICON_POWERLINE: 6,
			ICON_MARKER: 7,
			ICON_TARGET_INDICATOR: 8,
			ICON_TENT: 9,
			ICON_GROUND_BLIND: 10,
			ICON_TREE_STAND: 11,
			ICON_BEAR_BAIT_BARREL: 12,
			ICON_WIND_TURBINE: 13
		},

		playerSize: 40,

		init: function(data) {
			fsm.data = data;

			var centerLatLng = HMap.map.toLatLng({
				x: 8914,
				y: 1049
			});

			if (fsm.map === null) {
				HMap.map.init(document.getElementById("map_canvas"), {
					zoom: 14,
					center: centerLatLng
				});
				fsm.map = HMap.map.getMap();

				fsm.initListeners();

				HMap.markers.add(HMap.locations);
			} else {
				fsm.map.panTo(centerLatLng);
			}

		},

		initListeners: function() {
			var cursor = {
				x: document.getElementById('cursorx'),
				y: document.getElementById('cursory')
			};

			// update coordinates when mouse moves
			google.maps.event.addListener(fsm.map, 'mousemove', function(event) {
				var p = HMap.map.toPoint(event.latLng);

				// cursor position
				cursor.x.innerText = p.y;
				cursor.y.innerText = p.x;
			});
		}
	};

	fsm.init();
}());