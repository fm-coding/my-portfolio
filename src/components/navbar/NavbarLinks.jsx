import React from "react";

const NavbarLinks = ({ onLinkClick }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (onLinkClick) onLinkClick(); // Close mobile menu after click
  };

  return (
    <ul className="flex flex-col sm:flex-col lg:flex-row gap-6 text-white font-semibold text-lg">
      <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-cyan transition-all">About</li>
      <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-cyan transition-all">Skills</li>
      <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-cyan transition-all">Contact</li>
    </ul>
  );
};

export default NavbarLinks;
