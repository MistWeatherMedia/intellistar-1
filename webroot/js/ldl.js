var obsInterval;
var alertActive;
var crawlIndex = 0;
var today = new Date();
var dateTimeChanger = setInterval(() => {
    $(".ldl-black .time").text(new Date().toLocaleTimeString('en-US', {hour: 'numeric', hour12: true, minute: 'numeric'}).split(" ")[0]);
    $(".ldl-blue .time span").text(new Date().toLocaleTimeString('en-US', {hour: 'numeric', hour12: true, minute: 'numeric'}).split(" ")[0]);
}, 1000);

function startLoops(){
    if(alertActive) return;
    if(Number(appearanceSettings.graphicsPackage) >= 2009){
        blueLDL(appearanceSettings.ldlType);
        $(".ldl-blue").fadeIn(0);
        $(".ldl-black").fadeOut(0);
    }else{
        $(".ldl-black").fadeIn(0);
        $(".ldl-blue").fadeOut(0);
        timeTab("time");
        blackLDL(appearanceSettings.ldlType);
    }
}

var timeTabIndex = 0;
function timeTab(type){
    $(".ldl-black .temp").text(weatherInfo.currentConditions.temp + "°");
    if(type == "time"){
        $(".ldl-black .time").fadeIn(500);
        $(".ldl-black .temp").fadeOut(500);
    }
    if(type == "temp"){
        $(".ldl-black .time").fadeOut(500);
        $(".ldl-black .temp").fadeIn(500);
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
    $(".ldl-black .observations").fadeOut(0);
    $(".ldl-black .template.ad").fadeIn(0);
    $(".ldl-black .weathercomlogo").fadeOut(0);
    $('.ldl-black .crawl').text(appearanceSettings.marqueeAd[idx])
    $('.ldl-black .crawl').marquee({ speed: 185, pauseOnHover: false }).on('finished', () =>{
        $('.ldl-black .crawl').text("");
        $('.ldl-black .crawl').marquee('destroy');
        obsInterval = blackLDLObs();
    })
}

var locWeatherID = appearanceSettings.localWeatherID == "XXXXX" ? Math.floor(Math.random() * 30000) + 10000 : appearanceSettings.localWeatherID;
var ldlIndex = 0;
function blackLDLObs(){
    $(".ldl-black .template.obs").fadeIn(0);
    $(".ldl-black .template.ad").fadeOut(0);
    $(".ldl-black .observations").fadeIn(0);
    $(".ldl-black .weathercomlogo").fadeIn(0);
    var observations = [
        localWeatherID = function(){
            $(".ldl-black .currently").fadeOut(0);
            $(".ldl-black .info-header").fadeOut(0);
            $(".ldl-black .info").fadeOut(0);
            $(".ldl-black .city-name").text("Local weather ID: " + locWeatherID);
        },
        cc = function(){
            $(".ldl-black .currently").fadeIn(0);
            $(".ldl-black .info").fadeIn(0);
            $(".ldl-black .info").text(`${weatherInfo.currentConditions.temp}°`);
            getIcon($(".ldl-black .icon"), weatherInfo.currentConditions.icon, "ldl", undefined);
            $(".ldl-black .icon").fadeIn(0);
            $(".ldl-black .city-name").text(locationConfig.mainCity.displayname);
        },
        wind = function(){
            $(".ldl-black .info-header").fadeIn(0);
            $(".ldl-black .icon").fadeOut(0);
            $(".ldl-black .info-header").text("WIND:");
            $(".ldl-black .info").empty();
            $(".ldl-black .info").append(`<span class="wdc">${weatherInfo.currentConditions.wind.split(" ")[0]}</span> ${weatherInfo.currentConditions.wind.split(" ")[1] == undefined ? "" : weatherInfo.currentConditions.wind.split(" ")[1]}`);
        },
        gusts = weatherInfo.currentConditions.gusts == "None" ? null : function(){
            $(".ldl-black .info-header").text("GUSTS:");
            $(".ldl-black .info").empty();
            $(".ldl-black .info").append(`${weatherInfo.currentConditions.gusts}<span>MPH</span>`)
        },
        humidity = function(){
            $(".ldl-black .info-header").text("HUMIDITY:");
            $(".ldl-black .info").empty();
            $(".ldl-black .info").append(`${weatherInfo.currentConditions.humidity.replace("%","")}<span>%</span>`)
        },
        dewpoint = function(){
            $(".ldl-black .info-header").text("DEWPOINT:");
            $(".ldl-black .info").empty();
            $(".ldl-black .info").text(`${weatherInfo.currentConditions.dewpoint}°`)
        },
        pressure = function(){
            $(".ldl-black .info-header").text("PRESSURE:");
            $(".ldl-black .info").empty();
            $(".ldl-black .info").append(`${weatherInfo.currentConditions.pressure.val}`)
        },
        visibility = function(){
            $(".ldl-black .info-header").text("VISIBILITY:");
            $(".ldl-black .info").empty();
            $(".ldl-black .info").append(`${weatherInfo.currentConditions.visibility}<span>MI</span>`)
        },
        precip = weatherInfo.monthlyPrecip == "0.00" ? null : function(){
            $(".ldl-black .info-header").text(`${today.toLocaleDateString("en-US", {month: 'short'}).toUpperCase()} PRECIP:`);
            $(".ldl-black .info").empty();
            $(".ldl-black .info").append(`${weatherInfo.monthlyPrecip}<span>IN</span>`)
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
    $('.ldl-blue').fadeOut(0);
    $('.ldl-black').fadeIn(0);
    $('.ldl-black .time').fadeIn(0);
    alertActive = true;
    var crawlt = crawlType(weatherInfo.bulletin.crawlAlert.alert.name);
    $('.ldl-black .observations').fadeOut(0);
    $('.ldl-black .weathercomlogo').fadeOut(0);
    $('.ldl-black .template.alert').css("background-image", "url(images/" + crawlt + ".png)");
    $('.ldl-black .template.alert').fadeIn(0);
    $('.ldl-black .time').css({
        "color": "#e7e7e7"
    });
    if(crawlType(weatherInfo.bulletin.crawlAlert.alert.name) == "Advisory"){
        $('.ldl-black .alertinfo .name').css({"color": "#171717", "text-shadow": "0px 0px #000"})
    }else{
        $('.ldl-black .alertinfo .name').css({"color": "", "text-shadow": ""})
    }
    if(!inSettings && warningSettings[weatherInfo.bulletin.crawlAlert.alert.name].severe) audioPlayer.playSevere(weatherInfo.bulletin.crawlAlert.alert.name);
    $('.ldl-black .alertinfo .name').text(weatherInfo.bulletin.crawlAlert.alert.name.toUpperCase());
    $('.ldl-black .alertinfo .alertcrawl').text(weatherInfo.bulletin.crawlAlert.alert.description.toUpperCase());
    $('.ldl-black .alertinfo').fadeIn(0);
    $('.ldl-black .alertinfo .alertcrawl').marquee({speed: 185, pauseOnHover: false}).on('finished', () =>{
        if(!inSettings && warningSettings[weatherInfo.bulletin.crawlAlert.alert.name].severe) audioPlayer.playSevere(weatherInfo.bulletin.crawlAlert.alert.name);
    })
}
function endAlertCrawl(){
    if(appearanceSettings.graphicsPackage >= 2009){
        $('.ldl-blue').fadeIn(0);
        $('.ldl-black').fadeOut(0);
    }
    $('.ldl-black .alertinfo .alertcrawl').marquee('destroy');
    $('.ldl-black .alertinfo .alertcrawl').text('');
    $('.ldl-black .alertinfo .name').text('');
    $('.ldl-black .alertinfo').fadeOut(0);
    $('.ldl-black .template.alert').fadeOut(0);
    weatherInfo.bulletin.crawlAlert.alert = undefined;
    alertActive = false;
    $('.ldl-black .time').css({
        "color": ""
    });
}

async function preloadImages(){
    await $('.ldl-blue').fadeIn(0, function(){$('.ldl-blue').fadeOut(0)});
    await $('.ldl-black .template').fadeIn(0, function(){$('.ldl-black .template').fadeOut(0)});
}

function blueLDL(){
    if(weatherInfo.currentConditions.temp >= 100){
        $(".ldl-blue .temptab span.temp").css("left", "13px");
        $(".ldl-blue .temptab span.degree").css("left", "13px");
    }
    $(".ldl-blue .temptab span.temp").text(weatherInfo.currentConditions.temp);
    $(".ldl-blue .template").css('animation', 'blueLDLInit 0.75s linear forwards');
    $(".ldl-blue .temptab").css('animation', 'tempTabInit 0.17s linear forwards');
    $(".ldl-blue .time").css('animation', 'timeTabInit 0.33s linear forwards');
    setTimeout(() => {
        $(".ldl-blue .time-padding").fadeIn(0);
        $(".ldl-blue .crawl-tab").fadeIn(0);
        $(".ldl-blue .top-bar").fadeIn(0);
        $(".ldl-blue .crawl-tab").css('animation', 'tabCapInit 0.43s linear forwards');
        $(".ldl-blue .top-bar").css('animation', 'topBarInit 0.43s linear forwards');
    }, 233);
    setTimeout(() => {
        addTabs();
    }, 1000);
    if(appearanceSettings.ldlType == "both"){
        setTimeout(() => {
            $(".ldl-blue .crawl .box").css('animation', 'crawlInit 0.15s linear forwards');
            crawlIndex = Math.floor(Math.random() * appearanceSettings.marqueeAd.length);
            adCrawlBlue(crawlIndex);
        }, 2000);
    }
}

function addTabs(){
    if(appearanceSettings.ldlType == "observations"){
        setTimeout(() => {
            $(".ldl-blue .upnext-tabs .upnext-now").animate({'left': '0px'}, 133, 'linear', function(){
                setTimeout(() => {
                    $(".ldl-blue .flare").css('animation', 'flare 0.5s linear forwards');
                    obsInterval = blueLDLObs();
                }, 500);
            });
        }, 500);
    }else{
        $(".ldl-blue .upnext-tabs .upnext-crawl").css('z-index', 10);
        $(".ldl-blue .upnext-tabs .upnext-now").css('opacity', '0.5');
        $(".ldl-blue .upnext-tabs .upnext-crawl").animate({'left': '-55.5px'}, 133, 'linear', function(){
            setTimeout(() => {
                $(".ldl-blue .upnext-tabs .upnext-now").css('animation', 'nowTabCrawlInit 0.2s linear forwards');
            }, 250);
        });
    }
}

function adCrawlBlue(idx){
    $('.ldl-blue .crawl .scroll').text(appearanceSettings.marqueeAd[idx])
    $('.ldl-blue .crawl .scroll').marquee({ speed: 185, pauseOnHover: false, delayBeforeStart: 500 }).on('finished', () =>{
        $('.ldl-blue .crawl .scroll').text("");
        $('.ldl-blue .crawl .scroll').marquee('destroy');
        $(".ldl-blue .crawl .box").css('animation', 'crawlDestroy 0.15s linear forwards');
        $(".ldl-blue .upnext-tabs .upnext-crawl").fadeOut(133, 'linear')
        setTimeout(() => {
            $(".ldl-blue .upnext-tabs .upnext-now").css({'animation': '', 'left': '90px'});
            $(".ldl-blue .upnext-tabs .upnext-now").animate({'left': '0px'}, 150, 'linear', function(){
                $(".ldl-blue .upnext-tabs .upnext-now").css({'opacity': 1, 'z-index': 10});
                $(".ldl-blue .flare").css('animation', 'flare 0.5s linear forwards');
                obsInterval = blueLDLObs();
            });
        }, 133);
    })
}

//city-name is loc weather id too, start from margin-top -60px down to 8px
function blueLDLObs(){
    var observations = [
        localWeatherID = function(){
            $(".ldl-blue .observations .city-name").fadeIn(0);
            $(".ldl-blue .observations .city-name").text("Local weather ID: " + locWeatherID);
            $(".ldl-blue .observations .city-name").animate({'margin-top': '4px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .city-name").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .city-name").css('margin-top', '-60px');
                })
            }, 3667);
        },
        cc = function(){
            $(".ldl-blue .observations .city-name").fadeIn(0);
            $(".ldl-blue .observations .tempobs").fadeIn(0);
            $(".ldl-blue .observations .icon").fadeIn(0);
            $(".ldl-blue .observations .city-name").text(locationConfig.mainCity.displayname);
            $(".ldl-blue .observations .tempobs").html(`${weatherInfo.currentConditions.temp}<span class="degree">°</span>`);
            $(".ldl-blue .observations .city-name").animate({'margin-top': '4px'}, 333, 'linear');
            $(".ldl-blue .observations .tempobs").animate({'margin-top': '7px'}, 333, 'linear');
            $(".ldl-blue .observations .icon").animate({'margin-top': '5px'}, 333, 'linear');
            getIcon($(".ldl-blue .observations .icon"), weatherInfo.currentConditions.icon, 'ldl', undefined);
            setTimeout(() => {
                $(".ldl-blue .observations .icon").fadeOut(333, 'linear');
                $(".ldl-blue .observations .tempobs").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .tempobs").css('margin-top', '-60px');
                    $(".ldl-blue .observations .icon").css('margin-top', '-63px');
                })
            }, 3667);
        },
        wind = function(){
            $(".ldl-blue .observations .wind").fadeIn(0);
            $(".ldl-blue .wind .info").text(weatherInfo.currentConditions.wind);
            $(".ldl-blue .observations .wind").animate({'margin-top': '0px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .wind").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .wind").css('margin-top', '-60px');
                })
            }, 3667);
        },
        gusts = weatherInfo.currentConditions.gusts == "None" ? null : function(){
        $(".ldl-blue .observations .city-name").fadeIn(0);
        $(".ldl-blue .observations .city-name").text(locationConfig.mainCity.displayname);
        $(".ldl-blue .observations .city-name").animate({'margin-top': '8px'}, 333, 'linear');
            $(".ldl-blue .observations .gusts").fadeIn(0);
            $(".ldl-blue .gusts .info").html(`${weatherInfo.currentConditions.gusts}<span>MPH</span>`);
            $(".ldl-blue .observations .gusts").animate({'margin-top': '0px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .gusts").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .gusts").css('margin-top', '-60px');
                })
            }, 3667);
        },
        humidity = function(){
            $(".ldl-blue .observations .humidity").fadeIn(0);
            $(".ldl-blue .humidity .info").html(`${weatherInfo.currentConditions.humidity.replace("%","")}<span>%</span>`);
            $(".ldl-blue .observations .humidity").animate({'margin-top': '0px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .humidity").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .humidity").css('margin-top', '-60px');
                })
            }, 3667);
        },
        feelslike = weatherInfo.currentConditions.feelslike.type == null ? null : function(){
            $(".ldl-blue .observations .feelslike").fadeIn(0);
            $(".ldl-blue .feelslike .obsheader").html(weatherInfo.currentConditions.feelslike.type.toUpperCase() + ":");
            $(".ldl-blue .feelslike .info").html(`${weatherInfo.currentConditions.feelslike.val}<span class="degree">°</span>`);
            $(".ldl-blue .observations .feelslike").animate({'margin-top': '0px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .feelslike").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .feelslike").css('margin-top', '-60px');
                })
            }, 3667);
        },
        dewpoint = function(){
            $(".ldl-blue .observations .dewpt").fadeIn(0);
            $(".ldl-blue .dewpt .info").html(`${weatherInfo.currentConditions.dewpoint}<span class="degree">°</span>`);
            $(".ldl-blue .observations .dewpt").animate({'margin-top': '0px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .dewpt").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .dewpt").css('margin-top', '-60px');
                })
            }, 3667);
        },
        pressure = function(){
            $(".ldl-blue .observations .pressure").fadeIn(0);
            $(".ldl-blue .pressure .info").html(`${weatherInfo.currentConditions.pressure.val}`);
            $(".ldl-blue .observations .pressure").animate({'margin-top': '0px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .pressure").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .pressure").css('margin-top', '-60px');
                })
            }, 3667);
        },
        visibility = function(){
            $(".ldl-blue .observations .visibility").fadeIn(0);
            $(".ldl-blue .visibility .info").html(`${weatherInfo.currentConditions.visibility}<span>MI</span>`);
            $(".ldl-blue .observations .visibility").animate({'margin-top': '3px'}, 333, 'linear');
            setTimeout(() => {
                if(weatherInfo.monthlyPrecip == "0.00"){
                    $(".ldl-blue .observations .city-name").fadeOut(333, 'linear', function(){
                        $(".ldl-blue .observations .city-name").css('margin-top', '-60px');
                    });
                }
                $(".ldl-blue .observations .visibility").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .visibility").css('margin-top', '-60px');
                })
            }, 3667);
        },
        precip = weatherInfo.monthlyPrecip == "0.00" ? null : function(){
            $(".ldl-blue .observations .precip").fadeIn(0);
            $(".ldl-blue .precip .obsheader").html(`${today.toLocaleDateString("en-US", {month: 'short'}).toUpperCase()} PRECIP:`);
            $(".ldl-blue .precip .info").html(`${weatherInfo.monthlyPrecip}<span>IN</span>`);
            $(".ldl-blue .observations .precip").animate({'margin-top': '0px'}, 333, 'linear');
            setTimeout(() => {
                $(".ldl-blue .observations .city-name").fadeOut(333, 'linear');
                $(".ldl-blue .observations .precip").fadeOut(333, 'linear', function(){
                    $(".ldl-blue .observations .precip").css('margin-top', '-60px');
                    $(".ldl-blue .observations .city-name").css('margin-top', '-60px');
                })
            }, 3667);
        }
    ]
    var currentProgram = observations[ldlIndex % observations.length];
    if(currentProgram == null){
        ldlIndex++;
        obsInterval = blueLDLObs()
        return;
    }
    currentProgram();
    ldlIndex = ldlIndex + 1;

    setTimeout(() => {
        obsInterval = blueLDLObs()
    }, 4000);
}