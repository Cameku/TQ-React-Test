import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './views/Layout';
import configureStore from './store/store';

import './css/main.scss';

const store = configureStore();
const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <Router history={history}>
        <Layout />
      </Router>
    </ReduxProvider>
  );
};

export default App;
