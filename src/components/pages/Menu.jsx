// components/Menu.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-black text-white rounded-md focus:outline-none shadow"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0F0F0F] text-white shadow-md z-40 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="p-6 text-lg font-bold border-b border-gray-700">
          ⚡ RandomApp
        </div>
        <nav className="flex flex-col gap-4 p-6 text-base">
          <Link to="/" className="hover:text-[#00FF85] transition">Random Number Pulse</Link>
          <Link to="/random-ball" className="hover:text-[#00FF85] transition">Random Number Ball</Link>
          <Link to="/stats" className="hover:text-[#00FF85] transition">Statistics</Link>
          <Link to="/about" className="hover:text-[#00FF85] transition">About</Link>
          <Link to="/chess-board" className="hover:text-[#00FF85] transition">Chess Board</Link>
        </nav>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
        />
      )}
    </>
  );
};

export default NavMenu;
