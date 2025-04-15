import React, { useEffect } from "react";

const NavbarLinks = ({ onLinkClick }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (onLinkClick) onLinkClick(); // Close mobile menu after click
  };

  // Ensure smooth scrolling works properly on small screens
  useEffect(() => {
    const links = document.querySelectorAll('.navbar-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (onLinkClick) onLinkClick(); // Close mobile menu on link click
      });
    });
  }, [onLinkClick]);

  return (
    <ul className="flex flex-col sm:flex-col lg:flex-row gap-6 text-white font-semibold text-lg">
      <li
        onClick={() => scrollToSection("about")}
        className="navbar-link cursor-pointer hover:text-cyan transition-all"
      >
        About
      </li>
      <li
        onClick={() => scrollToSection("skills")}
        className="navbar-link cursor-pointer hover:text-cyan transition-all"
      >
        Skills
      </li>
      <li
        onClick={() => scrollToSection("contact")}
        className="navbar-link cursor-pointer hover:text-cyan transition-all"
      >
        Contact
      </li>
    </ul>
  );
};

export default NavbarLinks;
