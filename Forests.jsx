import React from 'react';
import { Link } from 'react-router-dom';
import forestImg from './forest.jpg'; // default forest image
import logoImg from './logo.png'; // your logo image path

const forestsData = [
  { id: 1, name: "Bandipur", location: "Chamarajanagar" },
  { id: 2, name: "Dandeli", location: "Uttara Kannada" },
  { id: 3, name: "Nagarhole", location: "Kodagu" },
  { id: 4, name: "Bannerghatta", location: "Bangalore" },
  { id: 5, name: "Bhadra", location: "Chikkamagaluru" },
  { id: 6, name: "Kudremukh", location: "Chikkamagaluru" },
];

const Forests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200">

      {/* 🧭 Navbar */}
      <nav className="bg-green-700 text-white p-4 flex justify-between items-center font-semibold text-lg shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-10 mr-4" /> {/* Adjust the logo size */}
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-10">
          <Link to="/dashboard" className="hover:text-green-300">Dashboard</Link>
          <Link to="/resources" className="hover:text-green-300">Resources</Link>
          <Link to="/animals" className="hover:text-green-300">Animals</Link>
          <Link to="/waterbodies" className="hover:text-green-300">Water Bodies</Link>
        </div>
      </nav>

      {/* 🏞️ Forests Section */}
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-green-800 mb-10 text-center drop-shadow-lg">Forests of Karnataka</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {forestsData.map((forest) => (
            <Link
              key={forest.id}
              to={`/forests/${forest.id}`}
              className="bg-white rounded-2xl shadow-lg border-2 border-green-600 transform hover:scale-105 transition-transform duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center rounded-t-2xl" 
                style={{ backgroundImage: `url(${forestImg})` }}
              ></div>
              <div className="p-6 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-green-700 mb-2">{forest.name} <span className="text-gray-500 text-lg">({forest.id})</span></h2>
                <p className="text-gray-600 font-medium">📍 {forest.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forests;
