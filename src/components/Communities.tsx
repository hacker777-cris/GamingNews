"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, MapPin, Gamepad, Users, X } from "lucide-react";

// Sample community data
const communitiesData = [
  {
    id: 1,
    name: "Lagos Game Developers",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
    country: "Nigeria",
    genre: "Game Development",
    game: "Multiple",
    members: 1240,
    joinLink: "https://example.com/join/lagos-game-devs",
  },
  {
    id: 2,
    name: "Nairobi FIFA Masters",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80",
    country: "Kenya",
    genre: "Sports",
    game: "FIFA 25",
    members: 850,
    joinLink: "https://example.com/join/nairobi-fifa",
  },
  {
    id: 3,
    name: "Cairo Esports League",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    country: "Egypt",
    genre: "Esports",
    game: "Multiple",
    members: 2100,
    joinLink: "https://example.com/join/cairo-esports",
  },
  {
    id: 4,
    name: "Accra Mobile Gamers",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80",
    country: "Ghana",
    genre: "Mobile Gaming",
    game: "PUBG Mobile, COD Mobile",
    members: 1560,
    joinLink: "https://example.com/join/accra-mobile",
  },
  {
    id: 5,
    name: "Johannesburg RPG Guild",
    image:
      "https://images.unsplash.com/photo-1559163499-413811fb2344?auto=format&fit=crop&q=80",
    country: "South Africa",
    genre: "RPG",
    game: "Elden Ring, Baldur's Gate",
    members: 730,
    joinLink: "https://example.com/join/jhb-rpg",
  },
  {
    id: 6,
    name: "Addis Indie Developers",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
    country: "Ethiopia",
    genre: "Game Development",
    game: "Multiple",
    members: 420,
    joinLink: "https://example.com/join/addis-indie",
  },
  {
    id: 7,
    name: "Kigali Competitive Gaming",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80",
    country: "Rwanda",
    genre: "Esports",
    game: "Valorant, League of Legends",
    members: 890,
    joinLink: "https://example.com/join/kigali-competitive",
  },
  {
    id: 8,
    name: "Casablanca Gaming Hub",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80",
    country: "Morocco",
    genre: "Multiple",
    game: "Multiple",
    members: 1780,
    joinLink: "https://example.com/join/casablanca-hub",
  },
  {
    id: 9,
    name: "Dakar Fighting Game Community",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80",
    country: "Senegal",
    genre: "Fighting Games",
    game: "Street Fighter, Tekken",
    members: 630,
    joinLink: "https://example.com/join/dakar-fgc",
  },
  {
    id: 10,
    name: "Kampala Game Artists",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80",
    country: "Uganda",
    genre: "Game Art",
    game: "Multiple",
    members: 340,
    joinLink: "https://example.com/join/kampala-artists",
  },
  {
    id: 11,
    name: "Lusaka Sim Racers",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80",
    country: "Zambia",
    genre: "Racing",
    game: "F1 25, Assetto Corsa",
    members: 280,
    joinLink: "https://example.com/join/lusaka-racers",
  },
  {
    id: 12,
    name: "Tunis Game Jam",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    country: "Tunisia",
    genre: "Game Development",
    game: "Multiple",
    members: 510,
    joinLink: "https://example.com/join/tunis-jam",
  },
];

// Extract unique filter options
const countries = [...new Set(communitiesData.map((item) => item.country))];
const genres = [...new Set(communitiesData.map((item) => item.genre))];
const games = [
  ...new Set(
    communitiesData.flatMap((item) =>
      item.game.includes(",") ? item.game.split(", ") : [item.game],
    ),
  ),
].filter((game) => game !== "Multiple");

const CommunitiesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    country: "",
    genre: "",
    game: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCommunities, setFilteredCommunities] =
    useState(communitiesData);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let results = communitiesData;

    // Apply search filter
    if (searchQuery) {
      results = results.filter((community) =>
        community.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Apply dropdown filters
    if (filters.country) {
      results = results.filter(
        (community) => community.country === filters.country,
      );
    }

    if (filters.genre) {
      results = results.filter(
        (community) => community.genre === filters.genre,
      );
    }

    if (filters.game) {
      results = results.filter((community) =>
        community.game.includes(filters.game),
      );
    }

    setFilteredCommunities(results);
  }, [searchQuery, filters]);

  const clearFilters = () => {
    setSearchQuery("");
    setFilters({
      country: "",
      genre: "",
      game: "",
    });
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Gaming <span className="text-neon-green">Communities</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Connect with fellow gamers across Africa - join a community that
          matches your interests and start playing together.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search communities..."
              className="w-full pl-10 pr-4 py-3 bg-charcoal border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green/50 text-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter toggle button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
              showFilters
                ? "bg-neon-green text-charcoal"
                : "bg-charcoal border border-gray-700 text-white hover:border-neon-green"
            }`}
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>

          {/* Clear filters button - only show when filters are applied */}
          {(filters.country ||
            filters.genre ||
            filters.game ||
            searchQuery) && (
            <button
              onClick={clearFilters}
              className="px-4 py-3 bg-charcoal border border-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Filter dropdowns */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
          >
            {/* Country filter */}
            <div className="flex flex-col">
              <label className="text-gray-400 mb-2 flex items-center gap-2">
                <MapPin size={16} />
                Country
              </label>
              <select
                value={filters.country}
                onChange={(e) => handleFilterChange("country", e.target.value)}
                className="bg-charcoal border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-green/50"
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Genre filter */}
            <div className="flex flex-col">
              <label className="text-gray-400 mb-2 flex items-center gap-2">
                <Gamepad size={16} />
                Genre
              </label>
              <select
                value={filters.genre}
                onChange={(e) => handleFilterChange("genre", e.target.value)}
                className="bg-charcoal border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-green/50"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Game filter */}
            <div className="flex flex-col">
              <label className="text-gray-400 mb-2 flex items-center gap-2">
                <Gamepad size={16} />
                Game
              </label>
              <select
                value={filters.game}
                onChange={(e) => handleFilterChange("game", e.target.value)}
                className="bg-charcoal border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-green/50"
              >
                <option value="">All Games</option>
                {games.map((game) => (
                  <option key={game} value={game}>
                    {game}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Results count */}
      <div className="mb-6 text-gray-400">
        Showing {filteredCommunities.length}{" "}
        {filteredCommunities.length === 1 ? "community" : "communities"}
      </div>

      {/* Communities Grid - REDESIGNED CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: Math.min(index * 0.05, 0.3),
              }}
              whileHover={{ y: -5 }}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gradient-to-b from-charcoal to-black/70 will-change-auto"
            >
              {/* Card Header with Image */}
              <div className="relative h-40">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Location Badge */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm border border-gray-700 rounded-md py-1 px-2 flex items-center space-x-1">
                  <MapPin size={12} className="text-neon-green" />
                  <span className="text-xs font-medium text-white">
                    {community.country}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4">
                {/* Community Name */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {community.name}
                </h3>

                {/* Tags Row */}
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-block px-2 py-1 text-xs rounded bg-neon-green/10 text-neon-green border border-neon-green/20">
                    {community.genre}
                  </span>

                  {/* Game Tags */}
                  {community.game !== "Multiple" &&
                    community.game
                      .split(", ")
                      .slice(0, 2)
                      .map((game) => (
                        <span
                          key={game}
                          className="inline-block px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                        >
                          {game}
                        </span>
                      ))}
                </div>

                {/* Members Count */}
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Users size={14} className="mr-1" />
                  <span>{community.members.toLocaleString()} members</span>
                </div>

                {/* Join Button */}
                <a
                  href={community.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 rounded-lg bg-neon-green text-charcoal font-medium text-center hover:opacity-90 active:scale-95 transition-all duration-150"
                >
                  Join Community
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 border border-gray-800 rounded-xl">
            <div className="inline-flex justify-center items-center w-16 h-16 mb-4 rounded-full bg-gray-900">
              <Gamepad size={32} className="text-gray-500" />
            </div>
            <h3 className="text-xl text-white mb-2">No communities found</h3>
            <p className="text-gray-400">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-charcoal border border-neon-green/30 text-neon-green rounded-lg hover:bg-neon-green/10 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunitiesPage;
