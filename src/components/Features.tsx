import React, { useState } from 'react';
import { BookOpen, Calculator, FlaskRound as Flask, Brain, Users, Award, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Timeline } from "@/components/ui/timeline";

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const subjects = [
    {
      title: "Mathematics",
      icon: <Calculator className="text-white" size={24} />,
      description: "Master key mathematical concepts and problem-solving techniques essential for GCSE success.",
      topics: [
        "Algebra and Functions",
        "Geometry and Trigonometry",
        "Statistics and Probability",
        "Number Systems and Calculations"
      ],
      color: "bg-teal-700",
      available: true
    },
    {
      title: "Chemistry",
      icon: <Flask className="text-white" size={24} />,
      description: "Develop a deep understanding of chemical principles and practical applications.",
      topics: [
        "Atomic Structure and Periodic Table",
        "Chemical Bonding and Reactions",
        "Organic Chemistry",
        "Quantitative Chemistry"
      ],
      color: "bg-teal-700",
      available: true
    },
    {
      title: "Biology",
      icon: <BookOpen className="text-white" size={24} />,
      description: "Our Biology program is currently in development and will be available soon.",
      topics: [
        "Cell Biology and Organization",
        "Genetics and Evolution",
        "Ecology and Environment",
        "Human Physiology"
      ],
      color: "bg-gray-400",
      available: false
    }
  ];

  const features = [
    {
      title: "Exam Techniques",
      icon: <Brain className="text-teal-700" size={28} />,
      description: "Learn proven strategies for approaching different question types and maximizing your marks."
    },
    {
      title: "Interactive Learning",
      icon: <Users className="text-teal-700" size={24} />,
      description: "Engage in interactive online sessions with real-time feedback and support from expert tutors."
    },
    {
      title: "Practice Materials",
      icon: <Award className="text-teal-700" size={28} />,
      description: "Access comprehensive study materials, practice questions, and mock exams aligned with the GCSE curriculum."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Choose Your Subjects",
      content: "Select Mathematics, Chemistry, or both to create your personalized learning program."
    },
    {
      step: "2",
      title: "Attend Weekly Sessions",
      content: "Join our 4-hour weekly sessions designed to cover key topics and exam techniques."
    },
    {
      step: "3",
      title: "Practice & Apply",
      content: "Use our comprehensive materials to practice and reinforce your understanding."
    },
    {
      step: "4",
      title: "Track Your Progress",
      content: "Regular assessments help you identify strengths and areas for improvement."
    },
    {
      step: "5",
      title: "Excel in Your Exams",
      content: "Apply your knowledge and techniques to achieve outstanding GCSE results."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our GCSE Accelerator Program
          </motion.h2>
          <div className="w-20 h-1 bg-teal-700 mx-auto my-4"></div>
          <motion.p 
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive 6-week program designed to boost your GCSE performance through 
            structured learning, expert guidance, and focused practice.
          </motion.p>
        </div>

        {/* Subject Tabs */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {subjects.map((subject, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-teal-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {subject.title}
                {!subject.available && (
                  <span className="ml-2 text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Subject Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={`content-${activeTab}`}
            >
              <div className={`p-6 rounded-lg shadow-lg ${subjects[activeTab].available ? 'bg-white' : 'bg-white/80'}`}>
                <div className={`w-12 h-12 rounded-full ${subjects[activeTab].color} flex items-center justify-center mb-4`}>
                  {subjects[activeTab].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{subjects[activeTab].title}</h3>
                <p className="text-gray-600 mb-6">{subjects[activeTab].description}</p>
                <div className="space-y-3">
                  {subjects[activeTab].topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className={`${subjects[activeTab].available ? 'text-teal-700' : 'text-gray-400'} mr-2 flex-shrink-0 mt-1`} size={18} />
                      <p className={subjects[activeTab].available ? 'text-gray-700' : 'text-gray-400'}>{topic}</p>
                    </div>
                  ))}
                </div>
                {!subjects[activeTab].available && (
                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-3 text-sm text-yellow-800">
                    This program is coming soon. Register your interest to be notified when it launches.
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                <img 
                  src={activeTab === 0 
                    ? "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    : activeTab === 1
                      ? "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
                      : "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  }
                  alt={subjects[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold">{subjects[activeTab].title} Program</h3>
                  <p className="text-white/90 mt-2">
                    {subjects[activeTab].available 
                      ? "4-hour weekly sessions over 6 weeks" 
                      : "Coming soon - Register your interest"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* How It Works - Steps */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Our Program Works
          </motion.h3>
          
          <Timeline data={steps.map(step => ({
            title: step.title,
            description: step.content,
            icon: (
              <div className="flex items-center justify-center w-full h-full text-xl font-bold text-white">
                {step.step}
              </div>
            )
          }))} />
        </div>

        {/* Program Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Secure Your Place <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;