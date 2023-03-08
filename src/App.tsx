import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './views/Layout';
import configureStore from './store/store';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
//import 'react-toastify/dist/ReactToastify.min.css';

import './css/main.scss';

const store = configureStore();
const history = createBrowserHistory();

const App: React.FC = () => {
  //const notify = (h: string) => toast(h);
  return (
    <>
      <ReduxProvider store={store}>
        <Router history={history}>
          <Layout />
        </Router>
      </ReduxProvider>
      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
