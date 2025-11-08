import React from "react";
import Navbar from "./components/Navbar.jsx";
import Buttons from "./components/buttons.jsx";
import Hero from "./components/hero.jsx";
import Hostel from "./components/hostels.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Buttons/>
      <Hero />
      <Hostel />

      
      {/* Other components can be added here */}
    </div>
    
  );
}

export default App;