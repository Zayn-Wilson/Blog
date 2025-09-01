'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Python', 'TensorFlow', 'PyTorch', 'ROS', 'OpenCV',
  'Docker', 'Git', 'Linux', 'MongoDB', 'PostgreSQL'
];

export function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-light text-white mb-2">
            Skills & Technologies
          </h2>
          <p className="text-white/50 text-sm font-light">
            Tools and technologies I work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 text-sm font-light text-white/60 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}