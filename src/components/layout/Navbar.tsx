import { type FC, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <Link to="/" className="text-2xl font-bold tracking-tighter text-[#38BDF8] no-underline">
          BUŁKA Z MASŁEM
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "relative pb-1 text-sm font-medium transition-all duration-300 no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#38BDF8] after:transition-all after:duration-300",
              isActive ? "text-[#38BDF8] after:w-full" : "text-[#F8FAFC] hover:text-[#38BDF8] after:w-0 hover:after:w-full"
            )}
          >
            Start
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => cn(
              "relative pb-1 text-sm font-medium transition-all duration-300 no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#38BDF8] after:transition-all after:duration-300",
              isActive ? "text-[#38BDF8] after:w-full" : "text-[#F8FAFC] hover:text-[#38BDF8] after:w-0 hover:after:w-full"
            )}
          >
            O mnie
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => cn(
              "relative pb-1 text-sm font-medium transition-all duration-300 no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#38BDF8] after:transition-all after:duration-300",
              isActive ? "text-[#38BDF8] after:w-full" : "text-[#F8FAFC] hover:text-[#38BDF8] after:w-0 hover:after:w-full"
            )}
          >
            Kontakt
          </NavLink>
        </div>

        <button 
          type="button" 
          className="md:hidden text-[#F8FAFC] z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#0F172A] border-b border-[#1E293B] overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <NavLink to="/" onClick={() => setIsOpen(false)} className="text-[#F8FAFC] no-underline py-2 border-b border-white/5">Start</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-[#F8FAFC] no-underline py-2 border-b border-white/5">O mnie</NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-[#F8FAFC] no-underline py-2">Kontakt</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;