var HMap = HMap || {};

HMap.mapTypeId = {
	SATELLITE: "thehunter_satellite"
};

HMap.markerTypeId = {
	LODGE: 0,
	TOWER: 1,
	WINDTURBINE: 2,
	ARCHERYRANGE: 3,
	RIFLERANGE: 4,
	CLAYSHOOT1: 5,
	CLAYSHOOT2: 6,
	CAMPSITE: 7,
	POI: 8,
	POWERPOLE: 9,
	LARGEBARN: 70,
	SMALLBARN: 73,
	BORDER: 120,
	HUT: 121,
	TENTO: 122,
	GROUNDBLIND: 123,
	TREESTAND: 124,
	BEARBAITBARREL: 125,
	TRIPOD: 126,
	TENTC: 127
};

HMap.markerTypes = {};

HMap.markerTypes[HMap.markerTypeId.LODGE] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(33, 32),
			new google.maps.Point(1, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(17, 16),
			new google.maps.Point(1, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.CAMPSITE] = {
	minZoom: 14,
	maxZoom: 16,
	icon: [
	   new google.maps.MarkerImage(
	    	"gfx/mapicons32.png",
			new google.maps.Size(28, 32),
			new google.maps.Point(158, 0),
			new google.maps.Point(16, 16)
	    ),
	   new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(78, 0),
			new google.maps.Point(8, 8)
	    )
	]
};

HMap.markerTypes[HMap.markerTypeId.TOWER] = {
	minZoom: 14,
	maxZoom: 16,
	icon: [
    	new google.maps.MarkerImage(
	    	"gfx/mapicons32.png",
			new google.maps.Size(22, 32),
			new google.maps.Point(69, 0),
			new google.maps.Point(16, 16)
		),
    	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(12, 16),
			new google.maps.Point(34, 0),
			new google.maps.Point(8, 8)
	    )
	]
};

HMap.markerTypes[HMap.markerTypeId.POI] = {
	minZoom: 14,
	maxZoom: 16,
	icon: [
		new google.maps.MarkerImage(
		 	"gfx/mapicons32.png",
			new google.maps.Size(24, 32),
			new google.maps.Point(129, 0),
			new google.maps.Point(16, 16)
		),
		new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(13, 16),
			new google.maps.Point(64, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.POWERPOLE] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/mapicons32.png",
new google.maps.Size(22, 32),
new google.maps.Point(223, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/mapicons16.png",
new google.maps.Size(12, 16),
new google.maps.Point(111, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LARGEBARN] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/mapicons32.png",
new google.maps.Size(33, 32),
new google.maps.Point(470, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/mapicons16.png",
new google.maps.Size(18, 16),
new google.maps.Point(234, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SMALLBARN] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/mapicons32.png",
new google.maps.Size(25, 32),
new google.maps.Point(507, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/mapicons16.png",
new google.maps.Size(14, 16),
new google.maps.Point(253, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.BORDER] = {
    minZoom: 13,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/border5x5.png",
new google.maps.Size(32, 32),
new google.maps.Point(0, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/border2x2.png",
new google.maps.Size(16, 16),
new google.maps.Point(0, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.HUT] = {
	minZoom: 13,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(32, 32),
			new google.maps.Point(668, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(17, 16),
			new google.maps.Point(382, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.WINDTURBINE] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(29, 32),
			new google.maps.Point(190, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(14, 16),
			new google.maps.Point(95, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.ARCHERYRANGE] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(28, 32),
			new google.maps.Point(247, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(15, 16),
			new google.maps.Point(124, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.RIFLERANGE] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(32, 32),
			new google.maps.Point(286, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(17, 16),
			new google.maps.Point(142, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.CLAYSHOOT1] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(28, 32),
			new google.maps.Point(322, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(14, 16),
			new google.maps.Point(161, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.CLAYSHOOT2] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(36, 32),
			new google.maps.Point(354, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(18, 16),
			new google.maps.Point(177, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.TENTO] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(23, 32),
			new google.maps.Point(613, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(12, 16),
			new google.maps.Point(306, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.GROUNDBLIND] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(24, 32),
			new google.maps.Point(538, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(12, 16),
			new google.maps.Point(269, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.TREESTAND] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(23, 32),
			new google.maps.Point(564, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(12, 16),
			new google.maps.Point(282, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.BEARBAITBARREL] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(17, 32),
			new google.maps.Point(592, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(9, 16),
			new google.maps.Point(296, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.TRIPOD] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(24, 32),
			new google.maps.Point(642, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(12, 16),
			new google.maps.Point(320, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.TENTC] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/mapicons32.png",
			new google.maps.Size(23, 32),
			new google.maps.Point(671, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/mapicons16.png",
			new google.maps.Size(12, 16),
			new google.maps.Point(335, 0),
			new google.maps.Point(8, 8)
		)
	]
};