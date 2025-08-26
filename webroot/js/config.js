var api_key = 'e1f10a1e78da46f5b10a1e78da96f525';
var map_key = 'pk.eyJ1Ijoic3RpbGxub3RicmFuZG9uIiwiYSI6ImNtY28xbjh0ZTBkbnMya29lMTZka21jNzkifQ.i-6ROmH9NyOfrtpLvWuJ2w';
var traf_key = 'cJG5MpqFVuqA6VfHYFcDxz2NoQOmmBVG';

var appearanceSettings = {
    marqueeAd: [
        "You don't want any monkey business going on when getting an oil change. That's why you come to Grease Monkey Auto. We offer oil changes, car washes, and much more. Log onto greasemonkeyauto.com and schedule your appointment.",
        "Mark's Pizzeria prides itself on bringing you the freshest ingredients and the most professional service in Western New York for over 40 years. Log on to markspizzeria.com to get coupons and save big on pizza, wings, and more! We'll treat you like family at Mark's; Simply the best in your neighborhood!",
        "If you are interested in TWC, EAS, or anything weather/tech related, join Mist Weather Media! Visit mistwx.com/discord right now!",
        "Also check out other sims on weatherstar.dev, your place for Local on the 8s simulations!"
    ],
    localWeatherID: "XXXXX", //Keep it at XXXXX to generate a random local weather ID. Otherwise, put a 5 digit number.
    aspectRatio: 3/2, //For native resolution, use 3/2. For TV native resolution, use 4/3. There are no other aspect ratio options. Default is 3/2. 
    // ^ 4/3 is not yet supported.
    iconSet: "2007", //I highly recommend you do not change this value unless you are more experienced. If you do, the sim will look for a file called icons(value)sprite.png.
    ldlType: 'both', //what you want to see on ldl. 'observations' = only observations / 'both' = both / if anything else is put here, the sim will default to only observations
    startupTime: 4000, //How long you want to wait for it to start up.
    graphicsPackage: 2008, //the package for graphics. 2007 will have blue text, while 2008 will have black text.
    version: "1.0"
}

var slideSettings = {
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

var audioSettings = {
    enableMusic: true, //I understand if you want to play music from a different tab, but that's the only reason it should be false
    shuffle: true, //Self-explanatory. Default is true.
    randomStart: true, //Also should be self-explanatory. Default is true.
    narrations: true, //Also should be self-explanatory. Default is true.
    vocallocal: false, //Only affects local forecast vocal local, changes the phrase from naming the exact date to just "your local forecast"
    order: [
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
    ],
    offset: 0 //How far in you want the song to start. An offset of 10 will start the song 10 seconds in.
}

var locationSettings = {/*This is what you can edit, anything under the lcationSettings object
    you can change it if you want but why would you when there's a settings panel to change this stuff.*/
    mainCity: {
        autoFind: true, //set to false if you want to manually set the location
        displayname:"",//set this to whatever you want the main location's name to be
        type:"",//choose the following types from below:
        //geocode -- (coordinates)
        //postalKey -- (zip code)
        //iataCode -- (IATA airport code)
        //icaoCode -- (ICAO airport code)
        //placeid -- (PLace ID)
        //canonicalCityId -- (Canonical City ID)
        //locud -- (Location ID)
        val:"",//the value that goes with the type. Like if you select iataCode, the val would be JFK if you want JFK Airport. 
        //===NOTES===
        //if you use geocode (coordinates), you must use the format "latitude,longitude" for the val
        //if you use postalKey (zipcode), you must put ":US" after the zip code. I may be wrong about this but to be safe put it after the code.
    },
    eightCities: {
        autoFind: true,
        //same guidelines as mainCity location settings as the eight nearby locations.
        cities:[//if you use less than 8 locations, please delete the unused cities objects.
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
        ]
    },
    mapCities: {
        autoFind: true,
        mapPosition: {left: "", top: ""}, //center of the map, leave blank if you are using autoFind. Example: {left: "-3030px", top: "600px"}
        cities: [
            {
                name: "",
                type: "",
                val: "",
                pos: {left: "", top: ""} //where the city will be positioned. Example: {left: "414px", top: "313px"}
            },
        ]
    }
}