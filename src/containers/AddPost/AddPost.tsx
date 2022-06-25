import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { TProps } from './types';
import { AddModal } from './components';

export const AddPost: FC<TProps> = memo<TProps>(({ isMap }) => {
  const [isAddMode, setIsAddMode] = useState(false);

  const handleClickAdd = useCallback(() => {
    setIsAddMode((prevState) => !prevState);
  }, []);

  const buttonText = useMemo(
    () => (isAddMode ? 'Cancel add new post' : 'Add new post'),
    [isAddMode],
  );

  return (
    <>
      <button className="add-button" onClick={handleClickAdd}>
        {buttonText}
      </button>
      {isAddMode && <AddModal />}
    </>
  );
});
