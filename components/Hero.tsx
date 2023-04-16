import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import { useContext } from "react";
import Link from "next/link";
import { DarkModeContext } from "./DarkModeContextProvider";
import { BsGithub } from "react-icons/bs";

import { GrLinkedinOption } from "react-icons/gr";

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,

    textShadow: "0px 0px 8px, rgb(255,255,255)",
    boxShadow: "0px 0px 8px, rgb(255,255,255)",

    transition: {
      duration: 0.3,
      repeat: Infinity,

      repeatType: "mirror",
    },
  },
};
type Props = {};

const Hero = (props: Props) => {
  const { theme, setMounted, mounted } = useContext(DarkModeContext);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return false;
  const PageTheme =
    theme === "dark"
      ? "bg-gray-700"
      : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900";

  return (
    <div
      className={`shadow-2xl shadow-black dark:shadow-white ${PageTheme}   `}
    >
      <div className=" md:justify-between md:flex  md:items-center md:flex-row flex flex-col ">
        <div>
          <Image
            src="/webjab.png"
            alt="My picture"
            width={500}
            height={500}
            className="md:block hidden"
          />
        </div>
        <div>
          <Image
            src="/webjab.png"
            alt="My picture"
            height={500}
            width={300}
            className="md:hidden "
          />
        </div>

        <div className=" md:w-[500px] flex flex-col   space-y-4 pl-4 pb-10 pr-4 md:p-0">
          <div className="flex justify-end md:mr-[100px]">
            <Image
              className="animate-spin-slow  absolute md:relative "
              alt="react icon"
              src="/React-icon.svg.png"
              height={100}
              width={100}
            />
          </div>

          <h1 className="font-semibold">Hi my name is</h1>
          <h3 className="font-extrabold text-5xl tracking-widest">
            Abdul Jabbar.
          </h3>

          <h2 className="font-thin text-3xl ">Fullstack Developer</h2>

          <p className="text-lg">
            Discover more <span className="font-bold ">about me</span>
          </p>

          <div className="flex justify-start space-x-4 ">
            <motion.span whileHover="hover" variants={buttonVariants}>
              <Link href="https://www.linkedin.com/in/momoh-abdul-jabbar-183260161">
                <GrLinkedinOption className="h-9 cursor-pointer  w-9 p-2 bg-black text-white rounded-full" />
              </Link>
            </motion.span>

            <motion.span whileHover="hover" variants={buttonVariants}>
              <Link href="https://github.com/jabbarlee">
                <BsGithub className="h-9 cursor-pointer  w-9 p-2 bg-black text-white rounded-full" />
              </Link>
            </motion.span>

            <motion.span whileHover="hover" variants={buttonVariants}>
              <Link href="/cv.pdf">
                <DocumentTextIcon className="h-9 cursor-pointer  w-9 p-2 bg-black text-white rounded-full" />
              </Link>
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
