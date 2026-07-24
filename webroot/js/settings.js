var inSettings = true;
document.addEventListener('DOMContentLoaded', async () =>{
    $("#settings-menu .version").text(`v${appearanceSettings.version}`);
    $("#settings-menu .flavortext").text("Flavor: " + slideSettings.flavor + "s");
    $("#settings-menu .versionstext").text("Version: " + appearanceSettings.graphicsPackage);
    if(appearanceSettings.graphicsPackage == 2010 || appearanceSettings.graphicsPackage == "2010"){
        appearanceSettings.iconSet = "2010";
    }
    versionsChanger(appearanceSettings.graphicsPackage);
    await preloadFonts();
    await preloadImages();
    $.getJSON("https://mistwx.com/crawlnetwork.json", function(data){
        if(appearanceSettings.marqueeAd[0] == "network"){
            appearanceSettings.marqueeAd = data.crawls.intellistar;
        }
        if(Number(appearanceSettings.version) < Number(data.simVersions.intellistar)){
            alert("New update available. Download latest version at\nhttps://github.com/MistWeatherMedia/intellistar-1")
        }
    })

    document.getElementById("uploadsongbutton").addEventListener("click", () =>{
        document.getElementById("songuploadinput").click();
        document.getElementById("songinput").value = "C";
    })

    document.getElementById("songuploadinput")
        .addEventListener('change', (event) => {
            if(event.target.files[0]){
                document.getElementById("songinput").value = "C";
                var file = event.target.files[0];
                audioSettings.order = [file.name];
                var url = URL.createObjectURL(file);
                audioPlayer.playlist = [url];
            } else {
                audioSettings.order = [
                    "Track 1",
                    "Track 2",
                    "Track 3",
                    "Track 4",
                    "Track 5",
                    "Track 6",
                    "Track 7",
                    "Track 8",
                    "Track 9",
                    "Track 10",
                    "Track 11",
                    "Track 12",
                ]
                audioPlayer.buildPlaylist();
            }
        })
    document.getElementById("songoffsetinput")
        .addEventListener("change", (event) =>{
            audioSettings.offset = event.target.value >= 0 ? parseInt(event.target.value) : 0;
        })

    document.getElementById("songinput")
        .addEventListener('change', (event) => {
            if (event.target.value == "C") {
                document.getElementById("songuploadinput").click();
                return;
            }
            if (event.target.value == "N") {
                audioSettings.order = [
                    "Track 1",
                    "Track 2",
                    "Track 3",
                    "Track 4",
                    "Track 5",
                    "Track 6",
                    "Track 7",
                    "Track 8",
                    "Track 9",
                    "Track 10",
                    "Track 11",
                    "Track 12",
                ]
            } else {
                audioSettings.order = [`Track ${parseInt(event.target.value)}`];
            }
            console.log(`Track ${parseInt(event.target.value)}`);
            audioPlayer.buildPlaylist();
            console.log(audioPlayer.playlist);
            //console.log($('#songinput').val('selectedvalue'));
        })

    document.getElementById("enablevlcb")
        .addEventListener('input', (event) =>{
            if(event.target.value == "on"){
                audioSettings.vocallocal = true;
            } else {
                audioSettings.vocallocal = false;
            }
        })

    document.getElementById("locsearchlookup")
        .addEventListener("keyup", (k) =>{
            if(k.key == "Enter"){
                locationSearch('locsearchlookup')
            }
        })
    document.getElementById("advlocsearchlookup")
        .addEventListener("keyup", (k) =>{
            if(k.key == "Enter"){
                locationSearch('advlocsearchlookup')
            }
        })

    document.getElementById("map-interactive")
        .addEventListener("click", () => {
            mapSettings();
        })

})

/**
 * Changes between two slides (settings only)
 * 
 * Has to be IDs, otherwise it will not work
 * @param {string} id1 Div ID to fade out
 * @param {string} id2 Div ID to fade in
 */
function changeSlide(id1, id2, callback){
    $(`#${id1} .box`).fadeOut(333, 'linear', function(){
        $(`#${id1}`).fadeOut(0, function(){
            if(id2 != ""){
                $(`#${id2}`).fadeIn(0);
                $(`#${id2} .box`).fadeIn(333, 'linear');
            }
            if(callback){callback()}
        });
    })
}

var locNameInterval, dataGrabInterval;
var divs = ["i","ii","iii","iv","v","vi","vii","viii"]
function setLocationText(){
    function locNaming(){
        $('.loctext').text("Location Name: " + locationConfig.mainCity.displayname + (locationConfig.mainCity.state != null ? ", " + locationConfig.mainCity.state : (locationConfig.mainCity.stateFull != null ? ", " + locationConfig.mainCity.stateFull : ''))); 
        $('.mainloc').text("Main Location: " + locationConfig.mainCity.displayname + (locationConfig.mainCity.state != null ? ", " + locationConfig.mainCity.state : (locationConfig.mainCity.stateFull != null ? ", " + locationConfig.mainCity.stateFull : ''))); 
        $('.loccontainer .mainextraloc').text('Extra Name: ' + locationConfig.mainCity.extraname);
        for(let i = 0; i < locationConfig.eightCities.cities.length; i++){
            $(`.extracity.${divs[i]} .extrcitydisplayname`).text(locationConfig.eightCities.cities[i].displayname + (locationConfig.eightCities.cities[i].state != null ? ", " + locationConfig.eightCities.cities[i].state : (locationConfig.eightCities.cities[i].stateFull != null ? ", " + locationConfig.eightCities.cities[i].stateFull : '')))
        }
    }
    locNaming();
    locNameInterval = setInterval(locNaming, 1000);
}

function onLocationInit(){
    console.log(locationConfig);
    setLocationText();
    setTimeout(grabData, 2500);
    dataGrabInterval = setInterval(() =>{
        if(inSettings == true){
            console.log("New data grab");
            grabData();
        }
    }, 60000);
}

async function startProgram() {
    inSettings = false;
    $("#map-interactive-settings").css('pointer-events', 'none')
    $("#settings-menu").fadeOut(0);
    $("#blackscreen").fadeIn(0);
    await createMaps();
    setTimeout(() => {
        audioPlayer.startPlaying(audioPlayer.playlist, true);
    }, appearanceSettings.startupTime - 500);
    setTimeout(() => {
        $("#blackscreen").fadeOut(0);
        slideKickOff();
        startLoops();
        //addRadarCities();
    }, appearanceSettings.startupTime);
}

function flavorChanger(flv){
    //changing color
    switch (flv) {
        case '60':
            $('.flavortext').text("Flavor: 60s");
            $("#flavor60 div").css('color', 'red'); 
            $("#flavor90 div").css('color', ''); 
            $("#flavor120 div").css('color', ''); 
            break;
        case '90':
            $('.flavortext').text("Flavor: 90s");
            $("#flavor60 div").css('color', ''); 
            $("#flavor90 div").css('color', 'red'); 
            $("#flavor120 div").css('color', ''); 
            break;
        case '120':
            $('.flavortext').text("Flavor: 120s");
            $("#flavor60 div").css('color', ''); 
            $("#flavor90 div").css('color', ''); 
            $("#flavor120 div").css('color', 'red'); 
            break;
        default:
            $("#flavor60 div").css('color', ''); 
            $("#flavor90 div").css('color', ''); 
            $("#flavor120 div").css('color', ''); 
            break;
    }
    slideSettings.flavor = flv;
    slideFlavor = flavorPicker(flv, {bulletin: weatherInfo.specialModes.bulletin, precip: weatherInfo.specialModes.precip});
}

/**
 * Returns a flavor
 * @param {int} time Duration of the flavor
 * @param {{bulletin: boolean, precip: boolean}} modes Different modes that will determine the slides in the flavor
 * @returns 
 */
function flavorPicker(time, modes) {
    if(slideSettings.auto == false){return slideSettings;}
    if(time == '') time = '120';
    if(modes.bulletin == undefined) modes.bulletin = false;
    if(modes.precip == undefined) modes.precip = false;

    var usableFlavors = slideFlavors[`${time}sec`].filter(f => f.bulletin === modes.bulletin && f.precip === modes.precip);
    var flavor = usableFlavors[Math.floor(Math.random() * usableFlavors.length)];
    return flavor;
}

function locationSearch(id){
    endAlertCrawl();
    clearInterval(locNameInterval);
    clearInterval(dataGrabInterval);
    mainquery = document.getElementById(id).value;
    grabLocation().then(() =>{
        setTimeout(() => {
            onLocationInit();
        }, 1000);
    });
}

function versionsChanger(version){
    appearanceSettings.graphicsPackage = version;
    let versionHex;
    $(".versionstext").text("Version: " + version);
    switch(version){
        case 2007:
            appearanceSettings.iconSet = '2007';
            versionHex = "#304976";
            $('.changecolor').css('color', versionHex);
            break;
        case 2008:
            appearanceSettings.iconSet = '2007';
            versionHex = "#171717";
            $('.changecolor').css('color', versionHex);
            break;
        case 2009:
            appearanceSettings.iconSet = '2007';
            versionHex = "#171717";
            $('.changecolor').css('color', versionHex);
            break;
        case 2010:
            appearanceSettings.iconSet = '2010';
            version = 2009;
            versionHex = "#171717";
            $('.changecolor').css('color', versionHex);
            break;
        default:
            break;
    }
    $("#styles").append(`<link rel="stylesheet" href="css/intellistar-32-${version}.css">`)
    setTimeout(() => {
        $("#styles").children('link').first().remove();
    }, 10);
}

function ldlChanger(type){
    appearanceSettings.ldlType = type;
    if(type == 'observations'){
        $("#ldlbuttonboth div").css('color', ''); 
        $("#ldlbuttonobs div").css('color', 'red'); 
    }else{
        $("#ldlbuttonboth div").css('color', 'red'); 
        $("#ldlbuttonobs div").css('color', ''); 
    }
}

function saveLocationSettings(){
    try {
        locationSettings.mainCity.autoFind = false;
        locationSettings.eightCities.autoFind = false;
        locationSettings.mainCity.displayname = locationConfig.mainCity.displayname;
        locationSettings.mainCity.extraname = locationConfig.mainCity.extraname;
        locationSettings.mainCity.type = "geocode";
        locationSettings.mainCity.val = `${locationConfig.mainCity.lat},${locationConfig.mainCity.lon}`;
        for(let j = 0; j < 8; j++){
            locationSettings.eightCities.cities[j].displayname = locationConfig.eightCities.cities[j].displayname;
            locationSettings.eightCities.cities[j].type = "geocode";
            locationSettings.eightCities.cities[j].val = `${locationConfig.eightCities.cities[j].lat},${locationConfig.eightCities.cities[j].lon}`;
        }
    } catch(error){
        console.error(error);
    }
}

function downloadConfig(){
    saveLocationSettings()
    setTimeout(() => {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(locationSettings));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", `${locationConfig.mainCity.displayname}-${Date.now()}.json`);
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }, 1500);
}
function jsonFuncs() {
  //credit: MapGuy
  const fileInput = document.getElementById('locloadconfiginput');
  const file = fileInput.files[0];
  if (!file) {
    $('.json-warning').fadeIn(0)
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const json = JSON.parse(e.target.result);
      console.log(json);
      Object.assign(locationSettings, json);
      console.log("Updated location settings:", locationSettings);
        grabLocation().then(() =>{
            setTimeout(() => {
                onLocationInit()
            }, 100);
        });
      setTimeout(() => {
        $('.extracitytext').text("Success! JSON loaded.");
        $('.extracitytext').css('color', 'green');
        $('.extracitytext').fadeIn(0)
        setTimeout(() => {
            $('.extracitytext').fadeOut(1000);
        }, 2500);
      }, 1000);
    } catch (err) {
      console.error("Error parsing JSON:", err);
      $('.extracitytext').text("ERROR: Something went wrong.");
      $('.extracitytext').css('color', 'darkred');
      $('.extracitytext').fadeIn(0)
      setTimeout(() => {
        $('.extracitytext').fadeOut(1000);
      }, 2500);
    }
  };
  reader.readAsText(file);
}
function saveExtraName(){
    if(document.getElementById('extranameinput').value == undefined || document.getElementById('extranameinput').value == ''){
        return;
    }
    locationConfig.mainCity.extraname = document.getElementById('extranameinput').value;
    $('.mainextraloc').text("Extra Name: " + document.getElementById('extranameinput').value);
    setTimeout(() => {
        document.getElementById('extranameinput').value = '';
    }, 500);
}

var cookieDivs = ["One","Two","Three","Four","Five","Six","Seven","Eight"]
function saveLocationCookies(){
    saveLocationSettings()
    setTimeout(() => {
        try {
            document.cookie = `mainCityAutoFind=false`;
            document.cookie = `mainCityName=${locationConfig.mainCity.displayname}`;
            document.cookie = `mainCityExtraName=${locationConfig.mainCity.extraname}`;
            document.cookie = `mainCityType=geocode`;
            document.cookie = `mainCityVal=${locationConfig.mainCity.lat},${locationConfig.mainCity.lon}`;
            document.cookie = `eightCitiesAutoFind=false`;
            for(var i = 0; i < locationConfig.eightCities.cities.length; i++){
                document.cookie = `eightCitiesName${cookieDivs[i]}=${locationConfig.eightCities.cities[i].displayname}`;
                document.cookie = `eightCitiesType${cookieDivs[i]}=geocode`;
                document.cookie = `eightCitiesVal${cookieDivs[i]}=${locationConfig.eightCities.cities[i].lat},${locationConfig.eightCities.cities[i].lon}`;
            }
            setTimeout(() => {
                $('.extracitytext').text("Success! Cookies saved.");
                $('.extracitytext').css('color', 'green');
                $('.extracitytext').fadeIn(0);

                setTimeout(() => {
                    $('.extracitytext').fadeOut(1000);
                }, 2500);
            }, 250);
        }catch(error){
            $('.extracitytext').text("ERROR: Something went wrong.");
            $('.extracitytext').css('color', 'darkred');
            $('.extracitytext').fadeIn(0);
            setTimeout(() => {
                $('.extracitytext').fadeOut(1000);
            }, 2500);
        }
    }, 1000);
}
function loadLocationCookies(){
    if(!document.cookie){
        $('.extracitytext').text("You don't have any cookies saved!");
        $('.extracitytext').css('color', 'darkred');
        $('.extracitytext').fadeIn(0)
        setTimeout(() => {
            $('.extracitytext').fadeOut(1000);
        }, 2500);
        return;
    }
    locationSettings.mainCity.autoFind = getCookie("mainCityAutoFind") == "false" ? false : true;
    locationSettings.eightCities.autoFind = getCookie("eightCitiesAutoFind") == "false" ? false : true;
    locationSettings.mainCity.displayname = getCookie("mainCityName");
    locationSettings.mainCity.extraname = getCookie("mainCityExtraName");
    locationSettings.mainCity.type = getCookie("mainCityType");
    locationSettings.mainCity.val = getCookie("mainCityVal");
    for(let i = 0; i < locationSettings.eightCities.cities.length; i++){
        locationSettings.eightCities.cities[i].displayname = getCookie(`eightCitiesName${cookieDivs[i]}`);
        locationSettings.eightCities.cities[i].type = getCookie(`eightCitiesType${cookieDivs[i]}`);
        locationSettings.eightCities.cities[i].val = getCookie(`eightCitiesVal${cookieDivs[i]}`);
    }
    setTimeout(() => {
        grabLocation().then(() =>{
            setTimeout(() => {
                onLocationInit()
            }, 100);
        });
        setTimeout(() => {
            console.log(locationSettings);
            $('.extracitytext').text("Success! Cookies loaded.");
            $('.extracitytext').css('color', 'green');
            $('.extracitytext').fadeIn(0);
            setTimeout(() => {
                $('.extracitytext').fadeOut(1000);
            }, 2500);
        }, 500);
    }, 500);
}

function loadMapCityDropbox(){
    $("#citydropvalue").html("<option value=\"N\"> </option>");
    $(".map-cities .city").each((index) =>{
        if(locationConfig.regionalMap.map.length > index){
            $("#citydropvalue").append(`<option value=${index}>${locationConfig.regionalMap.map[index].name}</option>`)
        }
    }).promise().done(function(){
        if(!(document.getElementById("citydropvalue").options.length >= 11)){
            $("#citydropvalue").append(`<option value=add>Add a city...</option>`)
        }
    })
}

var inMapBefore = false;
var currentMapIdx = '';
var mapDivs = ["i","ii","iii","iv","v","vi","vii","viii","ix","x"]
function mapSettings(){
    changeSlide('morelocation', '', function(){
        $("#citydropvalue").html("<option value=\"N\"> </option>");
        $(".map-cities .city." + mapDivs[currentMapIdx]).removeClass("selected");
        $(".city-properties").fadeOut(0);
        $("#settings-menu").fadeOut(0);
        slidePrograms.mapTest();
        $("#map-interactive-settings").fadeIn(0);
        document.getElementById("mapleftvalue").value = locationConfig.regionalMap.leftPos;
        document.getElementById("maptopvalue").value = locationConfig.regionalMap.topPos;
        if(!inMapBefore){
            $(".map-cities").css({'left':'','top':''});
            if(locationSettings.mapCities.autoFind == true){
                $(".map-cities .city").each((index, element) =>{
                    if(!locationConfig.regionalMap.map[index]){return;}
                    // console.log(index, element);
                    var oldLeft = Number($(element).css('left').split("px")[0]), oldTop = Number($(element).css('top').split("px")[0]);
                    // console.log(Number($(element).css('left').split("px")[0]), Number($(element).css('top').split("px")[0]))
                    $(element).css({
                        'left': oldLeft + locationConfig.regionalMap.leftPos,
                        'top': oldTop + locationConfig.regionalMap.topPos
                    })
                    locationConfig.regionalMap.map[index].left = oldLeft + locationConfig.regionalMap.leftPos;
                    locationConfig.regionalMap.map[index].top = oldTop + locationConfig.regionalMap.topPos;
                    //$(element).addClass("selected");
                })
            }
        }
        loadMapCityDropbox()
    });
    if(!inMapBefore){
        document.getElementById("mapleftvalue")
            .addEventListener("input", (event) =>{
                if(!Number(event.target.value)){
                    document.getElementById("mapleftvalue").value = locationConfig.regionalMap.leftPos;
                }else{
                    //console.log(event);
                    $(".map-regional").css({
                        left: `${event.target.value}px`
                    });
                    locationConfig.regionalMap.leftPos = event.target.value;
                }
            })
        document.getElementById("mapleftvalue")
            .addEventListener("keypress", (k) =>{
                //console.log(k)
                if(k.key == "a"){
                    locationConfig.regionalMap.leftPos++;
                    $(".map-regional").css({
                        left: `${locationConfig.regionalMap.leftPos}px`
                    });
                    document.getElementById("mapleftvalue").value = locationConfig.regionalMap.leftPos;
                }else if(k.key == "A"){
                    locationConfig.regionalMap.leftPos = locationConfig.regionalMap.leftPos + 10;
                    $(".map-regional").css({
                        left: `${locationConfig.regionalMap.leftPos}px`
                    });
                    document.getElementById("mapleftvalue").value = locationConfig.regionalMap.leftPos;
                }else if(k.key == "d"){
                    locationConfig.regionalMap.leftPos--;
                    $(".map-regional").css({
                        left: `${locationConfig.regionalMap.leftPos}px`
                    });
                    document.getElementById("mapleftvalue").value = locationConfig.regionalMap.leftPos;
                }else if(k.key == "D"){
                    locationConfig.regionalMap.leftPos = locationConfig.regionalMap.leftPos - 10;
                    $(".map-regional").css({
                        left: `${locationConfig.regionalMap.leftPos}px`
                    });
                    document.getElementById("mapleftvalue").value = locationConfig.regionalMap.leftPos;
                }
            })
        document.getElementById("maptopvalue")
            .addEventListener("input", (event) =>{
                if(!Number(event.target.value)){
                    document.getElementById("maptopvalue").value = locationConfig.regionalMap.topPos;
                }else{
                    //console.log(event);
                    $(".map-regional").css({
                        top: `${event.target.value}px`
                    });
                    locationConfig.regionalMap.topPos = event.target.value;
                }
            })
        document.getElementById("maptopvalue")
            .addEventListener("keypress", (k) =>{
                //console.log(k)
                if(k.key == "w"){
                    locationConfig.regionalMap.topPos++;
                    $(".map-regional").css({
                        top: `${locationConfig.regionalMap.topPos}px`
                    });
                    document.getElementById("maptopvalue").value = locationConfig.regionalMap.topPos;
                }else if(k.key == "W"){
                    locationConfig.regionalMap.topPos = locationConfig.regionalMap.topPos + 10;
                    $(".map-regional").css({
                        top: `${locationConfig.regionalMap.topPos}px`
                    });
                    document.getElementById("maptopvalue").value = locationConfig.regionalMap.topPos;
                }else if(k.key == "s"){
                    locationConfig.regionalMap.topPos--;
                    $(".map-regional").css({
                        top: `${locationConfig.regionalMap.topPos}px`
                    });
                    document.getElementById("maptopvalue").value = locationConfig.regionalMap.topPos;
                }else if(k.key == "S"){
                    locationConfig.regionalMap.topPos = locationConfig.regionalMap.topPos - 10;
                    $(".map-regional").css({
                        top: `${locationConfig.regionalMap.topPos}px`
                    });
                    document.getElementById("maptopvalue").value = locationConfig.regionalMap.topPos;
                }
            })
        document.getElementById("citydropvalue")
            .addEventListener('change', (event) =>{
                if(event.target.value == "N"){
                    $(".map-cities .city." + mapDivs[currentMapIdx]).removeClass("selected");
                    $(".city-properties").fadeOut(0);
                    return;
                }
                if(event.target.value == "add"){
                    $(".map-cities .city." + mapDivs[currentMapIdx]).removeClass("selected");
                    console.log("City added: no.", locationConfig.regionalMap.map.length);
                    locationConfig.regionalMap.map.push({
                        name: "City Name",
                        lat: 0,
                        lon: 0,
                        left: 720,
                        top: 430
                    });
                    $(".map-cities .city.selected").removeClass("selected");
                    currentMapIdx = locationConfig.regionalMap.map.length-1;
                    $("#citydropvalue").append(`<option value=${locationConfig.regionalMap.map.length-1}>City Name</option>`)
                    if(!(document.getElementById("citydropvalue").options.length >= 11)){
                        $("#citydropvalue").append(`<option value=add>Add a city...</option>`)
                    }else{
                        document.querySelector('option[value="add"]').remove();
                    }
                    $(".map-cities").append(`<div class="city ${mapDivs[locationConfig.regionalMap.map.length-1]} selected" style="left: 720px; top: 430px;"><div class="city-name">City Name</div><div class="temp">88</div><div class="icon" style="background-image: url(images/icons/2007/large/Ts.webp); background-size: 100% 100%;"></div></div>`)
                    $(".city-properties").fadeIn(0);
                    $(".city-properties .city-name").text("City Name:");
                    document.getElementById("cityleftvalue").value = 720;
                    document.getElementById("citytopvalue").value = 430;
                    loadMapCityDropbox();
                    return;
                }
                $(".map-cities .city." + mapDivs[currentMapIdx]).removeClass("selected");
                $(".city-properties").fadeIn(0);
                $(".city-properties .city-name").text(locationConfig.regionalMap.map[event.target.value].name + ":");
                currentMapIdx = event.target.value;
                document.getElementById("cityleftvalue").value = locationConfig.regionalMap.map[event.target.value].left;
                document.getElementById("citytopvalue").value = locationConfig.regionalMap.map[event.target.value].top;
                $(".map-cities .city." + mapDivs[currentMapIdx]).addClass("selected");
            })

        document.getElementById("cityleftvalue")
            .addEventListener('input', (event) =>{
                if(!Number(event.target.value)){
                    document.getElementById("cityleftvalue").value = locationConfig.regionalMap.map[currentMapIdx].left;
                }else{
                    //console.log(event);
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        left: `${event.target.value}px`
                    });
                    locationConfig.regionalMap.map[currentMapIdx].left = event.target.value;
                }
            })
        document.getElementById("cityleftvalue")
            .addEventListener("keypress", (k) =>{
                //console.log(k)
                if(k.key == "d"){
                    locationConfig.regionalMap.map[currentMapIdx].left++;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        left: `${locationConfig.regionalMap.map[currentMapIdx].left}px`
                    });
                    document.getElementById("cityleftvalue").value = locationConfig.regionalMap.map[currentMapIdx].left;
                }else if(k.key == "D"){
                    locationConfig.regionalMap.map[currentMapIdx].left = locationConfig.regionalMap.map[currentMapIdx].left + 10;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        left: `${locationConfig.regionalMap.map[currentMapIdx].left}px`
                    });
                    document.getElementById("cityleftvalue").value = locationConfig.regionalMap.map[currentMapIdx].left;
                }else if(k.key == "a"){
                    locationConfig.regionalMap.map[currentMapIdx].left--;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        left: `${locationConfig.regionalMap.map[currentMapIdx].left}px`
                    });
                    document.getElementById("cityleftvalue").value = locationConfig.regionalMap.map[currentMapIdx].left;
                }else if(k.key == "A"){
                    locationConfig.regionalMap.map[currentMapIdx].left = locationConfig.regionalMap.map[currentMapIdx].left - 10;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        left: `${locationConfig.regionalMap.map[currentMapIdx].left}px`
                    });
                    document.getElementById("cityleftvalue").value = locationConfig.regionalMap.map[currentMapIdx].left;
                }
            })
        
        document.getElementById("citytopvalue")
            .addEventListener('input', (event) =>{
                if(!Number(event.target.value)){
                    document.getElementById("citytopvalue").value = locationConfig.regionalMap.map[currentMapIdx].top;
                }else{
                    //console.log(event);
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        top: `${event.target.value}px`
                    });
                    locationConfig.regionalMap.map[currentMapIdx].top = event.target.value;
                }
            })
        document.getElementById("citytopvalue")
            .addEventListener("keypress", (k) =>{
                //console.log(k)
                if(k.key == "s"){
                    locationConfig.regionalMap.map[currentMapIdx].top++;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        top: `${locationConfig.regionalMap.map[currentMapIdx].top}px`
                    });
                    document.getElementById("citytopvalue").value = locationConfig.regionalMap.map[currentMapIdx].top;
                }else if(k.key == "S"){
                    locationConfig.regionalMap.map[currentMapIdx].top = locationConfig.regionalMap.map[currentMapIdx].top + 10;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        top: `${locationConfig.regionalMap.map[currentMapIdx].top}px`
                    });
                    document.getElementById("citytopvalue").value = locationConfig.regionalMap.map[currentMapIdx].top;
                }else if(k.key == "w"){
                    locationConfig.regionalMap.map[currentMapIdx].top--;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        top: `${locationConfig.regionalMap.map[currentMapIdx].top}px`
                    });
                    document.getElementById("citytopvalue").value = locationConfig.regionalMap.map[currentMapIdx].top;
                }else if(k.key == "W"){
                    locationConfig.regionalMap.map[currentMapIdx].top = locationConfig.regionalMap.map[currentMapIdx].top - 10;
                    $(".map-cities .city." + mapDivs[currentMapIdx]).css({
                        top: `${locationConfig.regionalMap.map[currentMapIdx].top}px`
                    });
                    document.getElementById("citytopvalue").value = locationConfig.regionalMap.map[currentMapIdx].top;
                }
            })
    }
}
function mapSettingsExit(){
    $("#settings-menu").fadeIn(0);
    $("#map-interactive-settings").fadeOut(0);
    $(".map-cities .city." + mapDivs[currentMapIdx]).removeClass("selected");
    $(".map").fadeOut(0);
    changeSlide('basic', 'morelocation');
    $(".map-cities .city").each((index, element) =>{
        if(!locationConfig.regionalMap.map[index]){return;}
        if(locationSettings.mapCities.autoFind == true){
            // console.log(index, element);
            var oldLeft = Number($(element).css('left').split("px")[0]), oldTop = Number($(element).css('top').split("px")[0]);
            // console.log(Number($(element).css('left').split("px")[0]), Number($(element).css('top').split("px")[0]))
            locationConfig.regionalMap.map[index].left = oldLeft;
            locationConfig.regionalMap.map[index].top = oldTop;
        }
    })
    inMapBefore = true;
    locationSettings.mapCities = locationConfig.regionalMap;
    locationSettings.mapCities.autoFind = false;
}
async function removeMapCity(){
    locationConfig.regionalMap.map.splice(currentMapIdx, 1);
    $(".map-cities .city." + mapDivs[currentMapIdx]).fadeOut(0);
    $(".city-properties").fadeOut(0);
    document.getElementById("citydropvalue").remove(Number(currentMapIdx) + 1)
    $("#citydropvalue").html("<option value=\"N\"> </option>");
    $(".map-cities").children(`.${mapDivs[currentMapIdx]}`).remove();
    loadMapCityDropbox();
    //last thing
    await grabMapCityData();
}
async function searchMapCity(){
    $.getJSON("https://api.weather.com/v3/location/search?query=" + document.getElementById("searchcityvalue").value + "&language=en-US&format=json&apiKey=" + api_key, function(data){
        console.log(data);
        locationConfig.regionalMap.map[currentMapIdx].name = data.location.displayName[0];
        locationConfig.regionalMap.map[currentMapIdx].lat = data.location.latitude[0];
        locationConfig.regionalMap.map[currentMapIdx].lon = data.location.longitude[0];
        $(".city-properties .city-name").text(data.location.displayName[0] + ":");
        $(".map-cities .city." + mapDivs[currentMapIdx] + " .city-name").text(data.location.displayName[0]);
        $("#citydropvalue").html("<option value=\"N\"> </option>");
        loadMapCityDropbox()
    })
    await grabMapCityData();
}