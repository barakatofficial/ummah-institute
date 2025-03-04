import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "The Mathematics program at Ummah Institute transformed my understanding of complex topics. I went from struggling with algebra to confidently solving problems. My grade improved from a 5 to an 8!",
      name: "Sarah A.",
      role: "GCSE Student, 2024",
      initials: "SA"
    },
    {
      quote: "Chemistry was always challenging for me until I joined the Ummah Institute program. The tutors explained concepts clearly and provided excellent practice materials. I achieved a grade 9 in my GCSE Chemistry!",
      name: "Mohammed K.",
      role: "GCSE Student, 2023",
      initials: "MK"
    },
    {
      quote: "I enrolled in both Mathematics and Chemistry programs, and it was the best decision I made. The small group setting allowed for personalized attention, and the exam techniques they taught were invaluable. Highly recommend!",
      name: "Aisha H.",
      role: "GCSE Student, 2024",
      initials: "AH"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Students Say
          </motion.h2>
          <div className="w-20 h-1 bg-teal-700 mx-auto my-4"></div>
          <motion.p 
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from students who have experienced our GCSE Accelerator Program and achieved remarkable results.
          </motion.p>
        </div>



        {/* Additional Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex text-yellow-400 mb-4">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <p className="text-gray-700 italic">
              "The structured approach to learning at Ummah Institute helped me understand complex mathematical concepts that I had been struggling with for years. The tutors are patient and knowledgeable."
            </p>
            <div className="mt-6 flex items-center">
              <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
                <span className="text-teal-700 font-bold">YQ</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">Yusuf Q.</h4>
                <p className="text-sm text-gray-600">GCSE Student, 2023</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex text-yellow-400 mb-4">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <p className="text-gray-700 italic">
              "The Chemistry program helped me understand reactions and equations in a way my school never could. The practical applications and visual aids made complex topics much clearer."
            </p>
            <div className="mt-6 flex items-center">
              <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
                <span className="text-teal-700 font-bold">ZA</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">Zahra A.</h4>
                <p className="text-sm text-gray-600">GCSE Student, 2024</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex text-yellow-400 mb-4">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <p className="text-gray-700 italic">
              "The exam techniques they taught were game-changers. I learned how to approach different question types and manage my time effectively during exams. My confidence improved tremendously."
            </p>
            <div className="mt-6 flex items-center">
              <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
                <span className="text-teal-700 font-bold">IM</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">Ibrahim M.</h4>
                <p className="text-sm text-gray-600">GCSE Student, 2023</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parent Testimonial */}
        <motion.div 
          className="mt-16 bg-teal-50 rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900">Parent Testimonial</h3>
              <p className="text-gray-700 mt-4 italic leading-relaxed">
                "As a parent, I was concerned about my son's GCSE preparation, especially in Mathematics. 
                The Ummah Institute program provided structured learning that complemented his school work. 
                The tutors were knowledgeable and supportive, and my son's confidence grew significantly. 
                The investment was absolutely worth it, as he achieved excellent results that opened doors 
                for his A-level choices."
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Mrs. Rahman</h4>
                <p className="text-sm text-gray-600">Parent of GCSE Student</p>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm transform rotate-3"
                whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex text-yellow-400 justify-center">
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                </div>
                <p className="text-center text-xl font-bold text-teal-700 mt-2">Excellent</p>
                <p className="text-center text-gray-600">Based on 45+ reviews</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;