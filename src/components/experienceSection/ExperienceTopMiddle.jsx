import React from 'react';

const ExperienceTopMiddle = () => {
  return (
    <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
      <img
        src={`${import.meta.env.BASE_URL}images/experience-image.png`}
        className="w-full h-auto"
      />
    </div>
  );
};

export default ExperienceTopMiddle;
