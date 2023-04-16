import React from "react";
import { motion } from "framer-motion";

type Props = { text: string };

const AnimatedSkill = ({ text }: Props) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ twice: true }}
    >
      {letters.map((letter, index) => (
        <motion.p variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedSkill;
