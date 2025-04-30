import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from './logo.png'; // replace with the path to your logo image

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-green-700 text-white px-4 py-3 shadow-md">
        <div className="flex items-center space-x-3">
          <img src={logoImg} alt="Logo" className="h-10 mr-4" /> {/* Logo on the left */}
          <span className="text-xl font-bold">Forest Harmony</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
          <Link to="/Forests" className="hover:text-green-200">Forests</Link>
          <Link to="/animals" className="hover:text-green-200">Animals</Link>
          <Link to="/waterbodies" className="hover:text-green-200">Water Bodies</Link>
        </nav>
      </header>

      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-800">Forest Resources</h1>
        <p className="text-gray-700 mt-2 text-lg">Explore the natural wealth of Karnataka's forests 🌳</p>
      </div>

      {/* Clickable Resource Divs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-10">
        {[ 
          { name: 'Timber Resources 🌲', path: '/timber', color: 'bg-green-300' },
          { name: 'Non-Timber Forest Products 🍯', path: '/non-timber', color: 'bg-yellow-300' },
          { name: 'Ecological & Cultural Services 🌍', path: '/ecological-cultural', color: 'bg-emerald-300' }
        ].map((item) => (
          <Link to={item.path} key={item.name}>
            <div className={`${item.color} p-6 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer text-center`}>
              <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Descriptive Paragraphs */}
      <div className="max-w-4xl mx-auto px-6 text-gray-800 text-lg space-y-4 pb-16">
        <p>
          🌳 **Karnataka's forests are a rich and diverse source of natural resources** that play a vital role in both the environment and the livelihoods of local communities. From towering trees to the smallest of plants, these forests offer a wealth of resources that are crucial for ecological balance and sustainable development.
        </p>
        <p>
          🌲 **Timber Resources** such as teak, rosewood, and sandalwood are highly valued for construction, furniture-making, and craftsmanship. These forests not only provide timber but also a range of non-timber products like 🍯 honey, bamboo, medicinal plants, and gums that are essential for traditional practices and local economies.
        </p>
        <p>
          🌍 **Ecological and Cultural Services** provided by Karnataka's forests are immeasurable. They help regulate the climate, conserve water, prevent soil erosion, and store carbon. In addition, sacred groves and forest areas play an important cultural and spiritual role in local communities, protecting both the environment and cultural heritage.
        </p>
        <p>
          🐘 **Wildlife & Biodiversity** are another critical resource found in these forests. Karnataka is home to a variety of endangered species like tigers, elephants, and leopards, making the forests crucial for both conservation and eco-tourism. Their protection is essential not only for biodiversity but also for fostering awareness about wildlife conservation.
        </p>
      </div>
    </div>
  );
};

export default Resources;
