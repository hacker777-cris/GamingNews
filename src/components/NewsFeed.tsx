"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "New Gaming Hub Opens in Lagos",
    date: "2025-03-15",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80",
    preview: "State-of-the-art facility aims to nurture local gaming talent",
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "South African Dev Team Launches Breakthrough Title",
    date: "2025-03-14",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
    preview: "Innovative game combines African mythology with modern gameplay",
    category: "Game Development",
  },
  {
    id: 3,
    title: "Major Console Manufacturer Partners with African Developers",
    date: "2025-03-13",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80",
    preview: "New initiative to support game development across the continent",
    category: "Industry",
  },
  {
    id: 4,
    title: "Kenyan Mobile Game Reaches Global Top Charts",
    date: "2025-03-12",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80",
    preview:
      "Local developers celebrate international success with innovative mobile title",
    category: "Mobile Gaming",
  },
  {
    id: 5,
    title: "African Gaming Awards Announces 2025 Nominees",
    date: "2025-03-11",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
    preview:
      "Annual celebration of gaming excellence features record number of entries",
    category: "Events",
  },
  {
    id: 6,
    title: "Revolutionary Gaming Technology Developed in Ghana",
    date: "2025-03-10",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80",
    preview: "Local tech startup unveils groundbreaking gaming peripherals",
    category: "Technology",
  },
];

const NewsFeed = () => {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold gradient-text">Latest News</h2>
        <Link
          to="/all-news"
          className="text-neon-green hover:text-white transition-colors flex items-center space-x-2"
        >
          <span>View All</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="news-grid"
      >
        {newsItems.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover image-hover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-neon-green/20 text-neon-green rounded-full text-sm">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-sm text-gray-400">{item.date}</span>
              <h3 className="text-xl font-semibold group-hover:text-neon-green transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.preview}</p>
              <div className="flex items-center space-x-2 text-neon-green group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-semibold">Read More</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default NewsFeed;

