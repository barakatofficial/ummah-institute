import React from 'react';
import { CheckCircle, GraduationCap, Users, Trophy, Target, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const features: TimelineFeature[] = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Expert GCSE Tutors",
      description: "Our tutors are highly qualified with extensive experience in GCSE education and proven track records of student success."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Online Learning",
      description: "Flexible online classes with interactive learning materials and real-time support from our expert tutors."
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Proven Results",
      description: "90% of our students improve by at least 2 grades in their GCSE examinations."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Focused Curriculum",
      description: "Specialized programs in Mathematics and Chemistry aligned with the latest GCSE specifications."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprehensive Resources",
      description: "Access to extensive study materials, practice questions, and exam preparation resources."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Ummah Institute
          </motion.h2>
          <div className="w-20 h-1 bg-teal-700 mx-auto my-4"></div>
          <motion.p 
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are dedicated to providing exceptional educational support to help students 
            achieve their academic potential through our specialized GCSE programs.
          </motion.p>
        </div>

        {/* Bento Grid with Mission and Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Mission - Large Card */}
          <motion.div 
            className="md:row-span-2 bg-teal-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow min-h-[300px] md:min-h-[500px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-gray-600 mb-6">
                To empower students with the knowledge, skills, and confidence they need to excel 
                in their GCSE examinations and build a strong foundation for future academic success.
              </p>
              <p className="text-gray-600 mt-auto">
                We believe every student has the potential to achieve excellence through 
                dedicated support, proven teaching methods, and a nurturing learning environment.
              </p>
            </div>
          </motion.div>

          {/* Proven Results - Medium Card */}
          <motion.div 
            className="md:col-span-2 bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow min-h-[250px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Program Excellence</h4>
                <p className="text-gray-600 mb-4">
                  Our carefully designed program combines expert teaching methods with comprehensive 
                  study materials. Our tutors bring years of experience in GCSE education, ensuring 
                  you receive high-quality instruction tailored to the latest exam specifications.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm">
                    Expert GCSE Tutors
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm">
                    Exam-Focused Content
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm">
                    1-on-1 Support Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact Stats - Dark Card */}
          <motion.div 
            className="bg-gray-900 text-white rounded-xl p-6 hover:shadow-lg transition-shadow min-h-[200px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Program Features</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-teal-400">4+</div>
                <p className="text-gray-300 mt-2">Live Teaching Hours</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400">100+</div>
                <p className="text-gray-300 mt-2">Practice Questions</p>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">Comprehensive coverage of GCSE syllabus with weekly assignments</p>
          </motion.div>

          {/* Online Learning */}
          <motion.div 
            className="bg-teal-700 text-white rounded-xl p-6 hover:shadow-lg transition-shadow min-h-[200px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-3">Online Learning</h4>
            <p className="text-teal-100 text-sm leading-relaxed">
              Experience interactive online classes with comprehensive study materials 
              and dedicated support from our expert tutors.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;