import React, { useState, useEffect, useContext } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { DarkModeContext } from "./DarkModeContextProvider";
import { BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";

type Props = {};

const MobileNav = (props: Props) => {
  const [menuOption, setMemuOption] = useState(false);

  const firstStroke = menuOption ? "hidden" : "inline-block";

  const secondStroke = menuOption ? "-rotate-45" : "-rotate-0";

  const thirdStroke = menuOption ? "rotate-45" : "rotate-0";

  const fourthStroke = menuOption ? "hidden" : "inline-block";

  const translateItem = menuOption ? "translate-x-0" : "translate-x-full";

  const [Mrvisible, setMrvisible] = useState("");

  useEffect(() => {
    if (!menuOption) {
      setTimeout(() => {
        setMrvisible("invisible");
      }, 500);
    } else if (menuOption) {
      setMrvisible("");
    }
  }, [menuOption]);

  return (
    <div className="fixed top-0 right-0 z-40">
      <div
        className=" md:hidden relative text-blue-600 h-8 w-8 cursor-pointer overflow-visible  mr-1 z-40"
        onClick={() => setMemuOption(!menuOption)}
      >
        <span
          className={`inline-block w-6 h-0.5 absolute 
   rounded-sm top-3 bg-blue-200 ${firstStroke}`}
        ></span>
        <span
          className={`inline-block w-6 h-0.5 absolute 
   rounded-sm top-5 bg-blue-200 ${secondStroke} duration-1000`}
        ></span>
        <span
          className={`inline-block w-6 h-0.5 absolute 
   rounded-sm top-5 bg-blue-200 ${thirdStroke} duration-1000`}
        ></span>

        <span
          className={`inline-block w-6 h-0.5 absolute 
   rounded-sm top-7 bg-blue-200 ${fourthStroke}`}
        ></span>
      </div>

      <div
        className={`md:hidden absolute ${Mrvisible}  top-0 right-0  h-screen w-screen overflow-hidden `}
      >
        <div
          className={`absolute ${translateItem}    flex flex-col justify-between w-screen transition duration-700 border-t-0 border-l-0 bg-black h-screen  font-GoblineOne border border-white -right-100`}
        >
          <div className=" h-[50%] flex justify-start pl-6 pr-6 pt-10">
            <div className="flex flex-col space-y-10 w-full">
              <Link href="#Hero">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Hero
                </p>
              </Link>
              <Link href="#About">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  About
                </p>
              </Link>

              <Link href="#Skills">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Skills
                </p>
              </Link>
              <Link href="#Projects">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Projects
                </p>
              </Link>
              <Link href="#Testimonials">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Testimonials
                </p>
              </Link>
              <Link href="#Contact">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Contact
                </p>
              </Link>

              <Link href="cv.pdf">
                <p>Download Cv</p>
              </Link>
              <div className="flex space-x-8 pt-8">
                <Link href="https://www.linkedin.com/in/momoh-abdul-jabbar-183260161">
                  <span>
                    <div className=" bg-white p-3 rounded-full">
                      <GrLinkedinOption className="h-5 cursor-pointer  w-5  text-blue-500 " />
                    </div>
                  </span>
                </Link>
                <Link href="https://github.com/Dev-Jabbar">
                  <span>
                    <div className=" bg-white p-3 rounded-full">
                      <BsGithub className="h-5 cursor-pointer  w-5  text-blue-500   " />
                    </div>
                  </span>
                </Link>
                <Link href="https://twitter.com/NIGERIAN_KING2?s=09">
                  <span>
                    <div className=" bg-white p-3 rounded-full">
                      <BsTwitter className="h-5 cursor-pointer  w-5    text-blue-500  " />
                    </div>
                  </span>
                </Link>
                <Link href="https://wa.me/+2349032670337 ">
                  <span>
                    <div className=" bg-white p-3  rounded-full">
                      <BsWhatsapp className="h-5 cursor-pointer  w-5  text-blue-500" />
                    </div>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 bg-blue-950 h-[30%]"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
