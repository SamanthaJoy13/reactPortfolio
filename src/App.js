import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


import Header from './components/header';
import AboutMe from './components/about/aboutMe';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;