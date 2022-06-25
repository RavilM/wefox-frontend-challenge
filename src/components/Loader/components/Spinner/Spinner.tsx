import React, { FC, memo } from 'react';
import './styles.css';

export const Spinner: FC = memo(() => (
  <div className="sk-chase">
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
  </div>
));
