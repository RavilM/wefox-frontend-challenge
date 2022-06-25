import React, { FC, memo, useCallback, useState } from 'react';
import { TProps } from './types';
import './styles.css';

export const Card: FC<TProps> = memo<TProps>(
  ({ title, content, image_url, created_at, updated_at, long, lat }) => {
    const [hide, setHide] = useState(true);

    const handleCheck = useCallback(() => {
      setHide((prevState) => !prevState);
    }, []);

    return (
      <>
        <h3>{title}</h3>
        <label>
          Hide additional fields
          <input checked={hide} onChange={handleCheck} type="checkbox" />
        </label>
        <br />
        <span>{content}</span>
        <div className="image-container">
          {image_url && (
            <img alt={title} className="card-image" src={image_url} />
          )}
        </div>
        {!hide && (
          <>
            <span>Latitude: {lat}</span>
            <br />
            <span>Longitude: {long}</span>
            <br />
            <span>{`Created data: ${new Date(
              created_at,
            ).toLocaleString()}`}</span>
            <br />
            <span>{`Updated data: ${new Date(
              updated_at,
            ).toLocaleString()}`}</span>
            <br />
          </>
        )}
      </>
    );
  },
);
