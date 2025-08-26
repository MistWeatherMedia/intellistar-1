var obsInterval;
var alertActive;
var crawlIndex = 0;
var today = new Date();
var dateTimeChanger = setInterval(() => {
    $(".ldl .time").text(new Date().toLocaleTimeString('en-US', {hour: 'numeric', hour12: true, minute: 'numeric'}).split(" ")[0]);
}, 1000);

function startLoops(){
    if(alertActive) return;
    timeTab("time");
    blackLDL(appearanceSettings.ldlType);
}

var timeTabIndex = 0;
function timeTab(type){
    $(".ldl .temp").text(weatherInfo.currentConditions.temp + "°");
    if(type == "time"){
        $(".ldl .time").fadeIn(500);
        $(".ldl .temp").fadeOut(500);
    }
    if(type == "temp"){
        $(".ldl .time").fadeOut(500);
        $(".ldl .temp").fadeIn(500);
    }
    var list = ["temp","time"];
    setTimeout(() => {
        timeTab(list[timeTabIndex % list.length]);
        timeTabIndex = timeTabIndex + 1;
    }, 8000);
}

function blackLDL(type){
    if(type == 'both'){
        crawlIndex = Math.floor(Math.random() * appearanceSettings.marqueeAd.length);
        adCrawl(crawlIndex);
    } else {
        obsInterval = blackLDLObs();
    }
}

function adCrawl(idx){
    $(".ldl .observations").fadeOut(0);
    $(".ldl .weathercomlogo").fadeOut(0);
    $('.ldl .crawl').text(appearanceSettings.marqueeAd[idx])
    $('.ldl .crawl').marquee({ speed: 185, pauseOnHover: false }).on('finished', () =>{
        $('.ldl .crawl').text("");
        $('.ldl .crawl').marquee('destroy');
        obsInterval = blackLDLObs();
    })
}

var locWeatherID = appearanceSettings.localWeatherID == "XXXXX" ? Math.floor(Math.random() * 30000) + 10000 : appearanceSettings.localWeatherID;
var ldlIndex = 0;
function blackLDLObs(){
    $(".ldl .template.obs").fadeIn(0);
    $(".ldl .template.ad").fadeOut(0);
    $(".ldl .observations").fadeIn(0);
    $(".ldl .weathercomlogo").fadeIn(0);
    var observations = [
        localWeatherID = function(){
            $(".ldl .currently").fadeOut(0);
            $(".ldl .info-header").fadeOut(0);
            $(".ldl .info").fadeOut(0);
            $(".ldl .city-name").text("Local weather ID: " + locWeatherID);
        },
        cc = function(){
            $(".ldl .currently").fadeIn(0);
            $(".ldl .info").fadeIn(0);
            $(".ldl .info").text(`${weatherInfo.currentConditions.temp}°`);
            getIcon($(".ldl .icon"), weatherInfo.currentConditions.icon, "ldl", undefined);
            $(".ldl .icon").fadeIn(0);
            $(".ldl .city-name").text(locationConfig.mainCity.displayname);
        },
        wind = function(){
            $(".ldl .info-header").fadeIn(0);
            $(".ldl .icon").fadeOut(0);
            $(".ldl .info-header").text("WIND:");
            $(".ldl .info").empty();
            $(".ldl .info").append(`<span class="wdc">${weatherInfo.currentConditions.wind.split(" ")[0]}</span> ${weatherInfo.currentConditions.wind.split(" ")[1] == undefined ? "" : weatherInfo.currentConditions.wind.split(" ")[1]}`);
        },
        gusts = weatherInfo.currentConditions.gusts == "None" ? null : function(){
            $(".ldl .info-header").text("GUSTS:");
            $(".ldl .info").empty();
            $(".ldl .info").append(`${weatherInfo.currentConditions.gusts}<span>MPH</span>`)
        },
        humidity = function(){
            $(".ldl .info-header").text("HUMIDITY:");
            $(".ldl .info").empty();
            $(".ldl .info").append(`${weatherInfo.currentConditions.humidity.replace("%","")}<span>%</span>`)
        },
        dewpoint = function(){
            $(".ldl .info-header").text("DEWPOINT:");
            $(".ldl .info").empty();
            $(".ldl .info").text(`${weatherInfo.currentConditions.dewpoint}°`)
        },
        pressure = function(){
            $(".ldl .info-header").text("PRESSURE:");
            $(".ldl .info").empty();
            $(".ldl .info").append(`${weatherInfo.currentConditions.pressure.val}`)
        },
        visibility = function(){
            $(".ldl .info-header").text("VISIBILITY:");
            $(".ldl .info").empty();
            $(".ldl .info").append(`${weatherInfo.currentConditions.visibility}<span>MI</span>`)
        },
        precip = weatherInfo.monthlyPrecip == "0.00" ? null : function(){
            $(".ldl .info-header").text(`${today.toLocaleDateString("en-US", {month: 'short'}).toUpperCase()} PRECIP:`);
            $(".ldl .info").empty();
            $(".ldl .info").append(`${weatherInfo.monthlyPrecip}<span>IN</span>`)
        }
    ]
    var currentProgram = observations[ldlIndex % observations.length];
    if(currentProgram == null){
        ldlIndex++;
        obsInterval = blackLDLObs()
        return;
    }
    currentProgram();
    ldlIndex = ldlIndex + 1;

    setTimeout(() => {
        obsInterval = blackLDLObs()
    }, 6000);
}

function startAlertCrawl(){
    alertActive = true;
    var crawlt = crawlType(weatherInfo.bulletin.crawlAlert.alert.name);
    $('.ldl .observations').fadeOut(0);
    $('.ldl .weathercomlogo').fadeOut(0);
    $('.ldl .template.alert').css("background-image", "url(images/" + crawlt + ".png)");
    $('.ldl .template.alert').fadeIn(0);
    $('.ldl .time').css({
        "color": "#e7e7e7"
    });
    if(crawlType(weatherInfo.bulletin.crawlAlert.alert.name) == "Advisory"){
        $('.ldl .alertinfo .name').css({"color": "#171717", "text-shadow": "0px 0px #000"})
    }
    if(!inSettings) audioPlayer.playSevere(weatherInfo.bulletin.crawlAlert.alert.name);
    $('.ldl .alertinfo .name').text(weatherInfo.bulletin.crawlAlert.alert.name.toUpperCase());
    $('.ldl .alertinfo .alertcrawl').text(weatherInfo.bulletin.crawlAlert.alert.description.toUpperCase());
    $('.ldl .alertinfo').fadeIn(0);
    $('.ldl .alertinfo .alertcrawl').marquee({speed: 185, pauseOnHover: false}).on('finished', () =>{
        if(!inSettings) audioPlayer.playSevere(weatherInfo.bulletin.crawlAlert.alert.name);
    })
}