import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedAbout from "./AnimatedAbout";
import AnimatedSkill from "./AnimatedSkill";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col  lg:flex-row justify-between items-start mt-28 lg:ml-20 lg:mr-16 pb-24 ml-6 mr-6 md:space-x-4  ">
      <div className="flex justify-center items-center flex-col  lg:max-w-[45%] pb-20 md:pb-20 space-y-6 ">
        <h3 className=" font-RegularInter400 tracking-widest text-3xl font-medium ">
          <AnimatedAbout text="About Me" />
        </h3>
        <p className="text-lg  text-justify    ">
          I'm <span className="font-bold">Abdul Jabbar</span>, a{" "}
          <span className="font-bold">full stack developer</span> but mostly
          called a <span className="font-bold"> "coding machine" </span>by my
          friends because i <span className="font-bold">code</span> for a
          duration of about eleven hours daily.I have experience with web
          development. I believe there is no project that is difficuit to
          execute, you just have to put your mind and effort into it. I have a
          high work ethic and equiped with various skills. I am very passionate
          about <span className="font-bold">growth</span> , learning new things
          and sharing ideas with my peers. i am currently open to{" "}
          <span className="font-bold">remote jobs</span>.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col w-full  lg:max-w-[50%] space-y-6">
        <h3 className=" font-RegularInter400 tracking-widest text-3xl font-medium ">
          <AnimatedSkill text="    Skills" />
        </h3>

        <div className="flex justify-center"></div>
        <div className="grid   md:grid-cols-3 lg:grid-cols-4 grid-cols-2  md:gap-40  lg:gap-14 biggerthansmall:gap-28 gap-24  ">
          <div className="flex flex-col space-y-4  items-center  ">
            <motion.div
              initial={{ rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 w-20 rounded-full biggerthansmall:w-20   md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/html.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">Html</p>
          </div>
          <div className="flex flex-col space-y-4  items-center ">
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 w-20 rounded-full biggerthansmall:w-20   md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/css.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">CSS</p>
          </div>
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              {" "}
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/React-icon.svg.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">React</p>
          </div>
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              {" "}
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/javascript.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">Javascript</p>
          </div>{" "}
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              {" "}
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/Nextjs.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">NextJs</p>
          </div>{" "}
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/typescript.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">Typescript</p>
          </div>{" "}
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/tailwind.jpg"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">tailwind css</p>
          </div>{" "}
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/motion.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold text-center">framer-moton</p>
          </div>{" "}
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/sanity.webp"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">Sanity</p>
          </div>
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/nodejs.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">Nodejs</p>
          </div>
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/graph.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">GraphQl</p>
          </div>
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/firebase.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">Firebase</p>
          </div>
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/git.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">Git</p>
          </div>
          <div className="flex flex-col space-y-4 items-center  ">
            <motion.div
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 3 }}
            >
              <Image
                className="shrink-0 biggerthansmall:h-20 h-20 rounded-full w-20 biggerthansmall:w-20 md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
                src="/Postgres.png"
                alt="Skills"
                height={50}
                width={50}
              />
            </motion.div>

            <p className="font-bold">PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
