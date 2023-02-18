import React, { useEffect } from 'react';


import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import './scss/app.scss';

const App = () => {


  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
