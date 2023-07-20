import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


import Header from './components/header';
import AboutMe from './components/about/aboutMe';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </Router>
  );
}

export default App;