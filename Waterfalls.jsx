import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Waterfalls = () => {
  const [waterfalls, setWaterfalls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/waterbodies/waterfalls')  // Make sure this endpoint is ready
      .then((response) => {
        setWaterfalls(response.data);
      })
      .catch((error) => {
        console.error('Error fetching waterfalls:', error);
      });
  }, []);

  const filteredWaterfalls = waterfalls.filter((waterfall) =>
    waterfall.waterfall_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">Forest Waterfalls of Karnataka 💧</h1>

      {/* Back to Water Bodies Button */}
      <div className="mb-4">
        <Link to="/waterbodies" className="text-blue-600 text-lg font-medium">
          &#8592; Back to Water Bodies Page
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Waterfall Name..."
          className="border rounded-lg px-4 py-2 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Waterfalls Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="bg-green-300 text-green-900">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Waterfall Name</th>
              <th className="py-3 px-4">Height (m)</th>
              <th className="py-3 px-4">Forest ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredWaterfalls.map((waterfall) => (
              <tr key={waterfall.id} className="border-b hover:bg-green-100 text-black text-center">
                <td className="py-2 px-4">{waterfall.id}</td>
                <td className="py-2 px-4">{waterfall.waterfall_name}</td>
                <td className="py-2 px-4">{waterfall.height}</td>
                <td className="py-2 px-4">{waterfall.forest_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Waterfalls;
