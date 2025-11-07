import "../index.css";

function Button({ text, isFirst }) {
  return (
    <button
      className={`bg-gray-300 hover:bg-gray-600 transition-colors px-4 py-2 rounded ${
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
    <div className="flex justify-start gap-4 px-8 py-2 font-cookie">
      {buttonLabels.map((label, index) => (
        <Button key={label} text={label} isFirst={index === 0} />
      ))}
    </div>
  );
}
