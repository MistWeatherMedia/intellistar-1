var regradar, locradar, radarsat, 
  regoutlines, locoutlines, regoutlinestrans, locoutlinestrans,
  regmap, locmap,
  regtimestamps, loctimestamps, sattimestamps,
  radarAnimation;
mapboxgl.accessToken = "";
var mapStyle = "mapbox://styles/colster/cmiccqynn00as01s4bt6501il";

async function createMaps() {
  mapboxgl.accessToken = map_key;
  var radarCoords = [
    !locationConfig.mainCity.lon || !locationConfig.mainCity.lat ? 0 : locationConfig.mainCity.lon,
    !locationConfig.mainCity.lat || !locationConfig.mainCity.lon ? 0 : locationConfig.mainCity.lat
  ]
  regradar = new mapboxgl.Map({
    container: "regradar",
    projection: "mercator",
    style: mapStyle,
    zoom: 7.7,
    center: radarCoords
  });

  regradar.on("style.load", () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      regradar.setLayoutProperty('background', 'visibility', 'none');//ocean
      regradar.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
      regradar.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
      regradar.setLayoutProperty('alaska', 'visibility', 'none');//alaska
      regradar.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
      regradar.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      regradar.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
      regradar.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
      regradar.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
      regradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
      regradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
      regradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      regradar.setLayoutProperty('place-label', 'visibility', 'none');
      regradar.setLayoutProperty('place-label copy', 'visibility', 'none');
      regradar.setLayoutProperty('airport-label', 'visibility', 'none');
      regradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      regradar.setLayoutProperty('country-boundaries', 'visibility', 'none');
    }
  });

  regmap = new mapboxgl.Map({
    container: "regmap",
    projection: "mercator",
    style: mapStyle,
    zoom: 7.7,
    center: radarCoords
  });

  regmap.on("style.load", () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      regmap.setLayoutProperty('background', 'visibility', 'visible');//ocean
      regmap.setLayoutProperty('hawaii local', 'visibility', 'visible');//alaska mercator
      regmap.setLayoutProperty('hawaii regional', 'visibility', 'visible');//hawaii lambert
      regmap.setLayoutProperty('alaska', 'visibility', 'visible');//alaska
      regmap.setLayoutProperty('conus merc', 'visibility', 'visible');//conus mercator
      regmap.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      regmap.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
      regmap.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
      regmap.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
      regmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
      regmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
      regmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      regmap.setLayoutProperty('place-label', 'visibility', 'none');
      regmap.setLayoutProperty('place-label copy', 'visibility', 'none');
      regmap.setLayoutProperty('airport-label', 'visibility', 'none');
      regmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      regmap.setLayoutProperty('country-boundaries', 'visibility', 'none');
    }
  });

  regoutlines = new mapboxgl.Map({
    container: "regoutlines",
    projection: "mercator",
    style: mapStyle,
    zoom: 7.7,
    center: radarCoords
  });
  regoutlines.on('load', () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      regoutlines.setLayoutProperty('background', 'visibility', 'none');//ocean
      regoutlines.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
      regoutlines.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
      regoutlines.setLayoutProperty('alaska', 'visibility', 'none');//alaska
      regoutlines.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
      regoutlines.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      regoutlines.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'visible');//county lines
      regoutlines.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
      regoutlines.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
      regoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'visible');//black roads
      regoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'visible');//gray roads
      regoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      regoutlines.setLayoutProperty('place-label', 'visibility', 'none');
      regoutlines.setLayoutProperty('place-label copy', 'visibility', 'none');
      regoutlines.setLayoutProperty('airport-label', 'visibility', 'none');
      regoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      regoutlines.setLayoutProperty('country-boundaries', 'visibility', 'visible');
      
      regoutlines.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 3)
      regoutlines.setPaintProperty('i2-county-lines-conus-ak-hi-81h5x4', "line-width", 3)
      regoutlines.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 7)
      regoutlines.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3', "line-width", 16)
      regoutlines.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', "line-width", 6)
    }
  })

  regoutlinestrans = new mapboxgl.Map({
    container: "regoutlinestrans",
    projection: "mercator",
    style: mapStyle,
    zoom: 7.7,
    center: radarCoords
  });
  regoutlinestrans.on('load', () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      regoutlinestrans.setLayoutProperty('background', 'visibility', 'none');//ocean
      regoutlinestrans.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
      regoutlinestrans.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
      regoutlinestrans.setLayoutProperty('alaska', 'visibility', 'none');//alaska
      regoutlinestrans.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
      regoutlinestrans.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      regoutlinestrans.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'visible');//county lines
      regoutlinestrans.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
      regoutlinestrans.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
      regoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
      regoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'visible');//gray roads
      regoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      regoutlinestrans.setLayoutProperty('place-label', 'visibility', 'none');
      regoutlinestrans.setLayoutProperty('place-label copy', 'visibility', 'none');
      regoutlinestrans.setLayoutProperty('airport-label', 'visibility', 'none');
      regoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      regoutlinestrans.setLayoutProperty('country-boundaries', 'visibility', 'visible');

      regoutlinestrans.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 3)
      regoutlinestrans.setPaintProperty('i2-county-lines-conus-ak-hi-81h5x4', "line-width", 3)
      regoutlinestrans.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 7)
      regoutlinestrans.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', "line-width", 6)
    }
  })

  //now the same for local
  locradar = new mapboxgl.Map({
    container: "locradar",
    projection: "mercator",
    style: mapStyle,
    zoom: 8.65,
    center: radarCoords
  });

  locradar.on("style.load", () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      locradar.setLayoutProperty('background', 'visibility', 'none');//ocean
      locradar.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
      locradar.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
      locradar.setLayoutProperty('alaska', 'visibility', 'none');//alaska
      locradar.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
      locradar.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      locradar.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
      locradar.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
      locradar.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
      locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
      locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
      locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      locradar.setLayoutProperty('place-label', 'visibility', 'none');
      locradar.setLayoutProperty('place-label copy', 'visibility', 'none');
      locradar.setLayoutProperty('airport-label', 'visibility', 'none');
      locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      locradar.setLayoutProperty('country-boundaries', 'visibility', 'none');
    }
  });

  locmap = new mapboxgl.Map({
    container: "locmap",
    projection: "mercator",
    style: mapStyle,
    zoom: 8.65,
    center: radarCoords
  });

  locmap.on("style.load", () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      locmap.setLayoutProperty('background', 'visibility', 'visible');//ocean
      locmap.setLayoutProperty('hawaii local', 'visibility', 'visible');//alaska mercator
      locmap.setLayoutProperty('hawaii regional', 'visibility', 'visible');//hawaii lambert
      locmap.setLayoutProperty('alaska', 'visibility', 'visible');//alaska
      locmap.setLayoutProperty('conus merc', 'visibility', 'visible');//conus mercator
      locmap.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      locmap.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
      locmap.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
      locmap.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
      locmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
      locmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
      locmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      locmap.setLayoutProperty('place-label', 'visibility', 'none');
      locmap.setLayoutProperty('place-label copy', 'visibility', 'none');
      locmap.setLayoutProperty('airport-label', 'visibility', 'none');
      locmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      locmap.setLayoutProperty('country-boundaries', 'visibility', 'none');
    }
  });

  locoutlines = new mapboxgl.Map({
    container: "locoutlines",
    projection: "mercator",
    style: mapStyle,
    zoom: 8.65,
    center: radarCoords
  });
  locoutlines.on('load', () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      locoutlines.setLayoutProperty('background', 'visibility', 'none');//ocean
      locoutlines.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
      locoutlines.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
      locoutlines.setLayoutProperty('alaska', 'visibility', 'none');//alaska
      locoutlines.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
      locoutlines.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      locoutlines.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'visible');//county lines
      locoutlines.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
      locoutlines.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
      locoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'visible');//black roads
      locoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'visible');//gray roads
      locoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      locoutlines.setLayoutProperty('place-label', 'visibility', 'none');
      locoutlines.setLayoutProperty('place-label copy', 'visibility', 'none');
      locoutlines.setLayoutProperty('airport-label', 'visibility', 'none');
      locoutlines.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      locoutlines.setLayoutProperty('country-boundaries', 'visibility', 'visible');
      
      locoutlines.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 3)
      locoutlines.setPaintProperty('i2-county-lines-conus-ak-hi-81h5x4', "line-width", 3)
      locoutlines.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 7)
      locoutlines.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3', "line-width", 16)
      locoutlines.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', "line-width", 6)
    }
  })

  locoutlinestrans = new mapboxgl.Map({
    container: "locoutlinestrans",
    projection: "mercator",
    style: mapStyle,
    zoom: 8.65,
    center: radarCoords
  });
  locoutlinestrans.on('load', () => {
    if(mapStyle == "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"){
      locoutlinestrans.setLayoutProperty('background', 'visibility', 'none');//ocean
      locoutlinestrans.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
      locoutlinestrans.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
      locoutlinestrans.setLayoutProperty('alaska', 'visibility', 'none');//alaska
      locoutlinestrans.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
      locoutlinestrans.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
      locoutlinestrans.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'visible');//county lines
      locoutlinestrans.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
      locoutlinestrans.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
      locoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
      locoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'visible');//gray roads
      locoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
      locoutlinestrans.setLayoutProperty('place-label', 'visibility', 'none');
      locoutlinestrans.setLayoutProperty('place-label copy', 'visibility', 'none');
      locoutlinestrans.setLayoutProperty('airport-label', 'visibility', 'none');
      locoutlinestrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
      locoutlinestrans.setLayoutProperty('country-boundaries', 'visibility', 'visible');

      locoutlinestrans.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 3)
      locoutlinestrans.setPaintProperty('i2-county-lines-conus-ak-hi-81h5x4', "line-width", 3)
      locoutlinestrans.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 7)
      locoutlinestrans.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', "line-width", 6)
    }
  })

  //one map for radsat since no drop shadow
  // radarsat = new mapboxgl.Map({
  //   container: "radarsat",
  //   projection: "mercator",
  //   style: {
  //     version: 8,
  //     sources: {
  //       "raster-tiles": {
  //         type: "raster",
  //         tiles: [
  //           "https://api.mapbox.com/styles/v1/goldbblazez/ckgc8lzdz4lzh19qt7q9wbbr9/tiles/{z}/{x}/{y}?access_token=" + map_key
  //         ],
  //         tileSize: 512,
  //       },
  //     },
  //     layers: [
  //       {
  //         id: "basemap",
  //         type: "raster",
  //         source: "raster-tiles",
  //         layout: { visibility: "visible" },
  //         minzoom: 0,
  //         maxzoom: 22,
  //         paint: {
  //           "raster-opacity": 0,
  //         },
  //       },
  //     ],
  //   },
  //   zoom: 4.5,
  //   center: radarCoords
  // });

  // radarsat.on("style.load", () => {
  //   radarsat.setFog({});
  // });
  setTimeout(async () => {
    await preloadRadars();
  }, 1000);
}

async function fetchRadarTimestamps(map, frameCount) {
  var timestamps = loctimestamps;
  timestamps = [];
  var mapType = map === radarsat ? "satrad" : "twcRadarMosaic";
  try {
    const response = await fetch(
      `https://api.weather.com/v3/TileServer/series/productSet/PPAcore?filter=${mapType}&apiKey=${api_key}`
    );
    const data = await response.json();

    if (mapType === "twcRadarMosaic" && !data.seriesInfo?.twcRadarMosaic) {
      console.error("No radar series info found.");
      return [];
    }

    return (sortedTS = data.seriesInfo.twcRadarMosaic.series
      .sort((a, b) => a.ts - b.ts)
      .map((item) => item.ts)
      .slice(-frameCount));
  } catch (error) {
    console.error("Failed to fetch radar timestamps:", error);
    return [];
  }
}

async function addRadarLayers(map, timestamps) {
  for (const timestamp of timestamps) {
    const sourceId = `radar_${timestamp}`;
    const layerId = `radarlayer_${timestamp}`;
    const mapType = map === radarsat ? "satrad" : "twcRadarMosaic";

    if (!map.getSource(sourceId)) {
      // Add raster source for the timestamp
      map.addSource(sourceId, {
        type: "raster",
        tiles: [
          `https://api.weather.com/v3/TileServer/tile/${mapType}?ts=${timestamp}&xyz={x}:{y}:{z}&apiKey=${api_key}`,
        ],
        tileSize: 512,
        minzoom: 5,
        maxzoom: 12,
      });
    }

    if (!map.getLayer(layerId)) {
      map.addLayer({
        id: layerId,
        type: "raster",
        source: sourceId,
        layout: { visibility: "none" },
        paint: {
          "raster-opacity": 1,
          "raster-fade-duration": 0,
          "raster-brightness-max": 0.9,
        },
      });
    }
  }
}

function animateRadar(map, timestamps) {
  clearInterval(radarAnimation);
  clearInterval(animationInterval);
  //let interval = (map === locradar) ? 70 : (map === regradar) ? 15 : 120;
  let interval = 83.333333333333333;
  const layerPrefix = "radarlayer_";
  let currentIndex = 0;

  if (timestamps == undefined) {
    if (map === locradar) timestamps = loctimestamps;
  }
  const validLayers = timestamps
    .map((ts) => `${layerPrefix}${ts}`)
    .filter((layerId) => map.getLayer(layerId));

  if (validLayers.length === 0) {
    console.error("No radar layers available for animation.");
    weatherInfo.radarUnavailable = true
    return;
  } else {
    weatherInfo.radarUnavailable = false
  }

  const setLayerVisibility = (layerId, visibility) => {
    if (map.getLayer(layerId)) {
      map.setLayoutProperty(layerId, "visibility", visibility);
    }
  };

  validLayers.forEach((layerId) => setLayerVisibility(layerId, "none"));
  setLayerVisibility(validLayers[0], "visible");

  var animationInterval = setInterval(() => {
    setLayerVisibility(validLayers[currentIndex], "none");
    currentIndex = (currentIndex + 1) % validLayers.length;
    setLayerVisibility(validLayers[currentIndex], "visible");
    if (currentIndex === validLayers.length - 1) {
      clearInterval(animationInterval);
    }
  }, interval);

  radarAnimation = setInterval(() => {
    animationInterval = setInterval(() => {
      setLayerVisibility(validLayers[currentIndex], "none");
      currentIndex = (currentIndex + 1) % validLayers.length;
      setLayerVisibility(validLayers[currentIndex], "visible");
      if (currentIndex === validLayers.length - 1) {
        clearInterval(animationInterval);
      }
    }, interval);
  }, interval * validLayers.length + 1000);
}

function cleanupOldRadarLayers(map, timestamps) {
  const layerPrefix = "radarlayer_";

  map
    .getStyle()
    .layers.filter((layer) => layer.id.startsWith(layerPrefix))
    .forEach((layer) => {
      const timestamp = layer.id.split("_")[1];
      if (!timestamps.includes(Number(timestamp))) {
        map.removeLayer(layer.id);
        map.removeSource(layer.source);
      }
    });
}
async function initializeRadar(map) {
  var timestamps = map === locradar ? loctimestamps : regtimestamps;
  //cleanupOldRadarLayers(map, timestamps);
  clearInterval(radarAnimation);
  if (map == locradar) {
    loctimestamps = await fetchRadarTimestamps(map, 36);
    await addRadarLayers(map, loctimestamps);
  } else if (map == regradar) {
    regtimestamps = await fetchRadarTimestamps(map, 36);
    await addRadarLayers(map, regtimestamps);
  }
  //const animation = animateRadar(map, timestamps)
  map.resize();
}

async function startRadar(map) {
  var timestamps = map === locradar ? loctimestamps : regtimestamps;
  // cleanupOldRadarLayers(map, timestamps)
  clearInterval(radarAnimation);
  // timestamps = await fetchRadarTimestamps(map)
  // await addRadarLayers(map, timestamps)
  const animation = animateRadar(map, timestamps);
  map.resize();
}
/*
async function startRadar(map) {
    //cleanupOldRadarLayers(map, timestamps)
    //clearInterval(radarAnimation)
    //await addRadarLayers(map, timestamps)
    //const animation = animateRadar(map, timestamps)
    map.resize()
}*/

//maybe use this later?
function stopRadar(map, timestamps) {
  const layerPrefix = "radarlayer_";
  //var timestamps = map === locradar ? loctimestamps : map === regradar ? regtimestamps : sattimestamps; //map is not defined, very smart move there jenson
  const validLayers = timestamps
    .map((ts) => `${layerPrefix}${ts}`)
    .filter((layerId) => map.getLayer(layerId));
  const setLayerVisibility = (layerId, visibility) => {
    if (map.getLayer(layerId)) {
      map.setLayoutProperty(layerId, "visibility", visibility);
    }
  };
  validLayers.forEach((layerId) => setLayerVisibility(layerId, "none"));
  clearInterval(radarAnimation);
}

function addRadarCities(){
  $(".reg-cities").empty();
  $(".reg-cities-trans").empty();
  $(".loc-cities").empty();
  $(".loc-cities-trans").empty();
  for(let i = 0; i < locationConfig.radarCities.regional.length; i++){
    $(".reg-cities").append(`
      <div class="radar-city ${numToWord(i)}" style="top: ${locationConfig.radarCities.regional[i].dotTopPos}px; left: ${locationConfig.radarCities.regional[i].dotLeftPos}px;">
        <div class="dot"></div>
        <div class="city-name" style="margin-top: ${locationConfig.radarCities.regional[i].nameTopMargin}px; margin-left: ${locationConfig.radarCities.regional[i].nameLeftMargin}px;">${locationConfig.radarCities.regional[i].locationName}</div>
      </div>`)
    $(".reg-cities-trans").append(`
      <div class="radar-city ${numToWord(i)}" style="top: ${locationConfig.radarCities.regional[i].dotTopPos}px; left: ${locationConfig.radarCities.regional[i].dotLeftPos}px;">
        <div class="dot-trans"></div>
        <div class="dot-outline"></div>
        <div class="city-name-trans" style="margin-top: ${locationConfig.radarCities.regional[i].nameTopMargin}px; margin-left: ${locationConfig.radarCities.regional[i].nameLeftMargin}px;">${locationConfig.radarCities.regional[i].locationName}</div>
      </div>`)
  }
  for(let i = 0; i < locationConfig.radarCities.local.length; i++){
    $(".loc-cities").append(`
      <div class="radar-city ${numToWord(i)}" style="top: ${locationConfig.radarCities.local[i].dotTopPos}px; left: ${locationConfig.radarCities.local[i].dotLeftPos}px;">
        <div class="dot"></div>
        <div class="city-name" style="margin-top: ${locationConfig.radarCities.local[i].nameTopMargin}px; margin-left: ${locationConfig.radarCities.local[i].nameLeftMargin}px;">${locationConfig.radarCities.local[i].locationName}</div>
      </div>`)
    $(".loc-cities-trans").append(`
      <div class="radar-city ${numToWord(i)}" style="top: ${locationConfig.radarCities.local[i].dotTopPos}px; left: ${locationConfig.radarCities.local[i].dotLeftPos}px;">
        <div class="dot-trans"></div>
        <div class="dot-outline"></div>
        <div class="city-name-trans" style="margin-top: ${locationConfig.radarCities.local[i].nameTopMargin}px; margin-left: ${locationConfig.radarCities.local[i].nameLeftMargin}px;">${locationConfig.radarCities.local[i].locationName}</div>
      </div>`)
  }
}

async function preloadRadars(){
  await initializeRadar(regradar);
  await initializeRadar(locradar);
  $('.radar').fadeIn(0);
  $('#regradar').fadeIn(0);
  $('#regmap').fadeIn(0);
  $('#regoutlines').fadeIn(0);
  $('#regoutlinestrans').fadeIn(0);
  $('#locradar').fadeIn(0);
  $('#locmap').fadeIn(0);
  $('#locoutlines').fadeIn(0);
  $('#locoutlinestrans').fadeIn(0);
  locmap.resize();
  locradar.resize();
  locoutlines.resize();
  locoutlinestrans.resize();
  regmap.resize();
  regradar.resize();
  regoutlines.resize();
  regoutlinestrans.resize();
  setTimeout(() => {
    $('.radar').fadeOut(0);
    $('#regradar').fadeOut(0);
    $('#regmap').fadeOut(0);
    $('#regoutlines').fadeOut(0);
    $('#regoutlinestrans').fadeOut(0);
    $('#locradar').fadeOut(0);
    $('#locmap').fadeOut(0);
    $('#locoutlines').fadeOut(0);
    $('#locoutlinestrans').fadeOut(0);
  }, 2000);
}