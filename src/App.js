import React from 'react';
import './App.css';
import './style.css';
import Nav from './component/Nav';
import SectionOne from './component/SectionOne';
import SectionTwo from './component/SectionTwo';
import SectionThree from './component/SectionThree';
import Footer from './component/Footer';
import SectionFour from './component/SectionFour';
import SectionFive from './component/SectionFive';

function App() {
  return (
    <div className="App">
      <Nav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default App;
