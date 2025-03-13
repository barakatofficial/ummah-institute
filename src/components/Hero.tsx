import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container relative px-4 sm:px-6 lg:px-8 py-24 mt-16 md:mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium tracking-wide"
          >
            Empowering GCSE Success
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight"
          >
            Excel in Your
            <span className="text-teal-700"> GCSE Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Join our specialized Mathematics and Chemistry programs designed to help you achieve top grades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 rounded-full text-lg font-medium group w-full sm:w-auto"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('features')}
              className="border-2 border-gray-200 hover:border-teal-700 hover:bg-transparent text-gray-700 hover:text-teal-700 px-8 py-6 rounded-full text-lg font-medium w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="pt-12 grid grid-cols-3 gap-4 sm:gap-8 items-center justify-center text-gray-500 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">90%</div>
              <div className="text-sm mt-1">Grade Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm mt-1">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm mt-1">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;