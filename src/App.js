import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import './App.css';

import Routes from './Routes';
import NavbarContainer from './containers/NavbarContainer';

const App = () => {
  return (
    <Router>
      <MDBContainer>
        <NavbarContainer />
      </MDBContainer>
      <MDBContainer>
        <Routes />
      </MDBContainer>
    </Router>
  );
}

export default App;
