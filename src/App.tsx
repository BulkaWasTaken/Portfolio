import { type FC } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from './pages/Contact';

import Navbar from './components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import DotGrid from './components/layout/DotGrid';

const AnimatedRoutes: FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: FC = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen bg-[#0F172A] text-[#F8FAFC]">
        
        <div className="fixed inset-0 z-0 opacity-40 select-none pointer-events-none">
          <DotGrid
            dotSize={4}
            gap={20}
            baseColor="#38BDF8"
            activeColor="#94bdff"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <Navbar />

        <main className="relative z-10 flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;