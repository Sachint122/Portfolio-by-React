import './style/display.css';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Home from './HTML/Home';
import Contact from './HTML/Contact';
import Internship from './HTML/Internship';
import Project from './HTML/project';
import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    if (!showContact) setShowContact(true); // Only set to true if not already showing
  };
  return (
    <Router>
      <NavBar onContactClick={handleContactClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact"    element={showContact && <Contact />} />
        <Route path="/Internship" element={showContact && <Internship />} />
        <Route path="/Project" element={showContact && <Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
