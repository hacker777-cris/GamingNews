import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card relative overflow-hidden group"
    >
      <div className="relative h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
          alt="Esports Tournament"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-0 left-0 p-8 space-y-6 max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-neon-green/20 text-neon-green rounded-full font-semibold">
              Breaking News
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              African Gaming Championship Sets New Viewership Records
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl">
              The continent's biggest esports event draws millions of viewers worldwide,
              showcasing Africa's growing gaming community and emerging talent pool.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;