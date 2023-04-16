import React, { useState, useContext } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { DarkModeContext } from "./DarkModeContextProvider";
type Props = {};

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

const Header = (props: Props) => {
  const {
    theme,
    setTheme: handleSetTheme,
    systemTheme,
    mounted,
    setMounted,
  } = useContext(DarkModeContext);

  const renderThemeChanger = () => {
    if (!mounted) return false;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-6 h-6 mr-2 text-white role-button hover:animate-spin z-20 "
          onClick={() => handleSetTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-6 h-6 mr-2 text-black  role-button hover:animate-spin-slow z-20 "
          onClick={() => handleSetTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="absolute   flex justify-between w-full top-2    ">
      <div className="">
        <Image
          className="h-[100px] w-[150px] md:h-[150px] md:w-[200px]"
          alt="website logo "
          src="/weblogo.png"
          height={200}
          width={200}
        />
      </div>

      <div className="hidden md:block">
        <div className=" flex justify-evenly dark:text-white  text-black absolute right-0 top-4 mr-6  space-x-4  ">
          <span className="n mr-6">{renderThemeChanger()}</span>
          <a href="#About">
            <span className=" font-bold hover:underline hover:underline-offset-8 ">
              About/Skills
            </span>
          </a>

          <a href="#Projects">
            <span className="font-bold hover:underline hover:underline-offset-8 cursor-pointer ">
              Projects
            </span>
          </a>
          <a href="#Testimonials">
            <span className="font-bold hover:underline hover:underline-offset-8 cursor-pointer ">
              Testimonials
            </span>
          </a>

          <motion.span
            className=" bg-black text-white h-8 shadow-md shadow-white cursor-pointer  "
            whileHover="hover"
            variants={buttonVariants}
          >
            <a href="#Contact"> Contact Me</a>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Header;
