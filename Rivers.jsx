import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure react-router-dom is installed
import axios from 'axios';

const Rivers = () => {
  const [rivers, setRivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/waterbodies/rivers') 
      .then((response) => {
        setRivers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching rivers:', error);
      });
  }, []);

  const filteredRivers = rivers.filter((river) =>
    river.river_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
    
       {/* 🏞️ Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">Rivers of Karnataka</h1>

      {/* 🔙 Back to Water Bodies - Left aligned */}
      <div className="mb-4">
        <Link 
          to="/waterbodies" 
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          ← Back to Water Bodies
        </Link>
      </div>

     

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by river name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded-lg"
      />

      {/* 📋 Rivers Table */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-blue-200 text-black">ID</th>
            <th className="border px-4 py-2 bg-blue-200 text-black">River Name</th>
            <th className="border px-4 py-2 bg-blue-200 text-black">Capacity (m³/s)</th>
            <th className="border px-4 py-2 bg-blue-200 text-black">Forest ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredRivers.map((river) => (
            <tr key={river.id} className="text-black text-center">
              <td className="border px-4 py-2">{river.id}</td>
              <td className="border px-4 py-2">{river.river_name}</td>
              <td className="border px-4 py-2">{river.capacity}</td>
              <td className="border px-4 py-2">{river.forest_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rivers;
