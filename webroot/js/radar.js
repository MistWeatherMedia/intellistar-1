var regradar, locradar, radarsat,
  regmap, locmap,
  regtimestamps, loctimestamps, sattimestamps,
  radarAnimation;
mapboxgl.accessToken = map_key;

function createMaps() {
  var radarCoords = [
    !locationConfig.mainCity.lon || !locationConfig.mainCity.lat ? 0 : locationConfig.mainCity.lon,
    !locationConfig.mainCity.lat || !locationConfig.mainCity.lon ? 0 : locationConfig.mainCity.lat
  ]
  regradar = new mapboxgl.Map({
    container: "regradar",
    projection: "mercator",
    style: {
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
            "raster-opacity": 0,
          },
        },
      ],
    },
    zoom: 7.3,
    center: radarCoords
  });

  regradar.on("style.load", () => {
    regradar.setFog({});
  });

  regmap = new mapboxgl.Map({
    container: "regmap",
    projection: "mercator",
    style: {
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
    },
    zoom: 7.3,
    center: radarCoords
  });

  regmap.on("style.load", () => {
    regmap.setFog({});
  });

  //now the same for local
  locradar = new mapboxgl.Map({
    container: "locradar",
    projection: "mercator",
    style: {
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
            "raster-opacity": 0,
          },
        },
      ],
    },
    zoom: 8.5,
    center: radarCoords
  });

  locradar.on("style.load", () => {
    locradar.setFog({});
  });

  locmap = new mapboxgl.Map({
    container: "locmap",
    projection: "mercator",
    style: {
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
    },
    zoom: 8.5,
    center: radarCoords
  });

  locmap.on("style.load", () => {
    locmap.setFog({});
  });

  //one map for radsat since no drop shadow
  radarsat = new mapboxgl.Map({
    container: "radarsat",
    projection: "mercator",
    style: {
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
            "raster-opacity": 0,
          },
        },
      ],
    },
    zoom: 4.5,
    center: radarCoords
  });

  radarsat.on("style.load", () => {
    radarsat.setFog({});
  });
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
          "raster-opacity": 0.8,
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
function stopRadar() {
  //var timestamps = map === locradar ? loctimestamps : map === regradar ? regtimestamps : sattimestamps; //map is not defined, very smart move there jenson
  timestamps = [];
  clearInterval(radarAnimation);
}

var trfMap
function initTrafficMap() {
  trfMap = tt.map({
    key: traf_key,
    container: 'trafmap',
    center: [systemSettings.traffic.lon, systemSettings.traffic.lat],
    doubleClickZoom: false,
    scrollZoom: false,
    dragPan: false,
    boxZoom: false,
    dragRotate: false,
    touchZoomRotate: false,
    touchPitch: false,
    pitchWithRotate: false,
    zoom: 9.4,
    style: "https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAQW1IV1hMWktoeTllNUJYUjtmZTAyMzAwYy1iMjMzLTQ3NDktOTBiMC1mOGEyZGNhOWM5ZWM=.json?key=" + traf_key,
    stylesVisibility: {
        trafficFlow: true
    },
  });
}