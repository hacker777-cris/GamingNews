import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-12 bg-gradient-to-r from-dark-charcoal to-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="relative max-w-2xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-2">Stay in the Game</h2>
          <p className="text-gray-400 text-lg">
            Get weekly updates on African gaming news, exclusive stories, and community highlights
          </p>
        </motion.div>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-md bg-charcoal border border-gray-700 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <span>Subscribe</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </form>
        <p className="text-sm text-gray-500">
          Join 50,000+ gaming enthusiasts receiving our weekly newsletter
        </p>
      </div>
    </motion.section>
  );
};

export default Newsletter;