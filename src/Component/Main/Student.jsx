import React from 'react';
import { motion } from 'framer-motion';

const Student = () => {
  return (
    <div className="bg-pink-50  text-black py-16 px-6 md:px-16 lg:px-32 rounded-lg">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How Students Can Benefit
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Empower your academic journey with tools designed to simplify your workload, foster collaboration, and help you succeed in your studies.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Benefit 1 */}
        <motion.div 
          className="bg-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Simplified Assignment Management</h3>
          <p className="text-sm text-white">
            Easily track deadlines, organize tasks, and stay on top of your coursework with our intuitive dashboard.
          </p>
        </motion.div>

        {/* Benefit 2 */}
        <motion.div 
          className="bg-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Collaborate Seamlessly</h3>
          <p className="text-sm text-white">
            Work on group projects, share resources, and communicate effortlessly with classmates and instructors.
          </p>
        </motion.div>

        {/* Benefit 3 */}
        <motion.div 
          className="bg-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Receive Personalized Feedback</h3>
          <p className="text-sm text-white">
            Get constructive, personalized feedback from educators to help you improve and excel in your academic journey.
          </p>
        </motion.div>

        {/* Benefit 4 */}
        <motion.div 
          className="bg-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Track Your Progress</h3>
          <p className="text-sm text-white">
            Monitor your academic growth with progress tracking features and stay motivated throughout your learning journey.
          </p>
        </motion.div>

        {/* Benefit 5 */}
        <motion.div 
          className="bg-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Accessible Anytime, Anywhere</h3>
          <p className="text-sm text-white">
            Access your assignments and resources from any device, ensuring you’re always connected to your education.
          </p>
        </motion.div>

        {/* Benefit 6 */}
        <motion.div 
          className="bg-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Foster Teamwork & Innovation</h3>
          <p className="text-sm text-white">
            Encourage creative thinking and collaboration through team-based assignments and real-time feedback tools.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Student;
