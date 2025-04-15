import React from "react";

function NavbarLogo() {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="cursor-pointer" onClick={scrollToHome}>
      <h1 className="text-white text-2xl sm:hidden md:block hover:text-orange-200 transition-all duration-300 font-bold">
        Faisal Mohamed
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block hover:text-orange-200 transition-all duration-300">
        FM
      </h1>
    </div>
  );
}

export default NavbarLogo;
