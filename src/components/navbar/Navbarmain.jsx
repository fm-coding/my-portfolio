import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const Navbarmain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <NavbarLogo />
        
        {/* Navbar Links aligned to the right with proper spacing */}
        <div className="hidden lg:block ml-auto">
          <NavbarLinks />
        </div>
        
        <NavbarBtn />
      </div>

      {/* Hamburger button */}
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
        <button
          className={`text-2xl p-3 border border-orange rounded-full text-white transition-transform duration-300 ${
            menuOpen ? "rotate-90" : ""
          }`}
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-[80px] right-4 sm:right-0 sm:left-0 bg-black border border-orange rounded-xl shadow-lg z-50 lg:hidden px-6 py-4"
          >
            <NavbarLinks onLinkClick={closeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbarmain;
