import React from "react";
import Navbar from "./components/Navbar.jsx";
import Buttons from "./components/buttons.jsx";
import Hero from "./components/hero.jsx";
import Hostel from "./components/hostels.jsx";
import Footer from "./components/footer.jsx";
import HowItWorks from "./components/howItWorks.jsx";
import About from "./components/about.jsx"; 
import Login from "./components/login.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Buttons/>
      <Hero />
      <About />
      <Hostel />
      <HowItWorks />
      <Footer />

      
      {/* Other components can be added here */}
    </div>
    
  );
}

export default App;