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
    <nav className="fixed top-0 w-full z-50 bg-orange-500 shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-20">
        <NavbarLogo />

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center space-x-8 mr-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                className="text-white font-medium hover:text-orange-200 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="ml-4 bg-white text-orange-500 py-2 px-6 rounded-full font-semibold hover:bg-orange-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Hire Me
          </a>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            className="text-2xl text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 py-6 bg-orange-500 shadow-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                onClick={closeMenu}
                className="text-white text-lg font-medium hover:text-orange-200 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-white text-orange-500 py-2 px-6 rounded-full font-semibold hover:bg-orange-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Hire Me
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbarmain;
