import React, { FC, memo } from 'react';
import { Loader } from '../Loader';
import { TProps } from './types';
import './styles.css';

export const Container: FC<TProps> = memo<TProps>(({ children, isLoading }) => {
  return (
    <div className="container">
      <Loader isLoading={isLoading}>{children}</Loader>
    </div>
  );
});
