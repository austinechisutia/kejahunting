import React from "react";
import "../index.css";  
import house1 from "../assets/images/houses/house1.jpg";
import house2 from "../assets/images/houses/house2.jpg";
// 👉 Import more house images as needed
import { MapPin, Home, Banknote, Wallet, Navigation } from "lucide-react";

export default function Houses() {
  const houses = [
    {
      id: 1,
      image: house1,
      price: "KSh 25,000/month",
      location: "Kisumu, Nyamasaria",
      size: "2 Bedroom",
      distance: "1.2 km from campus",
    },
    {
      id: 2,
      image: house2,
      price: "KSh 18,000/month",
      location: "Kisumu, Mamboleo",
      size: "1 Bedroom",
      distance: "0.8 km from campus",
    },
    {
      id: 3,
      image: house1,
      price: "KSh 12,000/month",
      location: "Kisumu, Nyamasaria",
      size: "Bedsitter",
      distance: "0.5 km from campus",
    },
     {
      id: 4,
      image: house1,
      price: "KSh 12,000/month",
      location: "Kisumu, Nyamasaria",
      size: "Bedsitter",
      distance: "0.5 km from campus",
    },
     {
      id: 5,
      image: house1,
      price: "KSh 12,000/month",
      location: "Kisumu, Nyamasaria",
      size: "Bedsitter",
      distance: "0.5 km from campus",
    },
     {
      id: 6,
      image: house1,
      price: "KSh 25,000/month",
      location: "Kisumu, Nyamasaria",
      size: "2 Bedroom",
      distance: "1.2 km from campus",
    },
    {
      id: 7,
      image: house2,
      price: "KSh 18,000/month",
      location: "Kisumu, Mamboleo",
      size: "1 Bedroom",
      distance: "0.8 km from campus",
    },
    {
      id: 8,
      image: house1,
      price: "KSh 12,000/month",
      location: "Kisumu, Nyamasaria",
      size: "Bedsitter",
      distance: "0.5 km from campus",
    },

  ];

  const details = [
    { icon: Banknote, value: "price", color: "text-cyan-600 font-semibold" },
    { icon: MapPin, value: "location", color: "text-gray-700" },
    { icon: Home, value: "size", color: "text-gray-600 text-sm" },
    { icon: Navigation, value: "distance", color: "text-gray-600 text-sm" },
  ];

  return (
    <section className="px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-poppins font-bold mb-8 text-start font-poppins">
        Available Houses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {houses.map((house) => (
          <div
            key={house.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform hover:scale-105"
          >
            <img
              src={house.image}
              alt={house.location}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              {details.map(({ icon: Icon, value, color }) => (
                <div key={value} className={`flex items-center ${color}`}>
                  <Icon className="w-5 h-5 mr-2" />
                  {house[value]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
