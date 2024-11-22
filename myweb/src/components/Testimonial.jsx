import { motion } from "framer-motion";
import { TESTIMONIALS } from "../constants";

const Testimonial = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.5 },
    }),
  };
  return (
    <section className="min-h-screen px-6 py-10" id="testimonials">
      <h1 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
        What People Are Saying
      </h1>
      <div className="w-20 h-1 mb-8 bg-white"></div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative h-full p-6 rounded-lg backdrop-blur-3xl bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={childVariants}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 mr-4 rounded-full"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                <p className="text-sm font-light">{testimonial.title}</p>
              </div>
            </div>
            <p className="leading-relaxed">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
