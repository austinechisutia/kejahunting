import React from "react";
import "../index.css";

// Reusable Button Component
function Button({ text }) {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors px-4 py-2 rounded text-white">
      {text}
    </button>
  );
}

function Navbar() {
  // Central links and right-side buttons
  const navLinks = ["Home", "About", "Services","Blog", "Contact"];
  const actionButtons = ["Contact", "Login"];

  return (
    <nav className="flex items-center justify-between px-8 py-4 text-black">
      {/* Left section - Logo */}
      <div className="text-2xl font-galada">
        KejaHunt
      </div>

      {/* Center section - Navigation links */}
      <div className="flex space-x-6">
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

      {/* Right section - Buttons */}
      <div className="flex space-x-4">
        {actionButtons.map((btn) => (
          <Button key={btn} text={btn} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
