import React, { useContext } from "react";

import { motion, Variants } from "framer-motion";
import { TbMusic } from "react-icons/tb";
import { BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

import Link from "next/link";

import { MyContext } from "./ContextProvider";

const socialVariants: Variants = {
  hover: {
    scale: 1.1,

    transition: {
      duration: 0.3,
      repeat: Infinity,

      repeatType: "mirror",
    },
  },
};
const buttonVariants: Variants = {
  hover: {
    scale: 1.1,

    textShadow: "0px 0px 8px, rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",

    transition: {
      duration: 0.3,
      repeat: Infinity,

      repeatType: "mirror",
    },
  },
};

type Props = {};

const Header2 = (props: Props) => {
  const context = useContext(MyContext);

  if (!context) {
    // Handle the case when the context is undefined
    return <div>Loading...</div>;
  }

  const { handleButtonClick } = context;

  return (
    <motion.header
      initial={{
        x: 500,
        opacity: 0,

        scale: 0.5,
      }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className={`fixed    flex md:flex-row bg-white bg-opacity-10  items-center justify-between w-screen  z-20  xl:items-center  md:h-[56px] 2xl:h-[80px] h-[40px] min-[2560px]:h-[100px] min-[3216px]:h-[150px]     `}
    >
      {/* Social icons */}

      <motion.div
        variants={socialVariants}
        whileHover="hover"
        className="hidden md:flex pl-6 space-x-2 items-center "
      >
        <Link href="https://www.linkedin.com/in/momoh-abdul-jabbar-183260161">
          <span>
            <div className=" bg-black p-1 rounded-full">
              <GrLinkedinOption className="h-4 cursor-pointer  w-4 min-[3216px]:h-8  min-[3216px]:w-8 min-[2560px]:h-6 min-[2560px]:w-6  text-green-500 " />
            </div>
          </span>
        </Link>

        <Link href="https://github.com/Dev-Jabbar">
          <span>
            <div className=" bg-black p-1 rounded-full">
              <BsGithub className="h-4 cursor-pointer  w-4  text-green-500 min-[3216px]:h-8  min-[3216px]:w-8  min-[2560px]:h-6 min-[2560px]:w-6  " />
            </div>
          </span>
        </Link>

        <Link href="https://twitter.com/NIGERIAN_KING2?s=09">
          <span>
            <div className=" bg-black p-1 rounded-full">
              <BsTwitter className="h-4 cursor-pointer  w-4 min-[3216px]:h-8  min-[3216px]:w-8   text-green-500 min-[2560px]:h-6 min-[2560px]:w-6 " />
            </div>
          </span>
        </Link>

        <Link href="https://wa.me/+2349032670337 ">
          <span>
            <div className=" bg-black p-1 rounded-full">
              <BsWhatsapp className="h-4 cursor-pointer  w-4  text-green-500 min-[3216px]:h-8  min-[3216px]:w-8   min-[2560px]:h-6 min-[2560px]:w-6  " />
            </div>
          </span>
        </Link>

        <span className="text-blue-500 min-[2560px]:text-2xl min-[3216px]:text-3xl  shadow-md shadow-blue-700">
          <Link href="cv.pdf">Download CV</Link>
        </span>
      </motion.div>
      <div onClick={handleButtonClick}>
        <TbMusic className="w-5 h-5 ml-5 md:hidden block text-blue-300" />
      </div>

      <div className="  hidden  md:flex-row md:flex md:items-center  justify-between  cursor-pointer mr-6 ">
        <div
          onClick={handleButtonClick}
          className="p-1 bg-black mr-2   rounded-full"
        >
          <TbMusic className="w-4 h-4 text-green-400 min-[2560px]:h-6 min-[2560px]:w-6 min-[3216px]:h-8  min-[3216px]:w-8 " />
        </div>
        <Link href="#contact">
          <motion.p
            className="uppercase  hidden md:inline-flex min-[2560px]:text-2xl min-[3216px]:text-3xl text-blue-700 text-md  mr-4"
            variants={buttonVariants}
            whileHover="hover"
          >
            CONTACT ME
          </motion.p>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header2;
