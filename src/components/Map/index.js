import React from 'react'

const isClient = typeof window !== 'undefined'

let Map, TileLayer, Marker
if (isClient) {
  const reactLeaflet = require('react-leaflet')
  Map = reactLeaflet.Map
  TileLayer = reactLeaflet.TileLayer
  Marker = reactLeaflet.Marker

  const L = require('leaflet')

  L.Icon.Default.imagePath = '.'

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });
}

const access_token = 'pk.eyJ1IjoiYWxleG92aWVkbzk5OSIsImEiOiJjaXlicjI3NXUwMDBnMnFzY2psNGZzMTluIn0.E6mDIr_E32ZWpy_MIYujdw';
// const tiles = 'https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=';
const tiles = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=';

const coordinates = [25.865927, -80.3197427];
const zoom = 15;

export default function RutaNMap() {
  return (
    <div>
      {
        isClient &&
        <Map center={coordinates} zoom={zoom} className="vh-50" zoomControl={true}>
          <TileLayer
            url={`${tiles}${access_token}`}
          />
          <Marker position={coordinates} />
        </Map>
      }
    </div>
  );
}
