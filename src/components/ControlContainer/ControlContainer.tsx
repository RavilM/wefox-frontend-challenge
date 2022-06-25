import React, { FC, memo } from 'react';
import { TProps } from './types';
import './styles.css';

export const ControlContainer: FC<TProps> = memo<TProps>(({ children }) => {
  return <div className="control-container">{children}</div>;
});
