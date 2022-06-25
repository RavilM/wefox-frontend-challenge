import React, { FC, useMemo } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import { Card } from '../../components/Card';
import { TProps } from './types';

const position: LatLngExpression = [51.505, -0.09];

export const Map: FC<TProps> = ({ data }) => {
  const renderMarkers = useMemo(
    () =>
      data.map(
        ({ lat, long, content, image_url, title, created_at, updated_at }) => {
          if (!lat || !long) return null;

          return (
            <Marker position={[+lat, +long]}>
              <Popup>
                <Card
                  content={content}
                  created_at={created_at}
                  image_url={image_url}
                  lat={lat}
                  long={long}
                  title={title}
                  updated_at={updated_at}
                />
              </Popup>
            </Marker>
          );
        },
      ),
    [data],
  );

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={3}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers}
      </MapContainer>
    </div>
  );
};
