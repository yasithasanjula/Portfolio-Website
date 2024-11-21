import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <section className="px-6 py-10" id="work">
      <h1 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
        Work
      </h1>
      <div className="w-20 h-1 mb-8 bg-white"></div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg h-[500px] transition transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300"
            />

            <div className=""></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
