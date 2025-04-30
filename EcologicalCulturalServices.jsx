import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EcologicalCulturalServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/resources/ecological-cultural')  // Adjust endpoint if necessary
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ecological and cultural services:', error);
      });
  }, []);

  // Filter services based on name
  const filteredServices = services.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">Ecological & Cultural Services</h1>

      {/* 🔍 Search by Service Name */}
      <input
        type="text"
        placeholder="Search by Service Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {/* 📋 Services Table */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-black">ID</th>
            <th className="border px-4 py-2 text-black">Service Name</th>
            <th className="border px-4 py-2 text-black">Description</th>
            <th className="border px-4 py-2 text-black">Type</th>
            <th className="border px-4 py-2 text-black">Quantity</th>
            <th className="border px-4 py-2 text-black">Forest ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((service) => (
            <tr key={service.id} className="text-black text-center">
              <td className="border px-4 py-2">{service.id}</td>
              <td className="border px-4 py-2">{service.service_name}</td>
              <td className="border px-4 py-2">{service.description}</td>
              <td className="border px-4 py-2">{service.service_type}</td>
              <td className="border px-4 py-2">{service.quantity}</td>
              <td className="border px-4 py-2">{service.forest_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EcologicalCulturalServices;
