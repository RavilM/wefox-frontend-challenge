import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import { Card } from '../../components/Card';
import { AddPost } from '../AddPost';
import { TProps } from './types';

const position: LatLngExpression = [51.505, -0.09];

function MyComponent({ isAddMode }: { isAddMode: boolean }) {
  const map = useMapEvents({
    click: (event) => {
      if (!isAddMode) return;

      console.log(event);
    },
  });
  return null;
}

export const Map: FC<TProps> = ({ data }) => {
  const [isAddMode, setIsAddMode] = useState(false);

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

  const handleClickAdd = useCallback(() => {
    setIsAddMode((prevState) => !prevState);
  }, []);

  const buttonText = useMemo(
    () => (isAddMode ? 'Cancel add new post' : 'Add new post'),
    [isAddMode],
  );

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={3}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers}
        <MyComponent isAddMode={isAddMode} />
      </MapContainer>
      <AddPost isMap />
    </div>
  );
};
