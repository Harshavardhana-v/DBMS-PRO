import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link from React Router

const Streams = () => {
  const [streams, setStreams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/waterbodies/streams')  // Make sure this endpoint is ready
      .then((response) => {
        setStreams(response.data);
      })
      .catch((error) => {
        console.error('Error fetching streams:', error);
      });
  }, []);
  

  const filteredStreams = streams.filter((stream) =>
    stream.stream_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      {/* Back to Water Bodies Button */}
      <div className="mb-4">
        <Link to="/waterbodies" className="text-blue-600 font-semibold hover:underline">
          &#8592; Back to Water Bodies
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-blue-800 text-center mb-8">Forest Streams of Karnataka 🌊</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Stream Name..."
          className="border rounded-lg px-4 py-2 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Streams Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="bg-blue-300 text-blue-900">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Stream Name</th>
              <th className="py-3 px-4">Capacity (L/s)</th>
              <th className="py-3 px-4">Forest ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredStreams.map((stream) => (
              <tr key={stream.id} className="border-b hover:bg-blue-100 text-black text-center">
                <td className="py-2 px-4 text-center">{stream.id}</td>
                <td className="py-2 px-4 text-center">{stream.stream_name}</td>
                <td className="py-2 px-4 text-center">{stream.capacity}</td>
                <td className="py-2 px-4 text-center">{stream.forest_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Streams;
