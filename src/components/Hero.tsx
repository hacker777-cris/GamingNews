"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Expanded story data - all set to Breaking News
const stories = [
  {
    id: 1,
    category: "Breaking News",
    title: "African Gaming Championship Sets New Viewership Records",
    description:
      "The continent's biggest esports event draws millions of viewers worldwide, showcasing Africa's growing gaming community and emerging talent pool.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "Breaking News",
    title: "Local Game Studio Secures Major Investment",
    description:
      "Emerging developers receive $10M funding to expand their innovative mobile gaming platform targeting African markets.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Breaking News",
    title: "Tech Summit Highlights Gaming as Economic Driver",
    description:
      "Government officials and industry leaders discuss how gaming and esports can create jobs and boost digital economies across the continent.",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    category: "Breaking News",
    title: "New Gaming Hub Opens in Lagos",
    description:
      "State-of-the-art facility provides training, equipment, and networking opportunities for aspiring professional gamers and developers.",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    category: "Breaking News",
    title: "Revolutionary AI Gaming Technology Unveiled",
    description:
      "A groundbreaking artificial intelligence system promises to transform gaming experiences with unprecedented adaptive gameplay and personalized narratives.",
    image:
      "https://images.unsplash.com/photo-1559163499-413811fb2344?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    category: "Breaking News",
    title: "Cross-Continental Esports League Announced",
    description:
      "Major tournament organizers join forces to create the first official Africa-Europe competitive gaming league with a $2M prize pool.",
    image:
      "https://images.unsplash.com/photo-1551022372-0bdac482b9d6?auto=format&fit=crop&q=80",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStory = stories[currentIndex];

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length,
    );
  };

  const goToStory = (index) => {
    setCurrentIndex(index);
  };

  const handleReadFullStory = () => {
    // Add your navigation logic here
    console.log(`Reading full story: ${currentStory.title}`);
  };

  return (
    <div className="relative">
      {/* Story indicators */}
      <div className="absolute top-6 right-6 z-20 flex space-x-3">
        {stories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => goToStory(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-neon-green scale-125 ring-2 ring-neon-green/50"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to story ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Navigation arrows */}
      <button
        onClick={prevStory}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-neon-green/20 group"
        aria-label="Previous story"
      >
        <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextStory}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-neon-green/20 group"
        aria-label="Next story"
      >
        <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="card relative overflow-hidden group cursor-pointer"
          onClick={handleReadFullStory}
        >
          <div className="relative h-[80vh] overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              src={currentStory.image}
              alt={currentStory.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Breaking News Label - Now positioned at top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="absolute top-10 left-10 z-10"
            >
              <span className="inline-block px-6 py-2 bg-neon-green text-charcoal rounded-full font-bold tracking-wider text-sm">
                {currentStory.category}
              </span>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute bottom-0 left-0 p-10 space-y-6 max-w-3xl"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  {currentStory.title}
                </h1>
                <p className="text-gray-200 text-xl max-w-2xl">
                  {currentStory.description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Story counter */}
      <div className="absolute bottom-6 left-10 z-20 bg-black/50 px-4 py-2 rounded-full text-white font-medium">
        {currentIndex + 1} / {stories.length}
      </div>
    </div>
  );
};

export default Hero;

