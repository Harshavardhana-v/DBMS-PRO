import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './logo.png';
import { FaTree, FaPaw, FaWater, FaLeaf } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Animals', path: '/animals' },
    { name: 'Water Bodies', path: '/waterbodies' },
    { name: 'Resources', path: '/resources' },
    { name: 'Forests', path: '/Forests' },
  ];

  const cards = [
    { title: 'Animals', path: '/animals', color: 'bg-green-400', icon: <FaPaw className="text-white text-4xl" /> },
    { title: 'Water Bodies', path: '/waterBodies', color: 'bg-blue-400', icon: <FaWater className="text-white text-4xl" /> },
    { title: 'Resources', path: '/resources', color: 'bg-yellow-400', icon: <FaLeaf className="text-white text-4xl" /> },
    { title: 'Forests', path: '/Forests', color: 'bg-emerald-500', icon: <FaTree className="text-white text-4xl" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">
      {/* Navbar */}
      <nav className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">Forest Harmony</span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="hover:text-green-200 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-green-700 px-4 py-3 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-white hover:text-green-200" onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Forest Harmony Dashboard</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            "Forests are the lungs of our planet, nurturing biodiversity and offering balance to mankind.
            In their shelter lies our past, present, and future. Let's cherish the bond between man and nature."
          </p>
        </header>

        

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`cursor-pointer ${card.color} rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transform transition duration-300`}
              onClick={() => navigate(card.path)}
            >
              <div className="flex items-center gap-4">
                {card.icon}
                <h2 className="text-2xl font-bold text-white">{card.title}</h2>
              </div>
              <p className="text-white mt-3">Click to explore {card.title.toLowerCase()} details.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
