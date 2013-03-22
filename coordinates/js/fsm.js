
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
					zoom: 16,
					center: playerLatLng
				});
				fsm.map = HMap.map.getMap();

				fsm.initListeners();
			} else {
				fsm.map.panTo(playerLatLng);
			}

			// position player
			fsm.updatePlayer(playerLatLng, data.player.direction);

			// update player position coord panel
			document.getElementById('playerx').innerText = Math.round(data.player.x);
			document.getElementById('playery').innerText = Math.round(data.player.z);

			fsm.updateIcons(data.icons);

			// draw player path
			fsm.drawPlayerPath(data.path);
		},

		initListeners: function() {
			var cursor = {
				x: document.getElementById('cursorx'),
				y: document.getElementById('cursory')
			};

			// place waypoint marker
			google.maps.event.addListener(fsm.map, 'click', function(event) {
				fsm.updateWaypoint(event.latLng);
				var p = HMap.map.toPoint(event.latLng);
				hunter.placeMarker({x: p.y, y: p.x});
			});

			// update coordinates when mouse moves
			google.maps.event.addListener(fsm.map, 'mousemove', function(event) {
				var p = HMap.map.toPoint(event.latLng);

				// cursor position
				cursor.x.innerText = p.y;
				cursor.y.innerText = p.x;
			});
		},

		getIcon: function(iconType) {
			return {
				anchor: {
					x: 16,
					y: 16
				},
				origin: {
					x: 32*iconType,
					y: 0
				},
				size: {
					width: 32,
					height: 32
				},
				url: 'gfx/icons.png'
			};
		},

		// direction in radians
		getPlayerIcon: function(heading) {
			var canvas = document.createElement(null);
			canvas.width = fsm.playerSize;
			canvas.height = fsm.playerSize;

			var ctx = canvas.getContext('2d'),
				center = {
					x: Math.floor(fsm.playerSize / 2),
					y: Math.floor(fsm.playerSize / 2)
				},
				radius = Math.floor(fsm.playerSize / 2),
				poly = [],
				len;

			heading = -heading;

			// style
			ctx.fillStyle = "rgba(196, 255, 255, 0.6)";
			ctx.strokeStyle = "rgba(32, 32, 32, 0.8)";
			ctx.lineWidth = 2;

			// create player polygon
			poly.push({
				x: Math.sin(heading + 0) * radius,
				y: -Math.cos(heading + 0) * radius
			});

			poly.push({
				x: Math.sin(heading + 135 * Math.PI / 180) * radius,
				y: -Math.cos(heading + 135 * Math.PI / 180) * radius
			});

			poly.push({
				x: Math.sin(heading + 225 * Math.PI / 180) * radius,
				y: -Math.cos(heading + 225 * Math.PI / 180) * radius
			});
			poly.push(poly[0]);

			// draw poly around center
			ctx.beginPath();
			ctx.moveTo(center.x + poly[0].x, center.y + poly[0].y);
			len = poly.length;
			for (var i = 1; i < len; i++) {
				ctx.lineTo(center.x + poly[i].x, center.y + poly[i].y);
			}
			ctx.fill();
			ctx.stroke();

			return canvas.toDataURL('image/png');
		},

		drawPlayerPath: function(arr) {
			var len = arr.length,
				coordinates = [];

			if (len === 0) {
				return;
			}

			for (var i = 0; i < len; i++) {
				coordinates.push(HMap.map.toLatLng({x: arr[i].x, y: arr[i].z}));
			}

			// if path already exists, remove it and have it replaced with new path
			if (fsm.path !== null) {
				fsm.path.setMap(null);
			}

			fsm.path = new google.maps.Polyline({
				path: coordinates,
				strokeColor: "#ffff99",
				strokeOpacity: 0.6,
				strokeWeight: 4,
				map: fsm.map,
				clickable: false
			});
		},

		updateIcons: function(icons) {
			var len, i;

			// remove old icons
			len = fsm.markers.length;
			for (i = 0; i < len; i++) {
				fsm.markers[i].setMap(null);
			}

			// place icons
			fsm.markers = [];
			len = icons.length;
			for (i = 0; i < len; i++) {
				if (icons[i].icon_type === fsm.iconType.ICON_MARKER) {
					fsm.updateWaypoint(HMap.map.toLatLng({x: icons[i].x, y: icons[i].z}));
				} else {
					fsm.markers.push(new google.maps.Marker({
						position: HMap.map.toLatLng({x: icons[i].x, y: icons[i].z}),
						map: HMap.map.getMap(),
						icon: fsm.getIcon(icons[i].icon_type),
						clickable: false
					}));
				}
			}
		},

		updateWaypoint: function(latLng) {
			if (fsm.waypoint === null) {
				fsm.waypoint = new google.maps.Marker({
					position: latLng,
					map: HMap.map.getMap(),
					title: "Waypoint",
					icon: fsm.getIcon(fsm.iconType.ICON_MARKER)
				});

				// listener to remove waypoint marker
				google.maps.event.addListener(fsm.waypoint, 'click', function(event) {
					fsm.waypoint.setMap(null);
					fsm.waypoint = null;
					hunter.placeMarker();
				});
			} else {
				fsm.waypoint.setPosition(latLng);
			}
		},

		updatePlayer: function(latLng, direction) {
			var icon = {
				anchor: {
					x: Math.floor(fsm.playerSize / 2),
					y: Math.floor(fsm.playerSize / 2)
				},
				size: {
					width: fsm.playerSize,
					height: fsm.playerSize
				},
				url: fsm.getPlayerIcon(direction)
			};

			if (fsm.player === null) {
				fsm.player = new google.maps.Marker({
					position: latLng,
					map: fsm.map,
					title: "Player",
					icon: icon,
					clickable: false
				});
			} else {
				fsm.player.setPosition(latLng);
				fsm.player.setIcon(icon);
			}
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