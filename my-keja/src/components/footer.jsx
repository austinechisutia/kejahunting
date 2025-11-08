import { Search } from "lucide-react";
import footerImg from "../assets/images/footer/footer.jpg";

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col justify-center">
      {/* Top Section with Image and Search */}
      <div
        className="relative h-84 bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
            backgroundImage: `url(${footerImg})`,
        }}
      >
        <div className="bg-black/60 absolute inset-0" /> {/* Overlay for readability */}
        <div className="relative z-10 w-full flex flex-col justify-center items-center px-4">
            <p className="mb-10 text-4xl font-bold">Find The Right <span className="font-galada text-cyan-600">Keja</span> Around Your Campus</p>
         <div className="flex w-fit">
             <input
            type="text"
            placeholder="Search houses near campus..."
            className="w-fit h-10 px-4 py-2 rounded-l-lg outline-none text-gray-800 bg-white"
          />
          <button className="bg-cyan-600 px-4 py-2 rounded-r-lg hover:bg-cyan-700 transition flex items-center gap-2">
            <Search size={18} />
            Search
          </button>
         </div>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text- text-2xl font-galada mb-3">KejaHunt</h3>
            <p>
              We connect students with affordable and comfortable houses near campus.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400">Listings</a></li>
              <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p>Email: info@campushomes.com</p>
            <p>Phone: +254 700 123 456</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
          © {new Date().getFullYear()} CampusHomes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
