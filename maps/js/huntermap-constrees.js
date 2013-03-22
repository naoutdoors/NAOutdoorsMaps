var HMap = HMap || {};

HMap.mapTypeId = {
	SATELLITE: "theHunter_satellite"
};

HMap.markerTypeId = {
	tree: 0
};

HMap.markerTypes = {};

HMap.markerTypes[HMap.markerTypeId.tree] = {
	minZoom: 11,
	maxZoom: 16,
	icon: [
	 	new google.maps.MarkerImage(
			"gfx/Map_trees.png",
			new google.maps.Size(32, 32),
			new google.maps.Point(1, 0),
			new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/Map_trees2.png",
			new google.maps.Size(19, 16),
			new google.maps.Point(1, 0),
			new google.maps.Point(8, 8)
		)
	]

};