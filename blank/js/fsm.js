
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

			var playerLatLng = HMap.map.toLatLng({x: data.player.x, y: data.player.z});

			if (fsm.map === null) {
				HMap.map.init(document.getElementById("map_canvas"), {
					zoom: 14,
					center: playerLatLng
				});
				fsm.map = HMap.map.getMap();

				fsm.initListeners();
			} else {
				fsm.map.panTo(playerLatLng);
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

	window.ewcallback = {
		openView: function(viewId) {
			var viewInfo = hunter.getViewInfo(viewId);
			fsm.init(viewInfo);
		}
	};

	if (typeof hunter === "undefined") {
		window.hunter = {
			placeMarker: function() {
				console.log("placeMarker", arguments);
			},

			toggleDevTools: function() {
				console.log("toggleDevTools:", arguments);
			},

			closeView: function() {
				console.log("closeView", arguments);
			},

			getViewInfo: function() {
				return {"icons":[{"icon_type":5,"x":8845,"y":211,"z":-673},{"icon_type":3,"x":8711,"y":253,"z":1487},{"icon_type":7,"x":9625,"y":216,"z":975},{"icon_type":13,"x":9823,"y":211,"z":1633},{"icon_type":3,"x":9993,"y":205,"z":-50},{"icon_type":5,"x":10651,"y":251,"z":674},{"icon_type":13,"x":9443,"y":207,"z":1300},{"icon_type":3,"x":8849,"y":215,"z":335},{"icon_type":3,"x":8504,"y":224,"z":-25},{"icon_type":3,"x":8814,"y":213,"z":-1145},{"icon_type":3,"x":9075,"y":210,"z":248},{"icon_type":3,"x":10187,"y":212,"z":1254},{"icon_type":0,"x":8894,"y":206,"z":1021},{"icon_type":0,"x":10296,"y":211,"z":151}],"player":{"x":8914,"y":206.84706115722656,"z":1049,"direction":-1.9593716859817505},"path":[{"x":8914,"y":206,"z":1049},{"x":8994,"y":206,"z":1049},{"x":8914,"y":206,"z":1149}, {"x":8844,"y":206,"z":1349}]};
			}
		};

		window.ewcallback.openView(0);
	}

	document.addEventListener("keydown", function(e) {
		switch(e.which) {
			case 'D'.charCodeAt(0):
				hunter.toggleDevTools();
				break;
			case 'M'.charCodeAt(0):
				hunter.closeView(0);
				break;
		}
	});

	// disable context menu
	document.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		return false;
	});
}());