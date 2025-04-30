import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Reservoirs = () => {
  const [reservoirs, setReservoirs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/waterbodies/reservoirs')  // Endpoint for reservoirs
      .then((response) => {
        setReservoirs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reservoirs:', error);
      });
  }, []);

  const filteredReservoirs = reservoirs.filter((reservoir) =>
    reservoir.reservoir_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-indigo-50 p-6">
      <h1 className="text-3xl font-bold text-indigo-800 text-center mb-8">Reservoirs in Forest Areas 🌊</h1>

      {/* Back to Water Bodies Page */}
      <div className="mb-4">
        <Link to="/waterbodies" className="text-blue-600 text-lg font-medium">
          &#8592; Back to Water Bodies Page
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Reservoir Name..."
          className="border rounded-lg px-4 py-2 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Reservoirs Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Reservoir Name</th>
              <th className="py-3 px-4">Capacity (Million Cubic Meters)</th>
              <th className="py-3 px-4">Forest ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservoirs.map((reservoir) => (
              <tr key={reservoir.id} className="border-b hover:bg-indigo-100 text-black text-center">
                <td className="py-2 px-4">{reservoir.id}</td>
                <td className="py-2 px-4">{reservoir.reservoir_name}</td>
                <td className="py-2 px-4">{reservoir.capacity}</td>
                <td className="py-2 px-4">{reservoir.forest_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservoirs;
