//wanted to make my own slides class but I think Joe's syntax for slides were better
var slideDivs = {
    "currentConditions": ".current-conditions",
    "nearbyCities": ".eight-cities",
    "dayDesc": ".local-forecast",
    "weekAhead": ".week-ahead",
    "airQuality": ".air-quality",
    "dopplerRadar": ".radar",
    "daypartForecast": ".daypart-forecast",
    "almanac": ".almanac",
    "bulletin": ".bulletin"
}

//to be used later
var slideHeaders = {
    "currentConditions": "*city*",
    "nearbyCities": "",
    "dayDesc": "*city* *ending*",
    "weekAhead": "*city* *ending*"
}

var slideFlavor = {
    flavor: '',
    bulletin: false,
    precip: false,
    order: [
        {function:"currentConditions",slideDelay:8000},
        {function:"nearbyCities",slides:2,slideDelay:6000},
        {function:"mapCurrent",slideDelay:8000},
        {function:"radarDoppler",slideDelay:8000},
        {function:"almanac",slideDelay:8000},
        {function:"airQuality",slideDelay:8000},
        {function:"daypartForecast",slideDelay:8000},
        {function:"mapForecast",slides:2,slideDelay:7000},
        {function:"localForecast",slides:4,slideDelay:7500},
        {function:"weekAhead",slideDelay:8000},
    ]
}

var slideLength;
var currentProgram;
var currentDiv;
var idx = 0, nidx = 1;

function slideKickOff() {
    idx = 0;
    nidx = 1;
    showSlides();
}//end of slideKickOff() function

function showSlides() {
    slideLength = slideFlavor.order[idx].slideDelay;
    var slidePrograms = {
        currentConditions() {
            audioPlayer.vocallocal.cc = vocallocalCC()
            $(".current-conditions").fadeIn(0);
            $(".current-conditions .city-name").text(locationConfig.mainCity.displayname.toUpperCase());
            $(".current-conditions .cond").text(weatherInfo.currentConditions.cond);
            $(".current-conditions .temp").text(weatherInfo.currentConditions.temp);
            $(".current-conditions .humidity").text(weatherInfo.currentConditions.humidity);
            $(".current-conditions .dewpoint").text(weatherInfo.currentConditions.dewpoint + "°");
            $(".current-conditions .pressure .data").text(weatherInfo.currentConditions.pressure.val);
            $(".current-conditions .visibility .data").text(weatherInfo.currentConditions.visibility);
            $(".current-conditions .wind").text(weatherInfo.currentConditions.wind);
            if (weatherInfo.currentConditions.gusts != "None") {
                $(".current-conditions .gusts .data").text(weatherInfo.currentConditions.gusts);
                $(".current-conditions .gusts .miles").fadeIn(0);
            } else {
                $(".current-conditions .gusts .none").fadeIn(0);
                $(".current-conditions .gusts .miles").fadeOut(0);
            }
            if (weatherInfo.currentConditions.feelslike.type != null) {
                $('.current-conditions .labels').append(`${weatherInfo.currentConditions.feelslike.type.toUpperCase()}`);
                $('.current-conditions .feelslike').fadeIn(0);
                $('.current-conditions .feelslike').text(weatherInfo.currentConditions.feelslike.val + "°");
            }
            getIcon($('.current-conditions .icon'), weatherInfo.currentConditions.icon, "current", "large");

            $('.current-conditions .box').fadeIn(167, 'linear');
            $('.current-conditions .header').fadeIn(333, 'linear');
            audioPlayer.playCC(true);

            setTimeout(() => {
                $('.current-conditions .box').fadeOut(167, 'linear');
                $('.current-conditions .header').fadeOut(333, 'linear');
                setTimeout(() => {
                    $('.current-conditions').fadeOut(0);
                    slideCallBack();
                }, 333);
            }, slideLength - 333);
        },
        nearbyCities() {
            try {
                if (weatherInfo.eightCities.cities.length == 0) {
                    throw new Error("No local observations");
                }
                $('.eight-cities').fadeIn(0);
                function eightCities(offset) {
                    var loDivs = ["i", "ii", "iii", "iv"];
                    for (var i = 0; i < 4; i++) {
                        $(`.extra-loc.${loDivs[i]} .name`).text(weatherInfo.eightCities.cities[i + offset].name);
                        $(`.extra-loc.${loDivs[i]} .temp`).text(weatherInfo.eightCities.cities[i + offset].temp);
                        $(`.extra-loc.${loDivs[i]} .wind .direction`).text(weatherInfo.eightCities.cities[i + offset].wind.direction);
                        $(`.extra-loc.${loDivs[i]} .wind .speed`).text(weatherInfo.eightCities.cities[i + offset].wind.speed == 0 ? "" : weatherInfo.eightCities.cities[i + offset].wind.speed);
                        getIcon($(`.extra-loc.${loDivs[i]} .icon`), weatherInfo.eightCities.cities[i + offset].icon, "current", "large");
                    }
                }

                eightCities(0);
                $('.eight-cities .box').fadeIn(167, 'linear');
                $('.eight-cities .header').fadeIn(333, 'linear');
                if (weatherInfo.eightCities.cities.length > 4) {
                    setTimeout(() => {
                        $(".eight-cities .information").fadeOut(167, 'linear');
                        setTimeout(() => {
                            eightCities(4);
                            $(".eight-cities .information").fadeIn(167, 'linear');
                        }, 167);
                        setTimeout(() => {
                            $('.eight-cities .box').fadeOut(167, 'linear');
                            $('.eight-cities .header').fadeOut(333, 'linear');
                            setTimeout(() => {
                                $('.eight-cities').fadeOut(0);
                                slideCallBack();
                            }, 333, 'linear');
                        }, slideLength - 333);
                    }, slideLength);
                } else {
                    setTimeout(() => {
                        $('.eight-cities .box').fadeOut(167, 'linear');
                        $('.eight-cities .header').fadeOut(333, 'linear');
                        setTimeout(() => {
                            $('.eight-cities').fadeOut(0);
                            slideCallBack();
                        }, 333, 'linear');
                    }, slideLength - 333);
                }
            } catch (error) {
                if (weatherInfo.eightCities.cities.length == 0) {
                    $('.eight-cities').fadeOut(0);
                    slideCallBack();
                    throw new Error("No local observations");
                }
            }

        },
        localForecast(lidx) {
            if (lidx === undefined) { lidx = 0 }
            if(audioSettings.vocallocal) audioPlayer.vocallocal.lf = vocallocalLF(lidx, slideLength);
            $('.local-forecast').fadeIn(0);
            $('.local-forecast .box').fadeIn(167, 'linear');
            $('.local-forecast .header').fadeIn(333, 'linear');
            $('.local-forecast .information').fadeIn(167, 'linear');
            $('.local-forecast .desc-mov').fadeIn(167, 'linear');

            $('.local-forecast .city-name').text(locationConfig.mainCity.extraname.toUpperCase());
            $('.local-forecast .period').text(weatherInfo.dayDesc.days[lidx].name);
            $('.local-forecast .description').text(weatherInfo.dayDesc.days[lidx].desc);
            $('.local-forecast .desc-mov').css({
                'background-image': `url(images/localforecast/${weatherInfo.dayDesc.days[lidx].cond.name}${showNight(weatherInfo.dayDesc.days[lidx], idx) ? weatherInfo.dayDesc.days[lidx].cond.time : ""}.png)`
            });
            if(!audioSettings.vocallocal){
                if(lidx == 0){audioPlayer.playLF();}
            }else{
                audioPlayer.playLF();
            }
            if (lidx >= slideFlavor.order[idx].slides - 1) {
                setTimeout(() => {
                    $('.local-forecast .box').fadeOut(167, 'linear');
                    $('.local-forecast .header').fadeOut(333, 'linear');
                    $('.local-forecast .desc-mov').fadeOut(167, 'linear');
                    setTimeout(() => {
                        $('.local-forecast').fadeOut(0);
                        slideCallBack();
                    }, 333);
                }, slideLength - 333);
            } else {
                setTimeout(() => {
                    $('.local-forecast .information').fadeOut(167, 'linear');
                    $('.local-forecast .desc-mov').fadeOut(167, 'linear');
                    setTimeout(() => {
                        slidePrograms.localForecast(lidx + 1);
                    }, 333);
                }, slideLength - 333);
            }
        },
        weekAhead() {
            audioPlayer.playEF();
            $('.week-ahead').fadeIn(0);
            $('.week-ahead .box').fadeIn(167, 'linear');
            $('.week-ahead .header').fadeIn(333, 'linear');
            $('.week-ahead .city-name').text(locationConfig.mainCity.extraname.toUpperCase());

            var waDivs = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
            for (var i = 0; i < 7; i++) {
                if (weatherInfo.weekAhead.days[i].name == "SAT" || weatherInfo.weekAhead.days[i].name == "SUN") {
                    $(`.week-ahead .day.${waDivs[i]} .weekend`).fadeIn(0);
                    $(`.week-ahead .day.${waDivs[i]} .name`).addClass("wk");
                }
                $(`.week-ahead .day.${waDivs[i]} .name`).text(weatherInfo.weekAhead.days[i].name);
                $(`.week-ahead .day.${waDivs[i]} .cond`).text(weatherInfo.weekAhead.days[i].cond);
                $(`.week-ahead .day.${waDivs[i]} .high`).text(weatherInfo.weekAhead.days[i].high);
                $(`.week-ahead .day.${waDivs[i]} .low`).text(weatherInfo.weekAhead.days[i].low);
                getIcon($(`.week-ahead .day.${waDivs[i]} .icon`), weatherInfo.weekAhead.days[i].icon, "forecast", "large");
            }
            setTimeout(() => {
                $('.week-ahead .box').fadeOut(167, 'linear');
                $('.week-ahead .header').fadeOut(333, 'linear');
                setTimeout(() => {
                    $('.week-ahead').fadeOut(0);
                    slideCallBack();
                }, 333);
            }, slideLength - 333);
        },
        airQuality() {
            $('.air-quality').fadeIn(0);
            $('.air-quality .box').fadeIn(167, 'linear');
            $('.air-quality .header').fadeIn(333, 'linear');
            $('.air-quality .qualityarrow').fadeIn(167, 'linear');
            $('.air-quality .city-name').text(locationConfig.mainCity.displayname.toUpperCase());
            var arrowAnim = 317.5 + (95 * (weatherInfo.airQuality.categoryIndex - 1));
            var aqDiv = { 1: "low", 2: "moderate", 3: "unhealthy", 4: "high", 5: "extreme" }[weatherInfo.airQuality.categoryIndex];
            var day = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday" }[new Date().getDay()]
            $('.air-quality .day').text(day + ":");
            for (var i = 0; i < weatherInfo.airQuality.pollutants.length; i++) {
                $('.primpollut .pollutants').append(`<span>${weatherInfo.airQuality.pollutants[i]}</span>`);
            }
            setTimeout(() => {
                $('.air-quality .qualityarrow').animate({ "bottom": `${arrowAnim}px` }, 500, 'linear', function () {
                    $(`.qualitybar .${aqDiv} span.text`).fadeIn(500);
                })
            }, 167);

            setTimeout(() => {
                $('.air-quality .header').fadeOut(333, 'linear');
                setTimeout(() => {
                    $('.air-quality').fadeOut(0);
                    slideCallBack();
                }, 333);
            }, slideLength - 333);
        },
        almanac() {
            $('.almanac').fadeIn(0);
            $('.almanac .box').fadeIn(167, 'linear');
            $('.almanac .header').fadeIn(333, 'linear');
            $('.almanac .day.i .almheader').text(weatherInfo.almanac.days[0].day);
            $('.almanac .day.i .sunrise').append(weatherInfo.almanac.days[0].sunrise.replace("am", "<span>am</span>").replace("pm", "<span>pm</span>"));
            $('.almanac .day.i .sunset').append(weatherInfo.almanac.days[0].sunset.replace("am", "<span>am</span>").replace("pm", "<span>pm</span>"));
            $('.almanac .day.ii .almheader').text(weatherInfo.almanac.days[1].day);
            $('.almanac .day.ii .sunrise').append(weatherInfo.almanac.days[1].sunrise.replace("am", "<span>am</span>").replace("pm", "<span>pm</span>"));
            $('.almanac .day.ii .sunset').append(weatherInfo.almanac.days[1].sunset.replace("am", "<span>am</span>").replace("pm", "<span>pm</span>"));
            $('.almanac .stationname').text(weatherInfo.almanac.stationname);
            $('.almanac .almdate').text(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase());
            $('.almanac .yesterday .high').text(weatherInfo.almanac.yesterday.high);
            $('.almanac .yesterday .low').text(weatherInfo.almanac.yesterday.low);
            $('.almanac .average .high').text(weatherInfo.almanac.average.high);
            $('.almanac .average .low').text(weatherInfo.almanac.average.low);
            $('.almanac .records .high').text(weatherInfo.almanac.record.high);
            $('.almanac .records .low').text(weatherInfo.almanac.record.low);
            $('.almanac .records .highyear').text(weatherInfo.almanac.record.recordYearHigh);
            $('.almanac .records .lowyear').text(weatherInfo.almanac.record.recordYearLow);

            setTimeout(() => {
                $('.almanac .box').fadeOut(167, 'linear');
                $('.almanac .header').fadeOut(333, 'linear');
                setTimeout(() => {
                    $('.almanac').fadeOut(0);
                    slideCallBack();
                }, 333);
            }, slideLength - 333);
        },
        radarDoppler() {
            audioPlayer.playRadar();
            $('.radar').fadeIn(0);
            $('#regradar').fadeIn(0);
            $('#regmap').fadeIn(0);
            regmap.resize();
            $('.radar .header').fadeIn(167);
            startRadar(regradar);

            setTimeout(() => {
                $('.radar .header').fadeOut(0);
                clearInterval(radarAnimation);
                $('.radar').fadeOut(0);
                $('#regradar').fadeOut(0);
                $('#regmap').fadeOut(0);
                slideCallBack();
            }, slideLength);
        },
        localDoppler() {
            $('.radar').fadeIn(0);
            $('#locradar').fadeIn(0);
            $('#locmap').fadeIn(0);
            locmap.resize();
            $('.radar .header').text("Local Doppler");
            $('.radar .header').fadeIn(167);
            startRadar(locradar);

            setTimeout(() => {
                clearInterval(radarAnimation);
                $('.radar').fadeOut(0);
                slideCallBack();
            }, slideLength);
        },
        daypartForecast() {
            //highest = 202, lowest = 78
            $('.daypart-forecast').fadeIn(0);
            $('.daypart-forecast .header').fadeIn(167, 'linear');
            $('.daypart-forecast .box').fadeIn(133, 'linear');
            $('.daypart-forecast .city-name').text(locationConfig.mainCity.extraname.toUpperCase());
            $('.daypart-forecast .forecast-period').text(weatherInfo.daypartForecast.dayName);
            var dpDivs = ["i", "ii", "iii", "iv"];
            var barTemps = [
                weatherInfo.daypartForecast.times[0].temp,
                weatherInfo.daypartForecast.times[1].temp,
                weatherInfo.daypartForecast.times[2].temp,
                weatherInfo.daypartForecast.times[3].temp,
            ]
            var barMin = Math.min(...barTemps);
            var barMax = Math.max(...barTemps);
            var barRange = barMax - barMin;
            var barminHeight = 78;
            for (let i = 0; i < 4; i++) {
                $(`.daypart-forecast .hour.${dpDivs[i]} .time`).text(weatherInfo.daypartForecast.times[i].name);
                getIcon($(`.daypart-forecast .hour.${dpDivs[i]} .icon`), weatherInfo.daypartForecast.times[i].icon, "forecast", "large");
                $(`.daypart-forecast .hour.${dpDivs[i]} .cond`).text(weatherInfo.daypartForecast.times[i].cond);
                $(`.daypart-forecast .hour.${dpDivs[i]} .wind`).text(weatherInfo.daypartForecast.times[i].wind);
                $(`.daypart-forecast .hour.${dpDivs[i]} .bar .temp`).text(weatherInfo.daypartForecast.times[i].temp);
                let barHgtMultipler = barRange == 0 ? 202 : ((weatherInfo.daypartForecast.times[i].temp - barMin) / barRange) * 124;
                let dpDiv = dpDivs[i];
                setTimeout(() => {
                    $(`.daypart-forecast .hour.${dpDiv} .bar`).animate({ "height": `${(barHgtMultipler + barminHeight)}px` }, 167, 'linear', function () {
                        $(`.daypart-forecast .hour.${dpDiv} .bar .temp`).fadeIn(133)
                    });
                }, 267 * (i + 1));
            }

            setTimeout(() => {
                $('.daypart-forecast .header').fadeOut(167, 'linear');
                $('.daypart-forecast .box').fadeOut(167, 'linear');
                setTimeout(() => {
                    $('.daypart-forecast').fadeOut(0);
                    slideCallBack();
                }, 167);
            }, slideLength - 167);
        },
        bulletin() {
            var text = "";
            for (var i = 0; i < (weatherInfo.bulletin.alerts.length > 2 ? 2 : weatherInfo.bulletin.alerts.length); i++) {
                text = text + `<span>${weatherInfo.bulletin.alerts[i].desc}</span><br>`
            }
            $('.bulletin').fadeIn(0);
            $('.bulletin .alerts').empty();
            $('.bulletin .alerts').append(text);

            setTimeout(() => {
                $('.bulletin .header').fadeOut(167, 'linear');
                $('.bulletin .alerts').fadeOut(167, 'linear');
                setTimeout(() => {
                    $('.bulletin').fadeOut(0);
                    slideCallBack();
                }, 167);
            }, slideLength - 167);
        },
        mapTest() {
            $('.map').fadeIn(0);
            var mapDivs = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]
            for (let i = 0; i < locationConfig.regionalMap.length; i++) {
                $(`.map-cities .city.${mapDivs[i]}`).fadeIn(0);
                $(`.map-cities .city.${mapDivs[i]} .city-name`).text(locationConfig.regionalMap[i].name)
                $(`.map-cities .city.${mapDivs[i]}`).css({ left: locationConfig.regionalMap[i].left, top: locationConfig.regionalMap[i].top })
            }
        },
        mapCurrent() {
            $('.map').fadeIn(0);
            $('.map .header').text("Now");
            $('.map .header').fadeIn(167, 'linear');
            var mapDivs = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]
            for (let i = 0; i < locationConfig.regionalMap.length; i++) {
                $(`.map-cities .city.${mapDivs[i]}`).fadeIn(0);
                $(`.map-cities .city.${mapDivs[i]} .city-name`).text(locationConfig.regionalMap[i].name);
                $(`.map-cities .city.${mapDivs[i]}`).css({ left: locationConfig.regionalMap[i].left, top: locationConfig.regionalMap[i].top });
                $(`.map-cities .city.${mapDivs[i]} .temp`).text(weatherInfo.map.mapCities[i].current.temp);
                getIcon($(`.map-cities .city.${mapDivs[i]} .icon`), weatherInfo.map.mapCities[i].current.icon, "current", "large");
            }

            setTimeout(() => {
                $('.map .header').fadeOut(167, 'linear');
                setTimeout(() => {
                    $('.map').fadeOut(0);
                    slideCallBack();
                }, 167);
            }, slideLength - 167);
        },
        mapForecast(midx) {
            if (midx === undefined) { midx = 0; }
            $('.map').fadeIn(0);
            $('.map .header').text(`${weatherInfo.map.days[midx]}'s Forecast`);
            $('.map .header').fadeIn(167, 'linear');
            var mapDivs = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]
            for (let i = 0; i < locationConfig.regionalMap.length; i++) {
                $(`.map-cities .city.${mapDivs[i]}`).fadeIn((midx == 0 ? 0 : 167), 'linear');
                $(`.map-cities .city.${mapDivs[i]} .city-name`).text(locationConfig.regionalMap[i].name);
                $(`.map-cities .city.${mapDivs[i]}`).css({ left: locationConfig.regionalMap[i].left, top: locationConfig.regionalMap[i].top });
                $(`.map-cities .city.${mapDivs[i]} .temp`).text(weatherInfo.map.mapCities[i].forecasts[midx].temp);
                getIcon($(`.map-cities .city.${mapDivs[i]} .icon`), weatherInfo.map.mapCities[i].forecasts[midx].icon, "forecast", "large");
            }

            setTimeout(() => {
                if (slideFlavor.order[idx].slides == undefined) {
                    $('.map .header').fadeOut(167, 'linear');
                    setTimeout(() => {
                        $('.map').fadeOut(0);
                        slideCallBack();
                    }, 167);
                } else {
                    if (midx >= slideFlavor.order[idx].slides - 1) {
                        $('.map .header').fadeOut(167, 'linear');
                        setTimeout(() => {
                            $('.map').fadeOut(0);
                            slideCallBack();
                        }, 167);
                    } else {
                        $('.map .header').fadeOut(167, 'linear');
                        for (let i = 0; i < locationConfig.regionalMap.length; i++) {
                            $(`.map-cities .city.${mapDivs[i]}`).fadeOut(167);
                        }
                        setTimeout(() => {
                            $('.map').fadeOut(0);
                            slidePrograms.mapForecast(midx + 1);
                        }, 167);
                    }
                }
            }, slideLength);
        },
        //last few slides to deal with
        outdoorActivity(){

        },
        almanacMoons(){

        },
        trafficReport(){
            $(".traffic-report").fadeIn(0);
        },
        trafficOverview(){

        }
    } //end of slidePrograms
    if (idx >= slideFlavor.order.length) {
    }
    if (nidx >= slideFlavor.order.length) {
        nidx = 0;
        slideCallBack = function () {
            $("#main").fadeOut(0);
            audioPlayer.stopPlaying();
            audioPlayer = null;
            //URL.revokeObjectURL(songURL);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }
    currentProgram = slidePrograms[slideFlavor.order[idx].function]
    currentDiv = slideDivs[slideFlavor.order[idx].function]
    nextProgram = slidePrograms[slideFlavor.order[nidx].function]
    nextDiv = slideDivs[slideFlavor.order[nidx].function]
    currentProgram();

    function slideCallBack() {
        idx++;
        nidx++;
        showSlides();
    };
}//END OF showSlides() FUNCTION
