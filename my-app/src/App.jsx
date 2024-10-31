import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import Team from './Pages/Team';
import Contact from './pages/Contact';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import { FloatingElements } from './components/Background/FloatingElement';


function App() {
  return (
    <BrowserRouter>
<FloatingElements/>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
    
      </div>
    </BrowserRouter>
  );
}

export default App;