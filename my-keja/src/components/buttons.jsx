import React from "react";

function Button({ text, isFirst }) {
  return (
    <button
      className={`bg-gray-300 hover:bg-gray-600 transition-colors px-4 py-2 rounded whitespace-nowrap ${
        isFirst ? "text-cyan-400" : "text-black"
      }`}
    >
      {text}
    </button>
  );
}

export default function ButtonGroup() {
  const buttonLabels = ["All", "Two-Bedroom", "One-Bedroom", "Bedsitter", "Singles"];

  return (
    <div className="px-4 md:px-8 py-2 font-cookie">
      {/* Desktop view - horizontal layout */}
      <div className="hidden md:flex justify-start gap-4">
        {buttonLabels.map((label, index) => (
          <Button key={label} text={label} isFirst={index === 0} />
        ))}
      </div>

      {/* Mobile view - scrollable horizontal layout */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {buttonLabels.map((label, index) => (
            <Button key={label} text={label} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}