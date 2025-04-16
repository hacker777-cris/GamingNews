import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Globe } from 'lucide-react';

const trends = [
  {
    id: 1,
    title: "Rise of African Esports",
    stat: "300% Growth",
    icon: TrendingUp,
    description: "Competitive gaming sees explosive growth across the continent"
  },
  {
    id: 2,
    title: "Gaming Communities",
    stat: "2M+ Members",
    icon: Users,
    description: "African gaming communities reach milestone membership"
  },
  {
    id: 3,
    title: "Local Game Dev",
    stat: "500+ Studios",
    icon: Zap,
    description: "African game development studios on the rise"
  },
  {
    id: 4,
    title: "Global Impact",
    stat: "50+ Countries",
    icon: Globe,
    description: "African games reaching international markets"
  }
];

const TrendingTopics = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold gradient-text">Trending in Gaming</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trends.map((trend, index) => (
          <motion.div
            key={trend.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card p-6 hover:bg-gradient-to-br hover:from-dark-charcoal hover:to-charcoal"
          >
            <div className="flex items-center space-x-3 mb-4">
              <trend.icon className="h-8 w-8 text-neon-green" />
              <h3 className="text-xl font-semibold text-glow">{trend.title}</h3>
            </div>
            <p className="text-2xl font-bold text-neon-green mb-2">{trend.stat}</p>
            <p className="text-gray-400">{trend.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTopics;