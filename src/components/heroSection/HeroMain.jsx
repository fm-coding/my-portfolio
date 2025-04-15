import React from 'react'
import { Herotext } from './HeroText'
import { HeroPic } from './HeroPic'

export const HeroMain = () => {
  return (
    <section id="projects" className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <Herotext />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
