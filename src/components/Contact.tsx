import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Start Your Journey?</h2>
          <div className="w-16 h-1 bg-teal-700 mx-auto my-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to enroll in our GCSE programs or simply have questions, we're here to guide you every step of the way.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-teal-700 p-12 flex items-center justify-center">
              <div className="text-white max-w-md">
                <h3 className="text-3xl font-bold">Get in touch</h3>
                <p className="mt-4 text-teal-50 text-lg">
                  Reach out for enrollment information or any questions about our GCSE programs.
                </p>
                
                <div className="mt-8 inline-flex items-center">
                  <Mail className="mr-3" size={20} />
                  <a href="mailto:info@ummahinstitute.co.uk" className="text-white hover:text-teal-200 transition-colors">
                    info@ummahinstitute.co.uk
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us Today</h3>
                  
                  <motion.a
                    href="https://tally.so/r/nG5NRe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-teal-700 text-white font-medium rounded-lg flex items-center justify-center hover:bg-teal-800 transition-colors duration-300"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Form <ExternalLink size={18} className="ml-2" />
                  </motion.a>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    We typically respond within 24-48 hours
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;