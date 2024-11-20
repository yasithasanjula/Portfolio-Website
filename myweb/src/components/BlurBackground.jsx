import { motion } from "framer-motion";

const circleVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: [0, 100, 0],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      repeat: Infinitiy,
      ease: "easeInOut",
    },
  },

  animate2: {
    scale: [1, 1.1, 1],
    x: [0, 120, 0],
    y: [0, -60, 0],
    transition: {
      duration: 2,
      repeat: Infinitiy,
      ease: "easeInOut",
    },
  },

  animate3: {
    scale: [1, 1.3, 1],
    x: [0, 140, 0],
    y: [0, 70, 0],
    transition: {
      duration: 3,
      repeat: Infinitiy,
      ease: "easeInOut",
    },
  },

  animate4: {
    scale: [1, 1.4, 1],
    x: [0, 160, 0],
    y: [0, -80, 0],
    transition: {
      duration: 4,
      repeat: Infinitiy,
      ease: "easeInOut",
    },
  },

  animate5: {
    scale: [1, 1.5, 1],
    x: [0, 180, 0],
    y: [0, 90, 0],
    transition: {
      duration: 3,
      repeat: Infinitiy,
      ease: "easeInOut",
    },
  },

  animate6: {
    scale: [1, 1.6, 1],
    x: [0, 200, 0],
    y: [0, -100, 0],
    transition: {
      duration: 3,
      repeat: Infinitiy,
      ease: "easeInOut",
    },
  },
};

const BlurBackground = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10
  pointer-events-none flex justify-center items-center filter blur-[100px]"
    >
      <motion.div
        className="bg-yellow-500 w-[350px] h-[250px] rounded-full absolute"
        variants={circleVariants}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="bg-orange-500 w-[350px] h-[250px] rounded-full absolute"
        variants={circleVariants}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="bg-green-500 w-[350px] h-[250px] rounded-full absolute"
        variants={circleVariants}
        animate="animate3"
      ></motion.div>
    </div>
  );
};

export default BlurBackground;
