var HMap = HMap || {};

HMap.mapTypeId = {
SATELLITE: "theHunter_satellite"
};

HMap.markerTypeId = {
LODGE: 0,
CAMPSITE: 1,
TOWER: 2,
POI: 3,
TOWER2: 4,
TOWER3: 5, 
FORTDAVID: 6,
LARGEBARN: 7,
RUNNERSPEAK: 8,
CAVE: 9,
SMALLBARN: 10,
RESERVESWH: 11,
RESERVESLP: 12,
RESERVESSC: 13
};


HMap.markerTypes = {};

HMap.markerTypes[HMap.markerTypeId.RESERVESWH] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Reserve_Icons-89x89.png",
new google.maps.Size(89, 87),
new google.maps.Point(1, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Reserve_Icons-89x89.png",
new google.maps.Size(48, 48),
new google.maps.Point(32, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.RESERVESLP] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Reserve_Icons-89x89.png",
new google.maps.Size(89, 87),
new google.maps.Point(92, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Reserve_Icons-89x89.png",
new google.maps.Size(48, 48),
new google.maps.Point(32, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.RESERVESSC] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Reserve_Icons-89x89.png",
new google.maps.Size(89, 87),
new google.maps.Point(186, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Reserve_Icons-89x89.png",
new google.maps.Size(48, 48),
new google.maps.Point(32, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LODGE] = {
    minZoom: 11,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(1, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(32, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.CAMPSITE] = {
    minZoom: 13,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(160, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(80, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWER] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
     new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(192, 0),
new google.maps.Point(16, 16)
),
     new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(64, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWER2] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
     new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(224, 0),
new google.maps.Point(16, 16)
),
     new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(64, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWER3] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
     new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(256, 0),
new google.maps.Point(16, 16)
),
     new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(64, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.POI] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(480, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(96, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.FORTDAVID] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(128, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(96, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LARGEBARN] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(33, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(96, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.RUNNERSPEAK] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(96, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(96, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.CAVE] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(512, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(96, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SMALLBARN] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(64, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(96, 0),
new google.maps.Point(8, 8)
)
    ]
};