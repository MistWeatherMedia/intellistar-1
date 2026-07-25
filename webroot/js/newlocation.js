var locationConfig = {
    mainCity: {
        displayname: "",
        extraname: "",
        lat: "",
        lon: "",
        state: "",
        stateFull: "",
    },
    eightCities: {
        cities: [],
    },
    regionalMap: {
        leftPos: "",
        topPos: "",
        map: [],
        autoFind: true
    },
    radarCities: {
        local: [
        ],
        regional: [
        ],
    }
}
var mainquery = undefined;
var queryFail = false;
let locationQueue = [];
let newCities = [];
async function grabLocation() {
    clearInterval(locNameInterval);
    clearInterval(dataGrabInterval);
    $("#startbutton").css("opacity", "0.5");
    $("#startbutton").css("pointer-events", "none");
    locationConfig.mainCity = {displayname: "", extraname: "", lat: "", lon: "", state: "", stateFull: ""}
    locationQueue = [];
    newCities = [];
    locationConfig.eightCities.cities = [];
    locationConfig.regionalMap.map = [];
    await getMainCity(mainquery).then(() =>{mainquery=undefined});
}

async function getMainCity(query) {
    if (query != undefined) {
        $.getJSON("https://api.weather.com/v3/location/search?query=" + query + "&language=en-US&format=json&apiKey=" + api_key, function (data) {
            getMapStyle(data.location.country[0], data.location.adminDistrictCode[0]);
            locationConfig.mainCity.displayname = data.location.displayName[0];
            locationConfig.mainCity.extraname = data.location.displayName[0];
            locationConfig.mainCity.lat = data.location.latitude[0];
            locationConfig.mainCity.lon = data.location.longitude[0];
            locationConfig.mainCity.state = data.location.adminDistrictCode[0];
            locationConfig.mainCity.stateFull = data.location.adminDistrict[0];
            locationConfig.radarCities.local[0] = {locationName:data.location.displayName[0],dotTopPos:520,dotLeftPos:810,nameTopMargin:-7,nameLeftMargin:43}
            locationConfig.radarCities.regional[0] = {locationName:data.location.displayName[0],dotTopPos:520,dotLeftPos:810,nameTopMargin:-7,nameLeftMargin:43}
            setTimeout(() => {
                locationQueue.push(locationConfig.mainCity);
                getNearbyCities();
                sortRegionalList();
            }, 50);
        }).fail(function () {
            queryFail = true;
            throw new Error("Invalid location query");
        })
    } else if (locationSettings.mainCity.autoFind == false) {
        $.getJSON("https://api.weather.com/v3/location/point?" + locationSettings.mainCity.type + "=" + locationSettings.mainCity.val + "&language=en-US&format=json&apiKey=" + api_key, function (data) {
            getMapStyle(data.location.country[0], data.location.adminDistrictCode[0]);
            locationConfig.mainCity.displayname = locationSettings.mainCity.displayname;
            locationConfig.mainCity.extraname = locationSettings.mainCity.extraname;
            locationConfig.mainCity.lat = data.location.latitude;
            locationConfig.mainCity.lon = data.location.longitude;
            locationConfig.mainCity.state = data.location.adminDistrictCode;
            locationConfig.mainCity.stateFull = data.location.adminDistrict;
            locationConfig.radarCities.local = locationSettings.radarCities.local;
            locationConfig.radarCities.regional = locationSettings.radarCities.regional;
            locationConfig.regionalMap.autoFind = locationSettings.mapCities.autoFind;
            setTimeout(() => {
                getNearbyCities();
                sortRegionalList();
            }, 50);
        }).fail(function () {
            queryFail = true;
            throw new Error("Invalid location query");
        })
    } else {
        $.getJSON("https://pro.ip-api.com/json/?key=AmUN9xAaQALVYu6&exposeDate=true", function (data) {
            getMapStyle(data.country, data.region);
            locationConfig.mainCity.displayname = data.city;
            locationConfig.mainCity.extraname = data.city;
            locationConfig.mainCity.lat = data.lat;
            locationConfig.mainCity.lon = data.lon;
            locationConfig.mainCity.state = data.region;
            locationConfig.mainCity.stateFull = data.regionName;
            locationConfig.radarCities.local[0] = {locationName:data.city,dotTopPos:520,dotLeftPos:800,nameTopMargin:-7,nameLeftMargin:40}
            locationConfig.radarCities.regional[0] = {locationName:data.city,dotTopPos:520,dotLeftPos:800,nameTopMargin:-7,nameLeftMargin:40}
            setTimeout(() => {
                locationQueue.push(locationConfig.mainCity);
                getNearbyCities();
                sortRegionalList();
            }, 50);
        }).fail(function () {
            queryFail = true;
            throw new Error("Automatic location pull failed");
        })
    }
}
let nearbyRound = 0;
//bit of a rewrite inspired from BFS nearby loc pull
function getNearbyCities() {
    let locPull;
    if(nearbyRound == 0){ newCities = [] }
    if(nearbyRound >= 10){
        locationConfig.eightCities.cities = newCities.sort((a, b) => a.displayname.localeCompare(b.displayname));
        console.warn("Nearby pull was cut off after 10 turns, location list may not be full.");
        nearbyRound = 0;
        return;
    }
    if (locationSettings.eightCities.autoFind == false) {
        for (let i = 0; i < locationSettings.eightCities.cities.length; i++) {
            setTimeout(() => {
                createNewCity(locationSettings.eightCities.cities[i].type, locationSettings.eightCities.cities[i].val, i, true);
            }, 50 * i);
        }
        setTimeout(() => {
            locationConfig.eightCities.cities = newCities;
        }, 1000);
    } else {
        locPull = locationQueue.shift();
        $.getJSON(`https://api.weather.com/v3/location/near?geocode=${locPull.lat},${locPull.lon}&product=observation&format=json&apiKey=${api_key}`, function(data){
            for(let i = 0; i < data.location.latitude.length; i++){
                createNewCity("geocode", `${data.location.latitude[i]},${data.location.longitude[i]}`, i, false);
            }
        })
        setTimeout(() => {
            if(newCities.length >= 8){
                locationConfig.eightCities.cities = newCities.sort((a, b) => a.displayname.localeCompare(b.displayname));
            } else {
                nearbyRound++;
                locationQueue.push(newCities[newCities.length - 1]);
                getNearbyCities()
            }
        }, 500);
    }
}
function createNewCity(type, val, i, manual) {
    $.getJSON(`https://api.weather.com/v3/location/point?${type}=${val}&language=en-US&format=json&apiKey=${api_key}`, function (data) {
        var cityObj = {
            displayname: data.location.displayName.replaceAll(" Charter Township", "").replaceAll(" Township", ""),
            lat: data.location.latitude,
            lon: data.location.longitude,
            state: data.location.adminDistrictCode,
            stateFull: data.location.adminDistrict
        }
        if(manual == true){
            cityObj.displayname = locationSettings.eightCities.cities[i].displayname == "" ? data.location.displayName : locationSettings.eightCities.cities[i].displayname;
            newCities.push(cityObj);
        }else{
            for(let j = 0; j < newCities.length; j++){
                //if(cityObj.displayname == locationConfig.mainCity.displayname) return;
                if(cityObj.displayname == newCities[j].displayname) return;
                if(cityObj.displayname == newCities[j].stateFull) return;
                if(newCities.length >= 8) return;
            }
            newCities.push(cityObj);
        }
    })
}
//for adv loc settings
var elDivs = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"]
function createNewExtraCity(i){
    console.log(document.getElementById(`extralookup${i}`).value)
    $.getJSON("https://api.weather.com/v3/location/search?query=" + document.getElementById(`extralookup${i}`).value + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
        locationConfig.eightCities.cities[i].displayname = data.location.displayName[0];
        locationConfig.eightCities.cities[i].lat = data.location.latitude[0];
        locationConfig.eightCities.cities[i].lon = data.location.longitude[0];
        locationConfig.eightCities.cities[i].state = data.location.adminDistrictCode[0];
        locationConfig.eightCities.cities[i].stateFull = data.location.adminDistrict[0];
        setTimeout(() => {
            grabNearbyCC();
        }, 1000);
    }).fail(function(){
        $('.extracitytext').text(`ERROR: Location ${i+1}'s search failed.`);
        $(".extracitytext").css('color', 'darkred');
        $('.extracitytext').fadeIn(0, function(){
            setTimeout(() => {
                $('.extracitytext').fadeOut(1000);
            }, 2000);
        })
    })
}

var distances = []
var rmBoundaries = [265, 270, 715, 630]
function sortRegionalList(){
    if(locationSettings.mapCities.autoFind == false){
        for(let i = 0; i < locationSettings.mapCities.map.length; i++){
            //console.log(locationSettings.mapCities.map[i]);
            locationConfig.regionalMap.map[i] = locationSettings.mapCities.map[i];
        }
        centerMap(0, false);
        return;
    }else{
        locationConfig.regionalMap.map = [];
        distances = [];
        for(var i = 0; i < regionalMapCities.length; i++){
            let d = distanceByDegrees(locationConfig.mainCity, regionalMapCities[i])
            var x = { distance: d[0], index: i, coords: [d[1], d[2]] }
            distances.push(x);
            //console.log(x);
        }
        distances.sort((a, b) => a.distance - b.distance);
        //console.log(distances[0]);
        centerMap(distances[0].index, locationSettings.mapCities.autoFind);
        if (regionalMapCities[distances[0].index].type === 'pacific') {
            rmBoundaries[2] = 415;
            rmBoundaries[3] = 1015;
        } else if (regionalMapCities[distances[0].index].type === 'pacific north'){
            rmBoundaries[0] = 415;
            rmBoundaries[1] = 170;
            rmBoundaries[2] = 415;
            rmBoundaries[3] = 1015;
        } else if (regionalMapCities[distances[0].index].type === 'south'){
            rmBoundaries[0] = 135;
            rmBoundaries[1] = 400;
        } else if (regionalMapCities[distances[0].index].type === 'atlantic south'){
            rmBoundaries[0] = 135;
            rmBoundaries[1] = 400;
        } else if(regionalMapCities[distances[0].index].type === 'atlantic'){
            rmBoundaries[2] = 1015;
            rmBoundaries[3] = 415;
        } else if (regionalMapCities[distances[0].index].type === 'atlantic north') {
            rmBoundaries[0] = 415;
            rmBoundaries[1] = 170;
            rmBoundaries[2] = 1015;
            rmBoundaries[3] = 415;
        } else if (regionalMapCities[distances[0].index].type === 'north') {
            rmBoundaries[0] = 395;
            rmBoundaries[1] = 150;
        }
        var j = 0;
        while (locationConfig.regionalMap.map.length < 10) {///*
            if (j >= regionalMapCities.length) {
                return;
            }
            if (j > 0) {
                if (Array.isArray(locationConfig.regionalMap.map[0].exclude)) {
                    for (var city in locationConfig.regionalMap.map[0].exclude) {
                        if (regionalMapCities[distances[j].index].name == locationConfig.regionalMap.map[0].exclude[city]) {
                            j++;
                            console.log(locationConfig.regionalMap.map[0].exclude[city])
                            continue;
                        }
                    }
                }
                if (regionalMapCities[distances[j].index].name == locationConfig.regionalMap.map[0].exclude) {
                    //added this exclude value to make some maps look better
                    //or to remove cities that are off the maps in some instances 
                    //(Cincinnati when viewing from Effingham)
                    j++;
                    continue;
                }
                if(regionalMapCities[distances[j].index].top < locationConfig.regionalMap.map[0].top - rmBoundaries[1]){
                    j++;
                    continue;
                }
                if(regionalMapCities[distances[j].index].top > locationConfig.regionalMap.map[0].top + rmBoundaries[0]){
                    j++;
                    continue;
                }
                if(regionalMapCities[distances[j].index].left < locationConfig.regionalMap.map[0].left - rmBoundaries[2]){
                    j++;
                    continue;
                }
                if(regionalMapCities[distances[j].index].left > locationConfig.regionalMap.map[0].left + rmBoundaries[3]){
                    j++;
                    continue;
                }
            }
            //*/
            locationConfig.regionalMap.map.push(regionalMapCities[distances[j].index]);
            j++;
        }
        //console.log(locationConfig.regionalMap.map);
    }
}

grabLocation().then(() =>{
    setTimeout(() => {
        onLocationInit()
    }, 100);
});

//some areas do not show up on the i1 mercator so we'll compromise via using the old style for those areas
function getMapStyle(country, state){
    if(country == "United States" && (state != "AK" && state != "HI")){
        mapStyle = "mapbox://styles/colster/cmiccqynn00as01s4bt6501il";
    }else{
        mapStyle = {
            version: 8,
            sources: {
                "raster-tiles": {
                type: "raster",
                tiles: [
                    "https://api.mapbox.com/styles/v1/goldbblazez/ckgc8lzdz4lzh19qt7q9wbbr9/tiles/{z}/{x}/{y}?access_token=" + map_key
                ],
                tileSize: 512,
                },
            },
            layers: [
                {
                id: "basemap",
                type: "raster",
                source: "raster-tiles",
                layout: { visibility: "visible" },
                minzoom: 0,
                maxzoom: 22,
                paint: {
                    "raster-opacity": 1,
                },
                },
            ],
        }
    }
}