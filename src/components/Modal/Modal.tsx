import React, { FC, MouseEvent, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { TProps } from './types';
import './styles.css';

export const Modal: FC<TProps> = ({ children, show, onClose }) => {
  const closeOnEscapeKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  const handleStopPropagation = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} timeout={{ enter: 0, exit: 300 }} unmountOnExit>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="modal" onClick={onClose}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className="modal-container" onClick={handleStopPropagation}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('modal-root') as Element,
  );
};
