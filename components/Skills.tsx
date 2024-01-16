import React from "react";
import AnimatedSkill from "./AnimatedSkill";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const skills = [
  { id: 1, text: "Html", icon: "/html.png", rotate: -360 },
  { id: 2, text: "CSS", icon: "/css.png", rotate: 360 },
  { id: 3, text: "React", icon: "/React-icon.svg.png", rotate: -360 },
  { id: 4, text: "Javascript", icon: "/javascript.png", rotate: 360 },
  { id: 5, text: "NextJs", icon: "/Nextjs.png", rotate: -360 },
  { id: 6, text: "Typescript", icon: "/typescript.png", rotate: 360 },
  { id: 7, text: "tailwind css", icon: "/tailwind.jpg", rotate: -360 },
  { id: 8, text: "framer-moton", icon: "/motion.png", rotate: 360 },
  { id: 9, text: "NestJs", icon: "/nestjs.png", rotate: -360 },
  { id: 10, text: "Gsap", icon: "/Gsap.png", rotate: 360 },
  { id: 11, text: "Express", icon: "/express-js.png", rotate: -360 },
  { id: 12, text: "Firebase", icon: "/firebase.png", rotate: 360 },
  { id: 13, text: "Git", icon: "/git.png", rotate: -360 },
  { id: 14, text: "PostgreSQL", icon: "/Postgres.png", rotate: 360 },
  { id: 15, text: "Jest Testing", icon: "/jest.png", rotate: -360 },
  { id: 15, text: "Redux Toolkit", icon: "/redux.png", rotate: 360 },
];

const Skills = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col w-screen bg-gray-950 pb-20 pt-20 space-y-6">
        <h3 className=" font-RegularInter400 text-blue-800 shadow-2xl border-collapse border-4 border-black shadow-blue-400 min-[3456px]:text-8xl   tracking-widest min-[2880px]:tracking-[20px] min-[2560px]:tracking-[15px] 2xl:tracking-[10px] text-3xl min-[2880px]:text-6xl min-[2560px]:text-6xl 2xl:text-4xl font-medium ">
          <AnimatedSkill text="Skills" />
        </h3>

        <div className="flex justify-center"></div>
        <div className="grid   md:grid-cols-3 lg:grid-cols-4 grid-cols-2 2xl:pt-40 2xl:gap-[200px]  md:gap-40  lg:gap-14 biggerthansmall:gap-28 gap-24  ">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex flex-col space-y-4  items-center  "
              >
                <motion.div
                  initial={{ rotate: skill.rotate }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 3 }}
                >
                  <div className="p-2 rounded-full shadow-green-700 shadow-lg bg-white   ">
                    <Image
                      className="shrink-0 h-20 w-20 rounded-full 2xl:h-[170px] 2xl:w-[170px]  md:w-20 md:h-20 lg:w-12 lg:h-12 object-cover "
                      src={skill.icon}
                      alt="Skills"
                      height={500}
                      width={500}
                    />
                  </div>
                </motion.div>

                <p className="font-bold 2xl:font-2xl 2xl:text-2xl">
                  {skill.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
