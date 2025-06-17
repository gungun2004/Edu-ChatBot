import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
const Navbar1 = ({ user = { avatarUrl: '/default-avatar.png', email: 'user@example.com' } }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.G5Z5KqW9wN-2hH9EqFhiDQAAAA&pid=Api&P=0&h=180"
            alt="Logo"
            className="h-11 w-11 rounded-full"
          />
          <span className="text-blue-800 font-bold text-xl">EduGO</span>
        </div>

       <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
        
          >
            <FaCircleUser className="h-8 w-10 text-white-500" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="px-4 py-2 text-sm text-gray-700">
                {user.email}
              </div>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
              >
                View Profile
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
