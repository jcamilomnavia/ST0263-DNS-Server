import 'utils/axios-setup';

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import ScreenLoading from 'views/ui/screen-loading';
import Routes from 'routes';
import routesConfig from 'routes/config';
import { persistor, store } from 'store';
import history from 'store/history';

const App = () => (
  <main>
    <Provider store={store}>
      <PersistGate loading={<ScreenLoading />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Routes store={store} routes={routesConfig} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </main>
);

export default App;
