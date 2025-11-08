import React, { useState } from "react";

// Reusable Button Component
// CHANGE: Added onClick prop to handle button clicks
function Button({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-cyan-500 hover:bg-cyan-600 transition-colors px-4 py-2 rounded text-white"
    >
      {text}
    </button>
  );
}

// CHANGE: New LoginModal component added - displays the login popup
function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    // Add your login logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors px-4 py-2 rounded text-white font-medium"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-cyan-500 hover:text-cyan-600">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // CHANGE: Added state to control login modal visibility
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const navLinks = ["Home", "Houses", "About", "Services", "Blog", "Contact"];

  // CHANGE: Added function to handle button clicks and open login modal
  const handleButtonClick = (btnText) => {
    if (btnText === "Login") {
      setIsLoginOpen(true);
    } else if (btnText === "Contact") {
      // Handle contact button click
      console.log("Contact clicked");
    }
  };

  return (
    <>
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
          {/* CHANGE: Added onClick handlers to buttons */}
          <div className="hidden md:flex space-x-4">
            <Button text="Contact" onClick={() => handleButtonClick("Contact")} />
            <Button text="Login" onClick={() => handleButtonClick("Login")} />
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
              {/* CHANGE: Added onClick handlers to mobile buttons */}
              <Button text="Contact" onClick={() => handleButtonClick("Contact")} />
              <Button text="Login" onClick={() => handleButtonClick("Login")} />
            </div>
          </div>
        </div>
      </nav>

      {/* CHANGE: Added LoginModal component that opens when Login button is clicked */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Navbar;