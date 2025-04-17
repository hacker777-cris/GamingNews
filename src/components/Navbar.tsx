"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Gamepad2,
  Search,
  Menu,
  X,
  Home,
  Layers,
  Info,
  MessageSquare,
  Bell,
  User,
  Users,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Categories", icon: Layers, path: "/categories" },
    { name: "Communities", icon: Users, path: "/communities" },
    { name: "About", icon: Info, path: "/about" },
    { name: "Contact", icon: MessageSquare, path: "/contact" },
  ];

  return (
    <nav className="bg-dark-charcoal/80 backdrop-blur-md sticky top-0 z-50 border-b border-neon-green/10">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="container mx-auto px-4"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="relative">
              <Gamepad2 className="h-8 w-8 text-neon-green" />
              <div className="absolute inset-0 bg-neon-green/20 blur-xl rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white">
              Africa <span className="text-neon-green">Esports</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className="nav-link flex items-center space-x-2 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-neon-green transition-colors" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-neon-green/10 rounded-full transition-colors relative group"
            >
              <Search className="h-5 w-5 text-gray-300 group-hover:text-neon-green" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 hover:bg-neon-green/10 rounded-full transition-colors relative group"
            >
              <Bell className="h-5 w-5 text-gray-300 group-hover:text-neon-green" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-neon-green rounded-full"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 hover:bg-neon-green/10 rounded-full transition-colors group"
            >
              <User className="h-5 w-5 text-gray-300 group-hover:text-neon-green" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-neon-green/10 rounded-full transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-neon-green" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </motion.button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-0 top-16 bg-dark-charcoal/80 backdrop-blur-md border-b border-neon-green/10 p-4"
            >
              <div className="container mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search gaming news..."
                    className="w-full pl-12 pr-4 py-3 bg-charcoal rounded-lg border border-gray-700 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-dark-charcoal/80 backdrop-blur-md"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center space-x-3 nav-link group"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 group-hover:text-neon-green transition-colors" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full btn-primary"
                  >
                    Sign In
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;

