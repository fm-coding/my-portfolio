import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
    {
      job: "Full-Stack Developer",
      company: "Freelance & Personal Projects",
      date: "2023 - Present",
      responsibilities: [
        "Developed secure web apps with Java (Spring Boot) and React.",
        "Built RESTful APIs with authentication and role-based access.",
        "Designed responsive UI components for better UX.",
      ],
    },
    {
      job: "Software Developer",
      company: "E-Commerce & Flight Booking Projects",
      date: "2023 - Present",
      responsibilities: [
        "Automated flight booking with real-time seat tracking.",
        "Built an e-commerce platform with secure transactions.",
        "Integrated backend and frontend for seamless data flow.",
      ],
    },
    {
      job: "React Developer",
      company: "Portfolio & UI Development",
      date: "2024 - Present",
      responsibilities: [
        "Developed interactive portfolio websites with React.",
        "Implemented responsive and visually appealing UIs.",
        "Optimized front-end performance and API integration.",
      ],
    },
  ];
  

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;