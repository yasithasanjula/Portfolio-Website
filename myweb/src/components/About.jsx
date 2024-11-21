import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 py-10" id="about">
      <h1 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
        About
      </h1>

      <div className="w-20 h-1 mb-8 bg-white"></div>

      <div className="max-w-4xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="mb-10 text-xl leading-relaxed md:text-2xl lg:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
