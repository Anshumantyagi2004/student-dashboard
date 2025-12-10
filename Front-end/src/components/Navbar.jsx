import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-10">
      <div className="text-xl font-bold text-indigo-600">
        <Link to="/">Student Records</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/Dashboard" className="hover:text-indigo-600">Dashboard</Link>
      </div>
      <div className="space-x-2">
            <Link to="/login" className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700">
              Login
            </Link>
            <Link to="/signup" className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700">
              Sign Up
            </Link>
      </div>
    </nav>
  );
}
