import React from 'react';
import { Github, Twitter, Linkedin, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-charcoal border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Gamepad2 className="h-8 w-8 text-neon-green" />
              <span className="ml-2 text-xl font-bold">Gaming Africa</span>
            </div>
            <p className="text-gray-400">
              Your premier source for African gaming news and culture.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-green">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-green">Console Gaming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green">PC Gaming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green">Mobile Gaming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green">Esports</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-green">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Gaming Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;