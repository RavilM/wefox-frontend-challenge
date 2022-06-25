import React, { FC, memo, useMemo } from 'react';
import { TProps } from './types';
import { Spinner } from './components';
import './styles.css';

export const Loader: FC<TProps> = memo<TProps>(({ isLoading, children }) => {
  const classNameContentContainer = useMemo(() => {
    let defaultName = 'loader-content-container';

    if (isLoading) defaultName += ` ${defaultName}__loading`;

    return defaultName;
  }, [isLoading]);

  return (
    <div className="loader-container">
      {isLoading && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
      <div className={classNameContentContainer}>{children}</div>
    </div>
  );
});
