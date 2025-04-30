import React, { useState } from 'react';
import forest from './forest.jpg';


import { useNavigate } from 'react-router-dom'; // ✅ Import navigation hook



const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // ✅ Initialize navigator

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, email, password };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert(result.message);

      // ✅ Redirect to login if registration was successful
      if (result.success) {
        navigate('/login');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong. Try again!');
    }
  };

  return (
    <div
      className="min-h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${forest})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>

        <label className="block mb-2 text-sm text-gray-600">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded bg-white text-black border-gray-300 mb-4"
          placeholder="Enter your username"
          required
        />

        <label className="block mb-2 text-sm text-gray-600">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded bg-white text-black border-gray-300 mb-4"
          placeholder="Enter your email"
          required
        />

        <label className="block mb-2 text-sm text-gray-600">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded bg-white text-black border-gray-300 mb-6"
          placeholder="Enter password"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
