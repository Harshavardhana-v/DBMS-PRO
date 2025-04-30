import React from 'react';
import { Link } from 'react-router-dom';

const WaterBodies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-blue-700 text-white px-4 py-3 shadow-md">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold">Forest Harmony</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
          <Link to="/Forests" className="hover:text-blue-200">Forests</Link>
          <Link to="/resources" className="hover:text-blue-200">Resources</Link>
          <Link to="/animals" className="hover:text-blue-200">Animals</Link>
        </nav>
      </header>

      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-800">Forest Water Bodies of Karnataka</h1>
        <p className="text-gray-700 mt-2 text-lg">Discover the serene waters hidden in Karnataka's forests 💧🌳</p>
      </div>

      {/* Clickable Water Bodies Divs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-10">
        {[
          { name: 'Rivers 🏞️', path: '/rivers', color: 'bg-blue-300' },
          { name: 'Lakes 🏝️', path: '/lakes', color: 'bg-blue-200' },
          { name: 'Streams 🌊', path: '/streams', color: 'bg-sky-300' },
          { name: 'Ponds 🐟', path: '/ponds', color: 'bg-teal-200' },
          { name: 'Waterfalls 🌈', path: '/waterfalls', color: 'bg-indigo-200' },
          { name: 'Reservoirs 🚣‍♂️', path: '/reservoirs', color: 'bg-cyan-300' },
        ].map((item) => (
          <Link to={item.path} key={item.name}>
            <div className={`${item.color} p-6 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer text-center`}>
              <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Informative Paragraphs */}
      <div className="max-w-4xl mx-auto px-6 text-gray-800 text-lg space-y-4 pb-16">
        <p>
          🏞️ **Karnataka's forests are nurtured by a network of rivers like Kabini, Kali, and Tunga**, flowing through dense green valleys, sustaining life, and enriching biodiversity.
        </p>
        <p>
          🏝️ **Sparkling lakes and serene ponds** serve as vital habitats for aquatic life and offer peaceful retreats for birds and animals inside forest sanctuaries.
        </p>
        <p>
          🌊 **Streams and waterfalls** rush down the lush Western Ghats, creating breathtaking views and essential freshwater sources for flora and fauna.
        </p>
        <p>
          🚣‍♂️ **Reservoirs like Bhadra and Supa** not only generate hydroelectricity but also sustain rich ecosystems in the adjoining forests, helping communities and wildlife thrive together.
        </p>
        <p className="text-blue-700 font-semibold">
          🌳 Karnataka's forests and water bodies together weave a story of life, beauty, and harmony with nature — let's explore and protect them! 💙
        </p>
      </div>
    </div>
  );
};

export default WaterBodies;
