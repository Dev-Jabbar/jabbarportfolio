import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="flex justify-center items-center absolute bottom-[200px] min-[2560px]:bottom-[200px] min-[2560px]:left-[200px] left-[100px] min-[3216px]:left-[300px] min-[3216px]:bottom-[300px]  "
    >
      <div className="absolute border [#333333] rounded-full md:h-[200px] min-[2560px]:h-[400px] min-[2560px]:w-[400px]  md:w-[200px] h-[50px] w-[50px] mt-52 animate-ping" />
      <div className="absolute border [#333333] rounded-full md:h-[300px] md:w-[300px] h-[100px] w-[100px] mt-52 min-[2560px]:w-[500px] min-[2560px]:h-[500px]     animate-ping" />
    </motion.div>
  );
}
