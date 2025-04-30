import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/animals/land')  // Adjust the endpoint if necessary
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching land animals:', error);
      });
  }, []);

  // Filter animals based on the search term
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.species.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="p-8 min-h-screen flex justify-center"
      style={{
        backgroundImage: 'url(.jpg)',  // Specify the path to your background image
        backgroundSize: 'cover', // Make the background image cover the whole screen
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className="max-w-screen-lg w-full bg-white bg-opacity-80 p-8 rounded-md shadow-lg">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="px-4 py-2 border rounded-md w-full"
            placeholder="Search for a land animal..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mb-4 text-blue-800 font-semibold underline"
        >
          Back to Animals
        </button>

        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Land Animals Records</h2>

        {/* Animal Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-blue-300 bg-white shadow-lg rounded-md">
            <thead className="bg-blue-300 text-white">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Species</th>
                <th className="px-4 py-2 border">Population</th>
                <th className="px-4 py-2 border">Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredAnimals.map((animal, index) => (
                <tr key={animal.id || index} className="text-black text-center">
                  <td className="px-4 py-2 border">{animal.id}</td>
                  <td className="px-4 py-2 border">{animal.name}</td>
                  <td className="px-4 py-2 border">{animal.species}</td>
                  <td className="px-4 py-2 border">{animal.population}</td>
                  <td className="px-4 py-2 border">{animal.forest_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandAnimals;
