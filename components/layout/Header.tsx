import React from 'react';

const accommodationTypes = [
  'Rooms',
  'Mansion',
  'Countryside',
  'Apartments',
  'Villas',
  'Cabins',
];

const Header: React.FC = () => (
  <header className="py-4 px-4 bg-white shadow flex flex-col gap-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/assets/placeholder.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold">ALXbnb</span>
      </div>
      {/* Search Bar */}
      <div className="flex-1 mx-8 max-w-xl">
        <input
          type="text"
          placeholder="Search destinations, properties..."
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Auth Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded bg-white border text-blue-600 hover:bg-blue-50">Sign In</button>
        <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Sign Up</button>
      </div>
    </div>
    {/* Accommodation Types */}
    <nav className="flex gap-4 justify-center border-t pt-2 text-sm text-gray-600">
      {accommodationTypes.map((type) => (
        <button key={type} className="hover:text-blue-600 transition-colors px-2 py-1 rounded hover:bg-blue-50">
          {type}
        </button>
      ))}
    </nav>
  </header>
);

export default Header; 