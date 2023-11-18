/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';




function Maps() {
  useEffect(() => {
    const map = L.map('map').setView([47 + 18/60 + 31.28/3600, 5 + 3/60 + 9.35/3600], 11.2);

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

    var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
    var imageBounds = [[47 + 24/60 + 29.99/3600, 4 + 53/60 + 16.40/3600], [47 + 12/60 + 31.71/3600, 5 + 13/60 + 0.11/3600]]; // Les coordonnées délimitant l'image
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    
    





  }, []);
      
   

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
}

export default Maps;