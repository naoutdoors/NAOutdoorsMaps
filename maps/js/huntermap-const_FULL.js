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
RESERVESSC: 13,
TOWERNUMBERS1: 14,
TOWERNUMBERS2: 15,
TOWERNUMBERS2: 16,
TOWERNUMBERS4: 17,
TOWERNUMBERS5: 18,
TOWERNUMBERS6: 19,
TOWERNUMBERS7: 20,
TOWERNUMBERS8: 21,
TOWERNUMBERS9: 22,
TOWERNUMBERS10: 23,
TOWERNUMBERS11: 24,
TOWERNUMBERS12: 25,
TOWERNUMBERS12: 26,
TOWERNUMBERS13: 27,
TOWERNUMBERS14: 28,
TOWERNUMBERS15: 29,
TOWERNUMBERS16: 30,
TOWERNUMBERS17: 31,
TOWERNUMBERS18: 32,
TOWERNUMBERS19: 33,
TOWERNUMBERS20: 34,
RUNNERSPEAKTEXT: 35,
Blomberg: 36,
Pettersson: 37,
Hansson: 38,
Hesslow: 39,
Johansson: 40,
Lion: 41,
Ojlert: 42,
Aspblad: 43,
Olander: 44,
Rojgren: 45,
Sjostrom: 46,
Ives: 47,
Stenberg: 48,
AvalanchePath: 49,
SwedenFarm: 50,
FortDavidText: 51,
HighlandLodge: 52,
NLodgeRoad: 53,
StockholmFarm: 54,
SharpshooterRidge: 55,
SergeantsRest: 56,
ExpansiveRoad: 57,
SLodgeRoad: 58,
HomeSteadLodge: 59,
ApocalypsePasture: 60,
MysteriousCaveText: 61,
POWERPOLE: 62,
TRAP: 63,
RIFLERANGE: 64,
BOWRANGE: 65,
LOGPILE: 66,
PLACEHOLD: 67,
InlandRest: 68,
LoggersPointRest: 69,
CanyonCreek: 70,
HilsideCanyon: 71,
EastAccessRoad: 72,
FirePowerRoad1: 73,
FirePowerRoad2: 74,
DogLegRoad1: 75,
DogLegRoad2: 76,
TuskerRoad: 77,
BorderShoreRoad1: 78,
BorderShoreRoad2: 79,
CutTrail: 80,
LoggersCutRoad: 81,
BorderShoreRoad3: 82,
FieldLodge: 83,
BorderLodge: 84,
ExpansiveMeadowNorth: 85,
ExpansiveMeadowSouth: 86,
HillsideMeadow: 87,
DelicateCut: 88,
PatchyMeadow: 89,
CanyonClearing: 90,
HogHollow: 91,
SnipersRock: 92,
SnipersClearing: 93,
LittleTimberPoint: 94,
EaglesNestMeadow: 95,
DogLegMeadow: 96,
WhitehartViewMeadow: 97,
WildflowerMeadow: 98,
MallardyMeadow: 99,
TronsenMeadow: 100,
SawyerMeadow: 101,
PilchuckMeadow: 102,
LoggersViewMeadow: 103,
NorthernClearing: 104,
EmeraldClearing: 105,
ShoresideTerrace: 106,
ShoresideMeadow: 107,
DippingPool: 108,
ColdSprings: 109,
EmeraldSprings: 110,
WateringHole: 111,
MiddlePond: 112,
MistySprings: 113,
PHOTOPOINT: 114
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
"gfx/Reserve_Icons-48x48.png",
new google.maps.Size(48, 48),
new google.maps.Point(1, 0),
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
"gfx/Reserve_Icons-48x48.png",
new google.maps.Size(48, 48),
new google.maps.Point(48, 0),
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
"gfx/Reserve_Icons-48x48.png",
new google.maps.Size(48, 48),
new google.maps.Point(97, 0),
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
new google.maps.Point(2, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(1, 0),
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
new google.maps.Size(32, 34),
new google.maps.Point(177, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(87, 0),
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
new google.maps.Point(216, 0),
new google.maps.Point(16, 16)
),
     new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(106, 0),
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
new google.maps.Point(250, 0),
new google.maps.Point(16, 16)
),
     new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(123, 0),
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
new google.maps.Point(288, 0),
new google.maps.Point(16, 16)
),
     new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(142, 0),
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
new google.maps.Point(526, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(260, 0),
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
new google.maps.Point(141, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(69, 0),
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
new google.maps.Point(38, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(17, 0),
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
new google.maps.Point(108, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(52, 0),
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
new google.maps.Point(562, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(277, 0),
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
new google.maps.Point(74, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map-Icons-16x16.png",
new google.maps.Size(16, 16),
new google.maps.Point(36, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS1] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(6, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Reserve_Icons-89x89.png",
new google.maps.Size(18, 10),
new google.maps.Point(5, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS2] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(36, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(25, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS3] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(68, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(46, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS4] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(99, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(67, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS5] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(131, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(89, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS6] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(162, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(109, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS7] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(194, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(130, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS8] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(225, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(151, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS9] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(256, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(172, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS10] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(292, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(194, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS11] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(337, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(225, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS12] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(382, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(256, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS13] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(428, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(286, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS14] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(474, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(318, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS15] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(520, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(348, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS16] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(566, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(379, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS17] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(612, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(409, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS18] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(658, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(440, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS19] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(704, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(470, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWERNUMBERS20] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Tower_Numbers.png",
new google.maps.Size(25, 25),
new google.maps.Point(750, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Tower_Numberssmall.png",
new google.maps.Size(18, 10),
new google.maps.Point(500, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.RUNNERSPEAKTEXT] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(100, 100),
new google.maps.Point(800, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Blomberg] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(65, 100),
new google.maps.Point(318, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Pettersson] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(95, 100),
new google.maps.Point(504, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Hansson] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(40, 100),
new google.maps.Point(430, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Hesslow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(25, 100),
new google.maps.Point(1438, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Johansson] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(55, 100),
new google.maps.Point(211, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Lion] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(50, 100),
new google.maps.Point(1023, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Ojlert] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(35, 100),
new google.maps.Point(932, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Aspblad] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(55, 100),
new google.maps.Point(24, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Olander] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(65, 100),
new google.maps.Point(619, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Rojgren] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(55, 100),
new google.maps.Point(123, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Sjostrom] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(79, 100),
new google.maps.Point(1310, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Ives] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(35, 100),
new google.maps.Point(1534, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.Stenberg] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(55, 100),
new google.maps.Point(1122, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.AvalanchePath] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(75, 100),
new google.maps.Point(714, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.FortDavidText] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(62, 100),
new google.maps.Point(1219, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.HighlandLodge] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(55, 100),
new google.maps.Point(1623, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.NLodgeRoad] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(65, 100),
new google.maps.Point(1718, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.StockholmFarm] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(65, 100),
new google.maps.Point(1818, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SharpshooterRidge] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(82, 100),
new google.maps.Point(1910, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SergeantsRest] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(65, 100),
new google.maps.Point(2018, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.ExpansiveRoad] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(25, 100),
new google.maps.Point(2139, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SLodgeRoad] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(78, 100),
new google.maps.Point(2210, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.HomeSteadLodge] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(70, 100),
new google.maps.Point(2315, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.ApocalypsePasture] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(70, 100),
new google.maps.Point(2416, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.MysteriousCaveText] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(66, 100),
new google.maps.Point(2517, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SwedenFarm] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextSC.png",
new google.maps.Size(50, 100),
new google.maps.Point(2626, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.POWERPOLE] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(321, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TRAP] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(420, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.RIFLERANGE] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(353, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.BOWRANGE] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(389, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LOGPILE] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(490, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.PLACEHOLD] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map-Icons-32x32.png",
new google.maps.Size(32, 32),
new google.maps.Point(666, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.InlandRest] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(85, 100),
new google.maps.Point(3808, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LoggersPointRest] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(85, 100),
new google.maps.Point(508, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.CanyonCreek] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(85, 100),
new google.maps.Point(2605, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.HilsideCanyon] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(85, 100),
new google.maps.Point(4506, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.EastAccessRoad] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(65, 100),
new google.maps.Point(3218, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.FirePowerRoad1] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(80, 100),
new google.maps.Point(3011, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.FirePowerRoad2] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(87, 100),
new google.maps.Point(4106, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.DogLegRoad1] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(40, 100),
new google.maps.Point(1932, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.DogLegRoad2] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(2324, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TuskerRoad] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(60, 100),
new google.maps.Point(420, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.BorderShoreRoad1] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(110, 100),
new google.maps.Point(1295, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.BorderShoreRoad2] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(106, 100),
new google.maps.Point(2496, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.CutTrail] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(45, 100),
new google.maps.Point(3928, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LoggersCutRoad] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(100, 100),
new google.maps.Point(2200, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.BorderShoreRoad3] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(85, 100),
new google.maps.Point(4008, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.FieldLodge] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(70, 100),
new google.maps.Point(3316, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.BorderLodge] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(80, 100),
new google.maps.Point(310, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.ExpansiveMeadowNorth] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(145, 100),
new google.maps.Point(1602, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.ExpansiveMeadowSouth] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(147, 100),
new google.maps.Point(4718, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.HillsideMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(95, 100),
new google.maps.Point(4603, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.DelicateCut] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(75, 100),
new google.maps.Point(3111, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.PatchyMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(52, 100),
new google.maps.Point(3624, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.CanyonClearing] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(95, 100),
new google.maps.Point(2702, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.HogHollow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(45, 100),
new google.maps.Point(829, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SnipersRock] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(3426, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SnipersClearing] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(55, 100),
new google.maps.Point(3524, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LittleTimberPoint] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(1426, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.EaglesNestMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(52, 100),
new google.maps.Point(2024, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.DogLegMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(52, 100),
new google.maps.Point(1824, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.WhitehartViewMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(95, 100),
new google.maps.Point(3705, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.WildflowerMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(65, 100),
new google.maps.Point(4218, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.MallardyMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(67, 100),
new google.maps.Point(2116, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.TronsenMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(70, 100),
new google.maps.Point(2416, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.SawyerMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(924, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.PilchuckMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(70, 100),
new google.maps.Point(1516, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.LoggersViewMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(85, 100),
new google.maps.Point(2808, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.NorthernClearing] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(55, 100),
new google.maps.Point(124, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.EmeraldClearing] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(53, 100),
new google.maps.Point(1124, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.ShoresideTerrace] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(60, 100),
new google.maps.Point(20, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.ShoresideMeadow] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(100, 100),
new google.maps.Point(200, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.DippingPool] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(4426, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.ColdSprings] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(4326, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.EmeraldSprings] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(1225, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.WateringHole] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(55, 100),
new google.maps.Point(1022, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.MiddlePond] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(42, 100),
new google.maps.Point(729, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.MistySprings] = {
    minZoom: 16,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_TextLP.png",
new google.maps.Size(50, 100),
new google.maps.Point(626, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};

HMap.markerTypes[HMap.markerTypeId.PHOTOPOINT] = {
    minZoom: 15,
    maxZoom: 16,
    icon: [
new google.maps.MarkerImage(
"gfx/Map_photopoints.png",
new google.maps.Size(10, 10),
new google.maps.Point(0, 0),
new google.maps.Point(16, 16)
),
new google.maps.MarkerImage(
"gfx/Map_TextSC1x1.png",
new google.maps.Size(1, 1),
new google.maps.Point(1, 0),
new google.maps.Point(8, 8)
)
    ]
};