import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/index";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        durations: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariables = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-6 py-10" id="experience">
      <h2 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
        Work Experience
      </h2>

      <div className="w-20 h-1 mb-8 bg-white"></div>

      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div key="index" variants={childVariables}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="p-4 mb-2 text-sm md:w-1/4 md:mb-0">
                {experience.yearRange}
              </div>

              <div className="mb-10 md:w-3/4">
                <div className="max-w-3xl p-3 rounded-lg backdrop-blur-3xl bg-stone-600/10">
                  <h2 className="mb-2 text-xl">{experience.title}</h2>
                  <p className="mb-4 text-sm italic">{experience.location}</p>
                  <ul className="space-y-2 list-disc list-inside">
                    {experience.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
