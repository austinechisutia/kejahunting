import React, { useState } from "react";
import Login from "./login.jsx";


// Reusable Button Component
function Button({ text }) {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors px-4 py-2 rounded text-white">
      {text}
    </button>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = ["Home","Houses", "About", "Services", "Blog", "Contact"];
  const actionButtons = ["Contact", "Login"];

  return (
    <nav className="px-8 py-4 text-black">
      <div className="flex items-center justify-between">
        {/* Left section - Logo */}
        <div className="text-2xl font-galada">
          KejaHunt
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Navigation - Center links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-cyan-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Navigation - Right buttons */}
        <div className="hidden md:flex space-x-4">
          {actionButtons.map((btn) => (
            <Button key={btn} text={btn} />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-cyan-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col space-y-2 pt-2">
            {actionButtons.map((btn) => (
              <Button key={btn} text={btn} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;