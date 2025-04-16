"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  fetchGamingAfricaNews,
  type NewsItem,
} from "../utils/fetchGamingAfricaNews";

const AllNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const newsData = await fetchGamingAfricaNews();
        setNews(newsData);
      } catch (err) {
        setError("Failed to load news. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  // Function to format the date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Determine category based on title keywords
  const determineCategory = (title: string, sourceName?: string): string => {
    const categories = [
      { keywords: ["launch", "releases", "announced"], name: "Release" },
      {
        keywords: ["tournament", "competition", "championship", "event"],
        name: "Events",
      },
      {
        keywords: ["technology", "tech", "innovation", "device"],
        name: "Technology",
      },
      {
        keywords: ["mobile", "phone", "android", "ios"],
        name: "Mobile Gaming",
      },
      {
        keywords: ["developer", "studio", "development"],
        name: "Game Development",
      },
      { keywords: ["industry", "market", "business"], name: "Industry" },
      {
        keywords: ["esports", "professional", "team", "player"],
        name: "Esports",
      },
    ];

    const lowerTitle = title.toLowerCase();

    for (const category of categories) {
      if (category.keywords.some((keyword) => lowerTitle.includes(keyword))) {
        return category.name;
      }
    }

    // If source contains certain keywords, use those as fallback categories
    if (sourceName) {
      const lowerSource = sourceName.toLowerCase();
      if (lowerSource.includes("tech")) return "Technology";
      if (lowerSource.includes("game")) return "Gaming";
      if (lowerSource.includes("mobile")) return "Mobile Gaming";
      if (lowerSource.includes("esports")) return "Esports";
    }

    return "Gaming";
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="flex items-center text-neon-green hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Gaming Africa News
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Stay updated with the latest developments in the African gaming
          industry, from new releases to major events and technological
          innovations.
        </p>
      </motion.div>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-neon-green text-xl">
            Loading news...
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-900/20 border border-red-500 text-red-100 p-4 rounded-lg">
          {error}
        </div>
      )}

      {!loading && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover image-hover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-neon-green/20 text-neon-green rounded-full text-sm">
                    {determineCategory(item.title, item.source?.name)}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <span className="text-sm text-gray-400">
                  {formatDate(item.publishedAt)}
                </span>
                <h3 className="text-xl font-semibold group-hover:text-neon-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-neon-green group-hover:translate-x-2 transition-transform"
                >
                  <span className="text-sm font-semibold">
                    Read Full Article
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}

      {!loading && !error && news.length === 0 && (
        <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">No News Found</h3>
          <p className="text-gray-400">
            We couldn't find any gaming news for Africa at the moment. Please
            check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllNews;
