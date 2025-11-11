import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Memberships from './pages/Memberships';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <ScrollToTop />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uber-uns" element={<About />} />
            <Route path="/mitgliedschaften" element={<Memberships />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;