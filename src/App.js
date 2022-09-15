import React from 'react';
import './App.css';
import {Header} from './Header/header';
import {IngresoVisaciones} from './IngresoVisaciones/ingresoVisaciones';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <IngresoVisaciones/>
    </React.Fragment>
  );
}

export default App;
