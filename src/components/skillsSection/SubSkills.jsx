import React from 'react';

const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full z-0"></div>
      <img
        src={`${import.meta.env.BASE_URL}images/subSkills.jpg`}
        className="relative z-10 w-full h-auto"
      />
    </div>
  );
};

export default SubSkills;
