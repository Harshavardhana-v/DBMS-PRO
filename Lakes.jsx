import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import axios from 'axios';

const Lakes = () => {
  const [lakes, setLakes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/waterbodies/lakes') 
      .then((response) => {
        setLakes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching lakes:', error);
      });
  }, []);

  const filteredLakes = lakes.filter((lake) =>
    lake.lake_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      
      {/* 🏞️ Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">Lakes of Karnataka</h1>
      {/* 🔙 Back to Water Bodies - Left aligned */}
      <div className="mb-4">
        <Link 
          to="/waterbodies" 
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          ← Back to Water Bodies
        </Link>
      </div>

      

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by lake name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded-lg"
      />

      {/* 📋 Lakes Table */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-blue-200 text-black">ID</th>
            <th className="border px-4 py-2 bg-blue-200 text-black">Lake Name</th>
            <th className="border px-4 py-2 bg-blue-200 text-black">Capacity (in million liters)</th>
            <th className="border px-4 py-2 bg-blue-200 text-black">Forest ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredLakes.map((lake) => (
            <tr key={lake.id} className="text-black text-center">
              <td className="border px-4 py-2">{lake.id}</td>
              <td className="border px-4 py-2">{lake.lake_name}</td>
              <td className="border px-4 py-2">{lake.capacity}</td>
              <td className="border px-4 py-2">{lake.forest_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lakes;
