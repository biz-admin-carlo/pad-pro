import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Home from './page/Home';
import Services from './page/Services';
import Contact from './page/Contact';
import AboutUs from './page/AboutUs';
import OurTeam from './page/OurTeam';
import FAQs from './page/FAQs';
import Facilities from './page/Facilities';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
