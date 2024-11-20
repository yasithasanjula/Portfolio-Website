import { useState } from "react";
import { LINKS } from "../constants/index"; // Correct import path
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto md:my-2 bg-stone-950/30 md:rounded-xl backdrop-blur-lg">
        <div className="text-lg font-semibold text-white uppercase">
          <a href="/">Yasitha Sanjula Herath</a>
        </div>
        <div className="hidden space-x-8 md:flex">
          {(LINKS || []).map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white transition duration-300 hover:text-stone-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus-outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col max-w-6xl p-2 mx-auto space-y-4 rounded-lg md:hidden bg-stone-950/30 backdrop-blur-xl">
          {(LINKS || []).map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white transition duration-300 hover:text-stone-400"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
