import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link from React Router

const Ponds = () => {
  const [ponds, setPonds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/waterbodies/ponds')  // Ensure this endpoint is working
      .then((response) => {
        setPonds(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ponds:', error);
      });
  }, []);
  

  const filteredPonds = ponds.filter((pond) =>
    pond.pond_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-teal-50 p-6">
      {/* Back to Water Bodies Button */}
      <div className="mb-4">
        <Link to="/waterbodies" className="text-teal-600 font-semibold hover:underline">
          &#8592; Back to Water Bodies
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 text-center mb-8">Forest Ponds of Karnataka 🌊</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Pond Name..."
          className="border rounded-lg px-4 py-2 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Ponds Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="bg-teal-300 text-teal-900">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Pond Name</th>
              <th className="py-3 px-4">Capacity (M³)</th>
              <th className="py-3 px-4">Forest ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredPonds.map((pond) => (
              <tr key={pond.id} className="border-b hover:bg-teal-100 text-black text-center">
                <td className="py-2 px-4 text-center">{pond.id}</td>
                <td className="py-2 px-4 text-center">{pond.pond_name}</td>
                <td className="py-2 px-4 text-center">{pond.capacity}</td>
                <td className="py-2 px-4 text-center">{pond.forest_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ponds;
