import React, { useState } from 'react';
import { TableViewContainer } from './containers/TableViewContainer';
import { useFetchListPosts } from './hooks/useFetchListPosts';
import { Map } from './containers/MapContainer';
import './styles.css';
import { CreateButtonContainer } from './containers/CreateButtonContainer';

enum EView {
  TABLE = 'table',
  MAP = 'map',
}

function App() {
  const [view, setView] = useState<EView>(EView.TABLE);
  const { data, isError, loading, refetch } = useFetchListPosts();

  const handleChangeView = () => {
    if (view === EView.MAP) setView(EView.TABLE);
    else setView(EView.MAP);
  };

  return (
    <div className="app-container">
      <div className="control">
        <div>
          Change view on{' '}
          <button onClick={handleChangeView} type="button">
            {view === EView.TABLE ? EView.MAP : EView.TABLE}
          </button>
        </div>
        <CreateButtonContainer onCreate={refetch} />
      </div>
      <div className="content-container">
        {view === EView.TABLE && (
          <TableViewContainer
            data={data}
            isLoading={loading}
            onUpdate={refetch}
          />
        )}
        {view === EView.MAP && <Map data={data} />}
      </div>
    </div>
  );
}

export default App;
