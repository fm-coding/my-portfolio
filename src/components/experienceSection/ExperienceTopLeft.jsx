import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
    return (
      <div className="flex flex-col gap-6 w-[300px] text-white" >
        <p className="text-orange font-bold uppercase text-3xl font-special text-center">
          Since 2023
        </p>
        <div className="flex justify-center items-center gap-4">
          <ExperienceInfo number="3" text="Years" />
          <p className="font-bold text-6xl text-lightBrown">-</p>
          <ExperienceInfo number="10+" text="Websites" />
        </div>
        <p className="text-center">
        I have been actively working with Java (Spring Boot), React, MySQL, and JavaScript since 2023, <br />
        developing secure and scalable applications while refining my expertise in full-stack development and API integration
        </p>
        
      </div>
    );
  };

export default ExperienceTopLeft;