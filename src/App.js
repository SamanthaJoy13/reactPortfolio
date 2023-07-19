import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


import Header from './components/header';
import AboutMe from './components/about/aboutMe';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;