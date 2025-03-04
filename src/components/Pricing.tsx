import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Affordable Program Pricing
          </motion.h2>
          <div className="w-20 h-1 bg-teal-700 mx-auto my-4"></div>
          <motion.p 
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Invest in your academic future with our cost-effective GCSE Accelerator Program. 
            Choose the package that best suits your educational needs.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Single Subject - Mathematics */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Mathematics</h3>
              <p className="text-gray-600 mt-2">Single subject focus</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-teal-700">£50</span>
                <span className="ml-2 text-gray-600">per week</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">£300 for full 6-week program</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 mb-auto">
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">4-hour weekly sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Comprehensive study materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Practice questions and exercises</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Regular progress assessments</span>
                </li>
              </ul>
              <motion.button 
                onClick={scrollToContact}
                className="w-full py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors mt-6"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>

          {/* Single Subject - Chemistry */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Chemistry</h3>
              <p className="text-gray-600 mt-2">Single subject focus</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-teal-700">£50</span>
                <span className="ml-2 text-gray-600">per week</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">£300 for full 6-week program</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 mb-auto">
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">4-hour weekly sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Comprehensive study materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Practical application guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Regular progress assessments</span>
                </li>
              </ul>
              <motion.button 
                onClick={scrollToContact}
                className="w-full py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors mt-6"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>

          {/* Combined Package - Best Value */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl relative flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="absolute top-0 right-0 bg-teal-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Best Value
            </div>
            <div className="p-6 border-b bg-teal-50">
              <h3 className="text-2xl font-bold text-gray-900">Complete Package</h3>
              <p className="text-gray-600 mt-2">Mathematics & Chemistry</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-teal-700">£90</span>
                <span className="ml-2 text-gray-600">per week</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">£540 for full 6-week program</p>
              <p className="text-sm font-medium text-teal-700 mt-1">Save £60 compared to individual subjects</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 mb-auto">
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">8-hour weekly sessions (4 hours per subject)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Comprehensive study materials for both subjects</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Priority access to tutors for questions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Regular progress assessments</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Additional practice materials</span>
                </li>
              </ul>
              <motion.button 
                onClick={scrollToContact}
                className="w-full py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors flex items-center justify-center mt-6"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Enroll Now <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Expert GCSE tutors</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Small group sessions</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Comprehensive materials</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Practice questions</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Exam techniques</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Progress tracking</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Mock exams</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Personalized feedback</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-teal-700 mr-2 mt-1">•</div>
                <span className="text-gray-700">Classes are held on weekends to accommodate school schedules</span>
              </li>
              <li className="flex items-start">
                <div className="text-teal-700 mr-2 mt-1">•</div>
                <span className="text-gray-700">Payment plans available - contact us for details</span>
              </li>
              <li className="flex items-start">
                <div className="text-teal-700 mr-2 mt-1">•</div>
                <span className="text-gray-700">Limited spots available to ensure quality instruction</span>
              </li>
              <li className="flex items-start">
                <div className="text-teal-700 mr-2 mt-1">•</div>
                <span className="text-gray-700">Biology program coming soon - register your interest</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-3">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-gray-700 font-medium">Rated 4.9/5 by our students</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors inline-flex items-center text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Secure Your Place Today <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;