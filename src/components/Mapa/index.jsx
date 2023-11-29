'use client'

import './index.css'
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup,  } from 'react-leaflet'

import Leaflet from 'leaflet';
import { locations } from './locations'

export default function MyMap () {
  return (
    <div className="map-container">
    <MapContainer  center={[-3.0700, -60.0161]} zoom={13} scrollWheelZoom={true} style={{ width: '95%', height: '58vh' }} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((L) => (
        <Marker key={L.address} position={[L.lat, L.lng]} icon={Leaflet.divIcon({ className: `${L.icon}LeafletIcon`, iconSize: [30, 30] })}>
          <Popup>
            <div className='popupWrapper'>
              <span className='popupTitle'>{L.title}</span>
              <p className='popupAddress'>{L.address}</p>
              <p className='popupTime'>{L.time}</p>
            </div>
          </Popup>
        </Marker>)
      )}
    </MapContainer>
    </div>
  )
};
