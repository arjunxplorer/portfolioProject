import React from 'react';
import { Camera, Film } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-serif">Joey</Link>

          <div className="flex space-x-8">


            <Link
              to="/videos"
              className={`flex items-center space-x-2 text-sm ${
                location.pathname === '/videos'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white transition-colors'
              }`}
            >
              <Film size={18} />
              <span>FILMS</span>
            </Link>

            <Link
              to="/photos"
              className={`flex items-center space-x-2 text-sm ${
                location.pathname === '/photos'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white transition-colors'
              }`}
            >
              <Camera size={18} />
              <span>PHOTOGRAPHS</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
