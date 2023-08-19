import React from "react";
import Tilt from "react-parallax-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

import Image from "next/image";
import BackgroundCircles from "./BackgrroundCircles";

type Props = {};

const Hero2 = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi ,i'm ABDUL JABBAR",
      "i am a fullstack developer",
      "i am coding from space ",
      "A strong believer in proper coding patterns ",
      "I write clean and efficient codes..",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative 2xl:top-[80px]  overflow-y-hidden md:top-[56px] top-[45px] h-[97vh] w-screen md:h-[94vh] min350:h-[96vh] items-center justify-center flex ">
      <div className="w-screen xl:px-[220px] px-[10px] lg:px-[150px] min920:px-[100px]  md:px-[50px] min632:px-[50px] ">
        <div className="md:px-8 px-4 min-[2560px]:px-40 min-[2200px]:px-40 min-[3072px]:px-[250px]   relative  ">
          <motion.div
            className="absolute z-0 -bottom-14 -left-14 min-[2560px]:-bottom-[150px]  animate-spin-slow "
            initial={{ y: -800, scale: 0.1 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            <div className=" relative max-[320px]:w-[10rem] max-[320px]:h-[10rem]  w-[15rem] h-[15rem] min-[3216px]:h-[45rem] min-[3216px]:w-[45rem]  min-[2400px]:h-[35rem] min-[2400px]:w-[35rem]  lg:w-[20rem] lg:h-[20rem] 2xl:h-[25rem] 2xl:w-[25rem]    rounded-full overflow-hidden shadow-white shadow-blue-100 dark:shadow-5xl shadow-lg animate-spin-2 ">
              <Image
                className=" absolute w-full h-full object-cover"
                src="/earth.jpg"
                width={100}
                height={100}
                alt="earth"
              ></Image>
            </div>
          </motion.div>
          <BackgroundCircles />
          <Tilt tiltReverse>
            <motion.div className=" min-[3216px]:h-[1480px] min-[2880px]:h-[1200px] min-[1900px]:h-[800px]  min-[2400px]:h-[900px] h-[450px]  max-[320px]:h-[320px]  min-[2560px]:h-[1000px]     bg-white   bg-opacity-10 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm z-30  lg:h-[480px]  md:h-[400px]   min1440:h-[600px]  min-[500px]:h-80  2xl:h-[700px] ">
              <div className="flex min-[3216px]:h-[1480px] min-[2880px]:h-[1200px] min-[1900px]:h-[800px]  min-[2400px]:h-[900px] flex-col h-[450px]  max-[320px]:h-[320px]   min-[2560px]:h-[1000px]  min-[500px]:h-80 2xl:h-[700px]  items-center justify-evenly lg:h-[500px] md:h-[370px] min1440:h-[600px] ">
                <img
                  className="border z-10 h-[250px] max-[320px]:h-[150px] min-[3216px]:h-[800px] min-[3216px]:w-[1200px]  min-[500px]:h-44 min-[2880px]:w-[800px] min-[2880px]:h-[600px] min-[2560px]:h-[500px] min-[2560px]:w-[700px]  min-[500px]:w-56  w-42 object-cover  overflow-hidden rounded-md border-r-0 border-b-0 lg:h-64 lg:w-96 md:h-[200px] md:w-[350px] 2xl:h-[300px] 2xl:w-[500px] opacity-90"
                  src="/coding.gif"
                  alt="unable to load image"
                />
                <div className="z-10 font-poppins text-2xl min-[2560px]:text-6xl md:text-2xl 2xl:text-4xl lg:tracking-wider lg:text-3xl  min-[3216px]:text-7xl bg-gradient-to-t from-blue-500  via-teal-200 to-blue-400 animate-glow  text-transparent bg-clip-text ">
                  Web Wizard
                </div>
                <div className="font-poppins  font-bold min-[3216px]:text-6xl  md:text-2xl opacity-90 text-center min-[2560px]:text-5xl 2xl:text-4xl bg-gradient-to-tr from-blue-300 via-sky-800 to-blue-900 text-transparent bg-clip-text ">
                  {text}
                  <Cursor />
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
