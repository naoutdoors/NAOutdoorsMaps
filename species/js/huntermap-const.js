var HMap = HMap || {};

HMap.mapTypeId = {
	SATELLITE: "theHunter_satellite"
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
	BORDER: 10,
	Whitetaildeer: 11,
	Muledeer: 12,
	Turkey: 13,
	Rooseveltelk: 14,
	Coyote: 15,
	Feralhog: 16,
	Blacktaildeer: 17,
	Pheasant: 18,
	Moose: 19,
	Blackbear: 20,
	WildBoar: 21,
	RoeDeer: 22,
	RedDeer: 23
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

HMap.markerTypes[HMap.markerTypeId.Whitetaildeer] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(27, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(17, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Muledeer] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(0, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(0, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Turkey] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(135, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(83, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Rooseveltelk] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(81, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(50, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Coyote] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(108, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(67, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Feralhog] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(162, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(100, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Blacktaildeer] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(54, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(33, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Pheasant] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(189, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(116, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Moose] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(216, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(133, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.Blackbear] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(243, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(149, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.WildBoar] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(270, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(166, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.RoeDeer] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(297, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(183, 0),
			new google.maps.Point(8, 8)
		)
	]
};

HMap.markerTypes[HMap.markerTypeId.RedDeer] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/icons26.png",
			new google.maps.Size(27, 26),
			new google.maps.Point(324, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/icons16.png",
			new google.maps.Size(16, 16),
			new google.maps.Point(199, 0),
			new google.maps.Point(8, 8)
		)
	]
};