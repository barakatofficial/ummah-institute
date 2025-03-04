import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed z-50 transition-all duration-300",
      isScrolled 
        ? "top-4 left-4 right-4 md:left-6 md:right-6" 
        : "top-6 left-4 right-4 md:left-8 md:right-8"
    )}>
      <div className="relative">
        <div className={cn(
          "rounded-full transition-all duration-300 border border-white/10",
          isScrolled 
            ? "bg-teal-700/85 backdrop-blur-xl shadow-lg" 
            : "bg-teal-700/75 backdrop-blur-lg"
        )}>
          <div className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.a
                href="#"
                className="text-xl md:text-2xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Ummah Institute
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
                <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
                <NavLink onClick={() => scrollToSection('pricing')}>Pricing</NavLink>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-full transition-colors border border-white/25 backdrop-blur-sm"
                >
                  Contact Us
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white hover:text-gray-200 transition-colors p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 md:hidden"
            >
              <div className="bg-teal-800/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-lg">
                <div className="flex flex-col space-y-3 p-4">
                  <MobileNavLink onClick={() => scrollToSection('about')}>About</MobileNavLink>
                  <MobileNavLink onClick={() => scrollToSection('features')}>Features</MobileNavLink>
                  <MobileNavLink onClick={() => scrollToSection('pricing')}>Pricing</MobileNavLink>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-full transition-colors border border-white/25 w-full backdrop-blur-sm"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-100 hover:text-white transition-colors font-medium"
  >
    {children}
  </button>
);

const MobileNavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-100 hover:text-white transition-colors text-center w-full py-2 px-4 rounded-full hover:bg-white/10"
  >
    {children}
  </button>
);

export default Navbar;