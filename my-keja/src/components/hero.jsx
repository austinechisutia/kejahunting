import landingImage from "../assets/images/landing.jpg";

export default function Landing() {
  return (
    <div className="relative px-8 py-2 rounded-lg">
      <img
        src={landingImage}
        alt="Landing"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-40 p-4 rounded">
        </h1>
      </div>
    </div>
  );
}

