import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className='text-white'>I am Faisal Mohamed a passionate software developer with <br />
         expertise in Java (Spring Boot), React, MySQL, Python, and JavaScript.<br />
         I thrive on building secure, scalable, and efficient applications, blending strong backend <br />
          logic with dynamic frontend experiences. With a keen eye for problem-solving and a commitment <br /> 
          to continuous learning, I embrace new technologies and best practices to deliver high-quality software <br />
           solutions. I take pride in writing clean, maintainable code and enjoy collaborating on impactful projects <br />
            that enhance user experiences.</p>
            <button
  onClick={() => window.open("https://github.com/fm-coding", "_blank")}
  className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
>
  My Projects
</button>
    </div>
  );
};

export default AboutMeText;