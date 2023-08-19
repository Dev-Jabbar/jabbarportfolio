import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedAbout from "./AnimatedAbout";
import AnimatedSkill from "./AnimatedSkill";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-screen bg-black 2xl:pb-[400px] min-[144px]:pb-[150px]   ">
      <div className="flex flex-col-reverse  lg:flex-row justify-between items-start mt-[100px] md:mt-[200px] min-[2880px]:pt-[200px] 2xl:pt-[100px] lg:ml-20 lg:mr-16  ml-6 mr-6 md:space-x-4  ">
        <div className="border-x-2 border-white relative top-10"></div>
        <div className="flex justify-center items-center md:pt-20 flex-col  lg:max-w-[45%] pb-20 md:pb-20 space-y-6 ">
          <h3 className=" font-RegularInter400 text-blue-800 shadow-2xl border-collapse border-4 border-black shadow-blue-400 min-[3456px]:text-8xl   tracking-widest min-[2880px]:tracking-[20px] min-[2560px]:tracking-[15px] 2xl:tracking-[10px] text-3xl min-[2880px]:text-6xl min-[2560px]:text-6xl 2xl:text-4xl font-medium ">
            <AnimatedAbout text="About Me" />
          </h3>
          <p className="text-lg min-[3456px]:text-6xl min-[1440px]:pt-10 text-justify min-[2880px]:text-5xl 2xl:text-3xl min-[2560px]:text-4xl  ">
            I'm{" "}
            <span className="font-bold bg-gradient-to-tr from-blue-300 via-sky-800 to-blue-900 text-transparent bg-clip-text ">
              Abdul Jabbar
            </span>
            , a{" "}
            <span className="font-bold bg-gradient-to-tr from-blue-300 via-sky-800 to-blue-900 text-transparent bg-clip-text ">
              full stack developer
            </span>{" "}
            but mostly called a{" "}
            <span className="font-bold bg-gradient-to-tr from-blue-300 via-sky-800 to-blue-900 text-transparent bg-clip-text ">
              {" "}
              "coding machine"{" "}
            </span>
            by my friends because i{" "}
            <span className="font-bold bg-gradient-to-tr from-blue-300 via-sky-800 to-blue-900 text-transparent bg-clip-text ">
              code
            </span>{" "}
            for a duration of about eleven hours daily.I have experience with
            web development. I believe there is no project that is difficuit to
            execute, you just have to put your mind and effort into it. I have a
            high work ethic and equiped with various skills. I am very
            passionate about{" "}
            <span className="font-bold bg-gradient-to-tr from-blue-300 via-sky-800 to-blue-900 text-transparent bg-clip-text ">
              growth
            </span>{" "}
            , learning new things and sharing ideas with my peers. i am
            currently open to{" "}
            <span className="font-bold bg-gradient-to-tr from-blue-300 via-sky-800 to-blue-900 text-transparent bg-clip-text ">
              remote jobs
            </span>
            .
          </p>
        </div>
        <div className="flex justify-center pt-20 items-center mb-10 flex-col w-full  lg:max-w-[50%] space-y-6">
          <motion.div
            className="min-[2880px]:h-[1050px] max-[320px]:h-[300px] min-[3456px]:h-[1400px] min-[3456px]:w-[1100px] min-[2560px]:h-[1000px] min-[2560px]:w-[800px] 2xl:h-[700px] 2xl:w-[500px] min-[2880px]:w-[850px] xl:h-[500px] xl:w-[400px] h-[400px] lg:h-[450px] lg:w-[350px] md:h-[400] md:w-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black "
            initial={{ x: 200 }}
            whileInView={{ x: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Image
              src="/jabbar.jpg"
              height={500}
              width={500}
              alt="dev jabbar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
