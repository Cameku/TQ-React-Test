import React from 'react';

import Routes from '../routes/Routes';
import Navigation from './navigation/Navigation';

const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes />
    </>
  );
};

export default Layout;
