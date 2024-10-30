import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceList from './components/ServiceList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceList />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServiceList />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}


import React, { useState } from 'react';

import React, { useState } from 'react';

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle View</button>
      {isVisible && <p>This content is toggled</p>}
    </div>
  );
};

export default ToggleComponent;
