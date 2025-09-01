'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'AI & Machine Learning',
    items: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Pandas']
  },
  {
    category: 'Robotics',
    items: ['ROS', 'Arduino', 'Raspberry Pi', 'C++', 'MATLAB', 'Gazebo']
  },
  {
    category: 'Web Development',
    items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'Linux', 'Jupyter', 'VS Code', 'Figma']
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            技术栈
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            在AI与机器人领域的学习过程中掌握的技术和工具
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white rounded-full text-sm border border-white/20 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}