import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


export const Herotext = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        A Software Engineer</motion.h2>
      <motion.h1 variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase">
        Faisal
        Mohamed
      </motion.h1>
      <motion.p  variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white">
      A passionate software developer with a strong love for building 
      <br />
         efficient, scalable, and user-friendly applications. I enjoy working on both 
         <br />
         frontend and backend development, ensuring seamless user experiences
         </motion.p>
    </div>
  );
};

export default Herotext;
