import React from 'react';
import { Facebook, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="absolute -top-5 right-10">
        <motion.button 
          onClick={scrollToTop}
          className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Ummah Institute" 
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/40x40/1a6665/ffffff?text=UI";
                }}
              />
              <span className="ml-2 text-xl font-bold">Ummah Institute</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering students to achieve academic excellence through our specialized 
              GCSE Accelerator Program.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-teal-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-teal-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-teal-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="mailto:info@ummahinstitute.com" 
                className="text-gray-400 hover:text-teal-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Program
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Mathematics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Chemistry
                </button>
              </li>
              <li>
                <span className="text-gray-400">Biology (Coming Soon)</span>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  Complete Package
                </button>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Education Street</li>
              <li>London, UK</li>
              <li>+44 (0) 123 456 7890</li>
              <li>info@ummahinstitute.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ummah Institute. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;