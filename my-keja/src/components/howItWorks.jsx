import { Search, Home, MapPin, Send } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search size={50} />,
      title: "Step 1",
      text: "Find houses near your campus using filters that match your needs.",
    },
    {
      icon: <Home size={50} />,
      title: "Step 2",
      text: "View different options, prices, and amenities side by side.",
    },
    {
      icon: <Send size={50} />,
      title: "Step 3",
      text: "Contact the landlord and move into your new place easily.",
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-3">How It Works</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Simple steps to help you find your perfect campus home quickly and easily.
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-center w-40 h-40 rounded-full bg-cyan-100 text-cyan-600 mb-4">
              {step.icon}
            </div>
            <h3 className="text-sm text-cyan-600 font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
