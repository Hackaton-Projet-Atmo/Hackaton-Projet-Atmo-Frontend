/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as GeoTIFF from 'geotiff';
import plotty from 'plotty';




function Maps() {


async function addGeoTiffLayer(url, map) {
  // Fetch the GeoTIFF data
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();

  // Parse the GeoTIFF data
  const tiff = await GeoTIFF.parse(arrayBuffer);
  const image = await tiff.getImage();
  const rasters = await image.readRasters();

  // Create a plot using plotty
  const plot = new plotty.plot({
    data: rasters[0],
    width: image.getWidth(),
    height: image.getHeight(),
    domain: [0, 255],
    colorScale: 'viridis',
  });

  // Render the plot to a data URL
  const imageUrl = plot.render();

  // Define the bounds of the image overlay
  const imageBounds = [[51.49, -0.15], [51.51, -0.06]];

  // Add the image overlay to the map
  L.imageOverlay(imageUrl, imageBounds).addTo(map);
}

  useEffect(() => {
    const map = L.map('map').setView([47.3220, 5.0415], 12);
    addGeoTiffLayer('./output.png', map);

    const fontAwesomeIcon = L.divIcon({
        html: '<i class="fa fa-map-marker fa-4x" style="color: #db0925"></i>',
        className: 'myDivIcon',
        
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);


    // Add a marker to the map
    L.marker([47.35149885949109, 4.998679339135277 ], {icon: fontAwesomeIcon}).addTo(map)
    .bindPopup('DAIX')
    .openPopup();

    L.marker([47.30747259581213, 5.069857261308844 ], {icon: fontAwesomeIcon}).addTo(map)
    .bindPopup('PREJOCES')
    .openPopup();
    

    L.marker([47.3260845998421, 5.041723661691503 ], {icon: fontAwesomeIcon}).addTo(map)
    .bindPopup('TREMOUILLE')
    .openPopup();
    

    L.marker([47.35307504238675, 5.067324174661655 ], {icon: fontAwesomeIcon}).addTo(map)
    .bindPopup('ARDENNES')
    .openPopup();

    // Chargez votre fichier GeoTIFF avec geotiff.js
var url = 'https://res.cloudinary.com/dbqzzf5xt/image/upload/v1700326526/BFC_dijon_atmo_14112023_jm1_mean_zyooqv.tiff';

fetch(url)
  .then(response => response.arrayBuffer())
  .then(data => GeoTIFF.fromArrayBuffer(data))
  .then(geotiff => geotiff.getImage())
  .then(image => {
    // Obtenez les données raster de l'image GeoTIFF
    var rasterData = image.readRasters({ samples: [0, 1, 2] });

    // Créez une couche d'image Leaflet avec les données raster
    L.imageOverlay(rasterData[0], image.getBoundingBox()).addTo(map);
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier GeoTIFF :', error);
  });
    
    





  }, []);
      
   

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
}

export default Maps;