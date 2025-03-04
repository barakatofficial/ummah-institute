import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <div className="w-20 h-1 bg-teal-700 mx-auto my-4"></div>
          <motion.p 
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to accelerate your GCSE success? Get in touch with us today to learn more 
            about our program or to enroll.
          </motion.p>
        </div>

        <motion.div 
          className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-teal-700 p-8 text-white">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="mt-4">
                We're here to answer any questions you may have about our GCSE Accelerator Program. 
                Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="mt-8 space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Mail className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="mt-1">info@ummahinstitute.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Phone className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="mt-1">+44 (0) 123 456 7890</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <MapPin className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="mt-1">123 Education Street, London, UK</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold">Hours of Operation</h4>
                <p className="mt-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM (Class days)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              {submitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-md p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-green-800">Message Sent Successfully!</h3>
                  <p className="mt-3 text-green-700">
                    Thank you for contacting Ummah Institute. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      >
                        <option value="">Select a subject</option>
                        <option value="Enrollment">Enrollment Inquiry</option>
                        <option value="Mathematics">Mathematics Program</option>
                        <option value="Chemistry">Chemistry Program</option>
                        <option value="Complete Package">Complete Package</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      ></textarea>
                    </div>
                    <div className="sm:col-span-2">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors flex items-center justify-center ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={18} className="ml-2" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Map or Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">When do classes take place?</h4>
                <p className="text-gray-600 mt-1">Classes are held on weekends to accommodate school schedules.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">How many students are in each class?</h4>
                <p className="text-gray-600 mt-1">We maintain small group sizes with a maximum of 10 students per class.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Do you offer payment plans?</h4>
                <p className="text-gray-600 mt-1">Yes, we offer flexible payment options. Contact us for details.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">When will the Biology program be available?</h4>
                <p className="text-gray-600 mt-1">Our Biology program is currently in development and will be available soon. Register your interest to be notified.</p>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Ummah Institute</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-700">Specialized GCSE curriculum designed by experienced educators</p>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-1 mr-3">
                  <Check className="text-teal-700" size={16} />
                </div>
                <span className="text-gray-700">Interactive online learning environment</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-700">Comprehensive study materials and practice resources</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-700">Proven track record of improving student grades</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-700">Flexible scheduling to accommodate school commitments</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-700 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-700">Supportive learning environment focused on student success</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;