import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarLogo from "./NavbarLogo";

const Navbarmain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "About", to: "#about" },
    { name: "Skills", to: "#skills" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a] shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-20">
        <NavbarLogo />

        {/* Large screen nav */}
        <ul className="hidden md:flex items-center space-x-8 mr-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                className="text-white hover:text-orange transition"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="ml-4 bg-orange text-white py-2 px-5 rounded-full hover:bg-dark-orange transition"
          >
            Hire Me
          </a>
        </ul>

        {/* Mobile toggler */}
        <div className="md:hidden">
          <button
            className="text-2xl text-orange focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 py-6 bg-[#0f172a] shadow-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                onClick={closeMenu}
                className="text-white text-lg hover:text-orange transition"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-orange text-white py-2 px-5 rounded-full hover:bg-dark-orange transition"
          >
            Hire Me
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbarmain;
