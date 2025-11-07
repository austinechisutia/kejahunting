import React, { useEffect, useState } from "react";
import landingImage from "../assets/images/landing.jpg";
import studentImage from "../assets/images/student.png";

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);

    // Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("landing-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="landing-section" className="relative px-4 md:px-8 py-2 rounded-lg overflow-hidden">
      <img
        src={landingImage}
        alt="Landing"
        className="w-full h-screen object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-end justify-center md:justify-end px-4 md:px-0 pb-4 md:pb-0">
        <img
          src={studentImage}
          alt="Student"
          className={`w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2 max-w-lg h-auto max-h-[100vh] object-contain transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />
      </div>
    </div>
  );
}