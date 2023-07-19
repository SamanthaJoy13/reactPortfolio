import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Typography } from '@material-ui/core';

import React from 'react';

import Header from './components/header';


function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;