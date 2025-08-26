var vocallocalPath = '/vocallocal/';
function vocallocalCC(){
    var narrationArr = [];

    var condPath = vocallocalPath + 'cond/';
    var tempPath = vocallocalPath + 'temp/';

    //CC INTRO
    narrationArr.push(vocallocalPath + `CC_INTRO${(Math.floor(Math.random() * 2) + 1)}.wav`);

    //TEMP
    var tempe = weatherInfo.currentConditions.temp.toString().replace('-','M');
    var temper = tempPath + tempe + ".wav"
    narrationArr.push(temper)

    //COND
    var condi = codeToCurrent[weatherInfo.currentConditions.icon].narration;
    var condit = condPath + condi + '.wav'
    narrationArr.push(condit)

    //failsafe
    if(temper === '/vocallocal/temp/.wav' || condit === '/vocallocal/cond/.wav'){
        narrationArr = ['/vocallocal/narrations/Your_current_conditions.mp3'];
        console.error('Could not find vocallocal files, reverted to normal')
    }

    return narrationArr;
}

function vocallocalLF(idx, durr){
    var longformDuration = 0;
    var dayAudio, longformAudio, highlowAudio, shortcastAudio, qualifierAudio, precipAudio, windDirAudio, windSpeedAudio;
    var precipDuration, windDuration, pushPrecip, pushWind;
    //start with the day
    var lfDay = weatherInfo.dayDesc.days[idx].name.replace(" ","_");
    dayAudio = vocallocalPath + 'dayname/' + lfDay + '.wav';
    //get day name file

    var lfNar = weatherInfo.dayDesc.days[idx].desc.split(". ");
    //console.log(lfNar);
    //splitting all sentences into one array
    //it will be a lot easier to get the sentences like "low x" but a pain in the ass to get the longform forecasts n stuff
    //WAIT I UNDERSTAND IT NOW
    for(let sc in shortcast){
        if(weatherInfo.dayDesc.days[idx].iconCode == parseInt(shortcast[sc].name)){
            shortcastAudio = vocallocalPath + 'shortcast/' + shortcast[sc].name + '.wav';
            longformDuration += shortcast[sc].duration;
            break;
        }
    }
    for(let i = 0; i < lfNar.length; i++){
        if(longform[lfNar[i]]){
            longformAudio = vocallocalPath + 'longform/' + longform[lfNar[i]].name + '.wav';
            longformDuration += longform[lfNar[i]].duration;
            continue;
        }
        if(highlow[lfNar[i]]){
            highlowAudio = vocallocalPath + 'highlow/' + highlow[lfNar[i]].name + '.wav';
            longformDuration += highlow[lfNar[i]].duration;
            continue;
        }
        //we'll worry about qualifiers later
        // if(qualifiers[lfNar[i]]){
        //     qualifierAudio = vocallocalPath + 'qualifiers/' + qualifiers[lfNar[i]].name + '.wav';
        //     continue;
        // }
        if(precip[lfNar[i]]){
            precipAudio = vocallocalPath + 'precip/' + precip[lfNar[i]].name + '.wav';
            precipDuration = precip[lfNar[i]].duration;
        }
        if(lfNar[i].startsWith("Winds")){
            if(lfNar[i] === 'Winds light and variable.' || lfNar[i] === 'Winds light and variable'){
                windDirAudio = vocallocalPath + 'winds/W9902.wav';
                windDuration = winds[lfNar[i]].duration;
            }else{
                var windArr = lfNar[i].split(" at ");
                //direction
                var windDir = windArr[0].replace("Winds ","W_");
                //speed
                var windSpeed = "AT_" + windArr[1].replace(" to ","_").replace(" mph","").replace(".","").replaceAll("<span>", "").replaceAll("</span>", "");

                windDirAudio = (vocallocalPath + 'winds/' + windDir + '.wav');
                windSpeedAudio = (vocallocalPath + 'winds/' + windSpeed + '.wav');
                windDuration = winds[windArr[0]].duration + winds[windArr[1]].duration;
            }
            continue;
        }
    }

    var narrationArr = [dayAudio];
    if(longformAudio == undefined){
        narrationArr.push(shortcastAudio);
    }else{
        narrationArr.push(longformAudio);
    }
    narrationArr.push(highlowAudio);
    //optional additions
    if(precipAudio != undefined){
        if(longformDuration + precipDuration <= durr - 1000){
            longformDuration += precipDuration;
            pushPrecip = true;
        }
    }
    if(longformDuration + windDuration <= durr - 1000){
        longformDuration += windDuration;
        pushWind = true;
    }else{
        pushWind = false;
    }
    if(pushWind == true){
        narrationArr.push(windDirAudio);
        if(windSpeedAudio != undefined) narrationArr.push(windSpeedAudio);
    }
    if(pushPrecip == true){narrationArr.push(precipAudio)}
    //console.log([dayAudio, longformAudio, shortcastAudio, highlowAudio])
    return narrationArr;
}