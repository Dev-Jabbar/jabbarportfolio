import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

import { BiLinkExternal } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Autoplay]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AnimateProject from "./AnimateProject";

import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Focus Bank UI",
    text: `Focus bank is a ready to use bank Ui that was developed by me. The Ui is very sleek and has one of the most incredible designs and very user friendly with clean loading skeletons.`,
    link: "https://github.com/Dev-Jabbar/Focus_bank",
    live: "https://focusbank.vercel.app",
    scrollText: [
      { id: 1, name: "Tailwind CSS" },
      { id: 2, name: "React" },
      { id: 3, name: "Next Js" },
      { id: 4, name: "Html" },
      { id: 5, name: "authentication" },
    ],
    scrollImage: [
      { id: 1, link: "/focus1.png", alt: "Focus Image1" },
      { id: 2, link: "/focus2.png", alt: "Focus Image2" },
      { id: 3, link: "/focus3.png", alt: "Focus Image3" },
      { id: 3, link: "/focus4.png", alt: "Focus Image4" },
      { id: 3, link: "/focus5.png", alt: "Focus Image5" },
    ],
  },
  {
    id: 2,
    name: "Medium Clone",
    text: `My love for reading articles made me build a medium look-alike website. you can sign in as a user and actually create and publish your articles on the go, which is made possible using google authentication.`,
    link: "https://github.com/Dev-Jabbar/Medium-Clone-Jabbar",
    live: "https://my-medium-clone.netlify.app/",
    scrollText: [
      { id: 1, name: "Tailwind CSS" },
      { id: 2, name: "React" },
      { id: 3, name: "Next Js" },
      { id: 4, name: "html" },
      { id: 5, name: "firebase" },
    ],
    scrollImage: [
      { id: 1, link: "/medium1.png", alt: "Focus Image1" },
      { id: 2, link: "/medium2.png", alt: "Focus Image2" },
      { id: 3, link: "/medium3.png", alt: "Focus Image3" },
    ],
  },
  {
    id: 3,
    name: "Jabbar's Blog",
    text: `My official Blog where i update the latest happenings about my life , religion , sport and news in general. it is being managed with sanity content management system and uses Nextjs static site genration to update posts in real time.`,
    link: "https://github.com/Dev-Jabbar/dev_JabbarBlog",
    live: "https://jabbarsblog-jabbarlee.vercel.app/",
    scrollText: [
      { id: 1, name: "Typescript" },
      { id: 2, name: "Next js" },
      { id: 3, name: "Sanity" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "React" },
      { id: 6, name: "GROQ" },
      { id: 7, name: "Html" },
      { id: 8, name: "Varcel" },
    ],
    scrollImage: [
      { id: 1, link: "/blog1.png", alt: "blogImg1" },
      { id: 2, link: "/blog2.png", alt: "blogImg2" },
      { id: 3, link: "/blog3.png", alt: "blogImg3" },
    ],
  },
  {
    id: 4,
    name: "Pizza Odering App",
    text: `A highly animated pizza odering app for pizza lovers like myself.It doesnt have the best functionaties as the focus was mainly on the user interface and animations. you can select the base,toppings for each pizza your order for.This app has slick animations using framer motion.`,
    link: "https://github.com/Dev-Jabbar/The-pizza-joint",
    live: "https://spontaneous-alpaca-972877.netlify.app",
    scrollText: [
      { id: 1, name: "Html" },
      { id: 2, name: "Tailwind Css" },
      { id: 3, name: "Framer Motion" },
      { id: 4, name: "React" },
    ],
    scrollImage: [
      { id: 1, link: "/pizza1.png", alt: "pizaImg1" },
      { id: 2, link: "/pizza2.png", alt: "pizaImg2" },
      { id: 3, link: "/pizza3.png", alt: "pizaImg3" },
      { id: 4, link: "/pizza4.png", alt: "pizaImg4" },
    ],
  },

  {
    id: 5,
    name: "Satisfaction Eatery",
    text: `Satistfaction eatery is a single page website. i buit this website when i was practicing tailwind css responsiveness using flexbox and gridbox also mastering taiwind css hover effects.`,
    link: "https://github.com/Dev-Jabbar/The-Sastisfaction-eatery",
    live: "https://satisfaction-eatery.netlify.app",
    scrollText: [
      { id: 1, name: "Html" },
      { id: 2, name: "Css" },
      { id: 3, name: "React" },
    ],

    scrollImage: [{ id: 1, link: "/eatery.png", alt: "eateryImg" }],
  },
];

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="bg-gray-100 pb-24 text-black bg-gray-800">
      <h3 className="font-RegularInter400 tracking-widest text-3xl  text-center font-medium pt-28 pb-24 ">
        <div className="justify-center flex  ">
          <div className="text-blue-800 shadow-2xl border-collapse shadow-blue-400 border-4 border-black   min-[3456px]:text-8xl   tracking-widest min-[2880px]:tracking-[20px] min-[2560px]:tracking-[15px] 2xl:tracking-[10px] text-3xl min-[2880px]:text-6xl min-[2560px]:text-6xl 2xl:text-4xl ">
            <AnimateProject text=" Projects " />
          </div>
        </div>
      </h3>

      <div className="  grid  md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-12 md:mr-32 md:ml-32 mr-10 ml-10 ">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col space-y-1  justify-between pb-5 h-[570px] lg:h-[570px] min667:h-[650px]  2xl:h-[790px] min-[2880px]:h-[1000px] min-[3456px]:h-[1200px] bg-gradient-to-tr from-sky-500 via-fuchsia-700 to-purple-500 border shadow-xl shadow-black  "
            >
              <Swiper
                className=" h-[300px] md:h-[250px] 2xl:h-[400px]  min-[3456px]:h-[650px] min-[2560px]:h-[450px] min-[2880px]:h-[550px]  w-full"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 10000 }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {project.scrollImage.map((cardImage) => {
                  return (
                    <SwiperSlide key={cardImage.id}>
                      <Image
                        className="  h-full w-full "
                        src={cardImage.link}
                        width={1000}
                        height={1000}
                        alt={cardImage.alt}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="flex flex-col md:space-y-2 min-[3456px]:space-y-14  space-y-2 2xl:space-y-6  pr-4 pl-4">
                <h1 className="font-bold min-[3456px]:text-4xl  min-[2880px]:text-3xl md:tracking-wider md:text-2xl text-xl tracking-wide  ">
                  {project.name}
                </h1>
                <div className="marquee  overflow-hidden whitespace-nowrap ">
                  <div className="flex space-x-6 items-center animate-marquee">
                    {project.scrollText.map((marque) => {
                      return (
                        <span
                          key={marque.id}
                          className="shadow-inner min-[3456px]:text-[25px]  min-[2880px]:text-[20px]  shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base"
                        >
                          {marque.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <p className="font-serif pb-8 min-[3456px]:text-3xl min-[2880px]:text-2xl ">
                  {project.text}
                </p>
                <div className="flex flex-col space-y-1 pl-4 pr-4 ">
                  <Link href={project.link}>
                    <div className=" h-6  min-[2880px]:h-8  min-[3456px]:h-9 bg-gradient-to-br from-neutral-200 via-stone-400 to-stone-700 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                      <BsGithub className="h-4 w-4 min-[3456px]:w-7 min-[3456px]:h-7  min-[2880px]:w-6  min-[2880px]:h-6" />

                      <p className=" min-[2880px]:text-lg min-[3456px]:text-xl">
                        Code
                      </p>
                    </div>
                  </Link>

                  <Link href={project.live}>
                    <div className=" h-6    min-[2880px]:h-8 flex bg-gradient-to-br from-neutral-200 via-stone-400 to-stone-700 justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                      <BiLinkExternal className="h-5 w-5  min-[3456px]:w-7 min-[3456px]:h-7 min-[2880px]:w-6  min-[2880px]:h-6" />

                      <p className="min-[2880px]:text-lg  min-[3456px]:text-xl">
                        Live
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
