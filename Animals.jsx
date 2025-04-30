import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'; // You can replace this with any icon you like
import logoImg from './logo.png'; // replace with the path to your logo image

const Animals = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Hamburger Navbar */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white bg-green-800 p-2 rounded"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`bg-green-800 text-white p-6 h-full w-64 fixed md:static transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="Logo" className="h-10 mr-4" /> {/* Logo on the left */}
            <h1 className="text-2xl font-bold">Forest Harmony</h1>
          </div>
        </div>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-green-200">Resources</Link>
          </li>
          <li>
            <Link to="/waterbodies" className="hover:text-green-200">Water Bodies</Link>
          </li>
          <li>
            <Link to="/forests" className="hover:text-green-200">Forests</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-8 overflow-y-auto"> {/* Adjust margin for the main content */}
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-green-800">Animal Records</h2>
        </div>

        {/* Animal Category Divs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ml-0">
          <Link
            to="/land-animals"
            className="cursor-pointer bg-green-300 p-6 text-white rounded-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Land Animals</h3>
            <p>Click to see land animals' population, species, and forest ID.</p>
          </Link>

          <Link
            to="/water-animals"
            className="cursor-pointer bg-blue-300 p-6 text-white rounded-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Water Animals</h3>
            <p>Click to see water animals' population, species, and forest ID.</p>
          </Link>

          <Link
            to="/air-animals"
            className="cursor-pointer bg-yellow-300 p-6 text-white rounded-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Air Animals</h3>
            <p>Click to see air animals' population, species, and forest ID.</p>
          </Link>
        </div>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h4 className="text-xl font-semibold text-green-800 mb-2">🌿 Land Animals in Karnataka</h4>
            <p className="text-white">
              Karnataka is home to a wide variety of land animals 🐘🦌, including majestic elephants, wild boars, leopards, and Indian gaurs. These species roam freely in forests like Bandipur and Nagarhole. The dense vegetation and diverse landscapes provide the perfect habitat for these animals to thrive 🏞️. Conservation efforts in the region help protect endangered species and ensure ecological balance ⚖️.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-800 mb-2">🌊 Water Animals in Karnataka</h4>
            <p className="text-white">
              Karnataka’s rivers and reservoirs support an amazing range of aquatic life 🐟🦀. From freshwater turtles to different fish species, and even crocodiles in some reserves, the water ecosystems are rich and vibrant 💧. Sanctuaries such as Ranganathittu are known for nurturing aquatic biodiversity, contributing to both environmental and economic health of the region.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-yellow-700 mb-2">🕊️ Air Animals in Karnataka</h4>
            <p className="text-white">
              The skies of Karnataka are graced by a spectacular array of birds and flying creatures 🦅🦜. From peacocks and parakeets to migratory birds like storks and herons, the forests and wetlands provide safe nesting grounds 🌳. Birdwatchers and nature lovers find paradise in parks like Kudremukh and Bhadra. Karnataka's avian diversity is a vital part of its forest ecosystem 🌿.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animals;
