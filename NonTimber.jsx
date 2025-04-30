import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NonTimber = () => {
  const [nonTimberResources, setNonTimberResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/resources/non-timber')  // Adjust the endpoint if necessary
      .then((response) => {
        setNonTimberResources(response.data);
      })
      .catch((error) => {
        console.error('Error fetching non-timber resources:', error);
      });
  }, []);

  // Filter resources based on non_timber_name
  const filteredResources = nonTimberResources.filter((resource) =>
    resource.non_timber_name.toLowerCase().includes(searchTerm.toLowerCase())  // Case-insensitive search
  );

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">Non-Timber Resources</h1>

      {/* 🔍 Search by Non-Timber Name */}
      <input
        type="text"
        placeholder="Search by Non-Timber Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on change
        className="border p-2 mb-4 w-full"
      />

      {/* 📋 Non-Timber Table */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-black">ID</th>
            <th className="border px-4 py-2 text-black">Non-Timber Name</th>
            <th className="border px-4 py-2 text-black">Type</th>
            <th className="border px-4 py-2 text-black">Quantity</th>
            <th className="border px-4 py-2 text-black">Forest ID</th> {/* Showing Forest ID */}
          </tr>
        </thead>
        <tbody>
          {filteredResources.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center border px-4 py-2">No non-timber resources found.</td>
            </tr>
          ) : (
            filteredResources.map((resource) => (
              <tr key={resource.id} className="text-black text-center">
                <td className="border px-4 py-2">{resource.id}</td>
                <td className="border px-4 py-2">{resource.non_timber_name}</td> {/* Non-Timber Name */}
                <td className="border px-4 py-2">{resource.type}</td>
                <td className="border px-4 py-2">{resource.quantity}</td>
                <td className="border px-4 py-2">{resource.forest_id}</td> {/* Forest ID */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NonTimber;
