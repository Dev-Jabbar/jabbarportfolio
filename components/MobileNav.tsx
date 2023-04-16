import React, { useState, useEffect, useContext } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { DarkModeContext } from "./DarkModeContextProvider";

type Props = {};

const MobileNav = (props: Props) => {
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
    <div className="sticky top-0 z-20">
      <div
        className="absolute md:hidden top-3 right-0 text-blue-600 h-8 w-8 cursor-pointer overflow-visible  mr-1 z-20"
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
          className={`absolute ${translateItem}    flex flex-col justify-between w-screen transition duration-700 border-t-0 border-l-0 dark:bg-black h-screen bg-white font-GoblineOne border border-white -right-100`}
        >
          <div className=" h-[50%] flex justify-start pl-6 pr-6 pt-20">
            <div className="flex flex-col space-y-10 w-full">
              <p> {renderThemeChanger()}</p>
              <a href="#Hero">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Hero
                </p>
              </a>
              <a href="#About">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  About
                </p>
              </a>{" "}
              <a href="#Projects">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Projects
                </p>
              </a>
              <a href="#Testimonials">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Testimonials
                </p>
              </a>
              <a href="#Contact">
                <p
                  className="cursor-pointer"
                  onClick={() => setMemuOption(false)}
                >
                  Contact
                </p>
              </a>
            </div>
          </div>
          <div className="bg-blue-500 dark:bg-blue-900 h-[30%]"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
