'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Categories', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">PWA BlogHub</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-gray-800 dark:text-white">
            <div className="w-6 h-1 bg-gray-800 dark:bg-white mb-1 rounded transition" />
            <div className="w-6 h-1 bg-gray-800 dark:bg-white mb-1 rounded transition" />
            <div className="w-6 h-1 bg-gray-800 dark:bg-white rounded transition" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3 transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
