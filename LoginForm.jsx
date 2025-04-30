import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import forest2 from './forest2.png'; // 🌲 Replace with your image path

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ Initialize the hook

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert('Login successful!');
      navigate('/dashboard'); // ✅ Navigate to Dashboard page
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${forest2})` }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-xl shadow-2xl w-full max-w-sm mx-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Login</h2>

        <form onSubmit={handleLogin}>
          <label className="block text-sm mb-1 text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <label className="block text-sm mb-1 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
