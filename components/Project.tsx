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

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="bg-gray-100 pb-24 dark:text-black dark:bg-gray-800">
      <h3 className="font-RegularInter400 tracking-widest text-3xl  text-center font-medium pt-28 pb-24 ">
        <div className="justify-center flex dark:text-white">
          <AnimateProject text=" Projects" />
        </div>
      </h3>

      <div className="  grid  md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-12 md:mr-32 md:ml-32 mr-10 ml-10 ">
        <div className="flex flex-col space-y-2 justify-between pb-5 h-[570px] lg:h-[570px] min667:h-[650px]  2xl:h-[790px]  bg-white border shadow-xl shadow-gray-600 dark:shadow-black dark:shadow-black bg-gray-100 ">
          <Swiper
            className="   w-full"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 10000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/blog1.png"
                width={600}
                height={600}
                alt="Blog image"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                className=" w-full object-cover"
                src="/blog2.png"
                width={600}
                height={600}
                alt="Blog image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/blog3.png"
                width={600}
                height={600}
                alt="Blog image"
              />
            </SwiperSlide>
          </Swiper>

          <div className="flex flex-col md:space-y-2  space-y-6 2xl:space-y-6  pr-4 pl-4">
            <h1 className="font-bold md:tracking-wider md:text-2xl text-xl tracking-wide  ">
              Jabbar's Blog
            </h1>
            <div className="marquee  overflow-hidden whitespace-nowrap ">
              <div className="flex space-x-6 items-center animate-marquee">
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Typescript
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Next js
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Sanity
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Tailwind CSS
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  React
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  GROQ
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Html
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Varcel
                </span>
              </div>
            </div>

            <p className="font-serif pb-8  ">
              My official Blog where i update the latest happenings about my
              life , religion , sport and news in general. it is being managed
              with sanity content management system and uses Nextjs static site
              genration to update posts in real time.
            </p>
          </div>
          <div className="flex flex-col space-y-1 pl-4 pr-4 ">
            <Link href="https://github.com/Dev-Jabbar/dev_JabbarBlog">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BsGithub className="h-4 w-4" />

                <p>Code</p>
              </div>
            </Link>

            <Link href="https://jabbarsblog-jabbarlee.vercel.app/">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BiLinkExternal className="h-5 w-5" />

                <p>Live</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-2 justify-between pb-5 h-[570px] lg:h-[570px] min667:h-[650px]  2xl:h-[790px]  bg-white border shadow-xl shadow-gray-600 dark:shadow-black bg-gray-100 ">
          <Swiper
            className="   w-full"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 10000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/medium1.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                className=" w-full object-cover"
                src="/medium2.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/medium3.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
          </Swiper>

          <div className="flex flex-col md:space-y-2  space-y-6 2xl:space-y-6  pr-4 pl-4">
            <h1 className="font-bold md:tracking-wider md:text-2xl text-xl tracking-wide  ">
              Medium Clone
            </h1>
            <div className="marquee  overflow-hidden whitespace-nowrap ">
              <div className="flex space-x-6 items-center animate-marquee">
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Tailwind CSS
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  React
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Next Js
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Html
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Firebase
                </span>
              </div>
            </div>

            <p className="font-serif pb-8  ">
              My love for reading articles made me build a medium look-alike
              website. you can sign in as a user and actually create and publish
              your articles on the go, which is made possible using google
              authentication.
            </p>
          </div>

          <div className="flex flex-col space-y-1 pl-4 pr-4 ">
            <Link href="https://github.com/Dev-Jabbar/Medium-Clone-Jabbar">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BsGithub className="h-4 w-4" />

                <p>Code</p>
              </div>
            </Link>

            <Link href="https://my-medium-clone.netlify.app/">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BiLinkExternal className="h-5 w-5" />

                <p>Live</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-2 justify-between pb-5 h-[570px] lg:h-[570px] min667:h-[650px]  2xl:h-[790px]  bg-white border shadow-xl shadow-gray-600 dark:shadow-black bg-gray-100 ">
          <Swiper
            className="   w-full"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 10000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/pizza1.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                className=" w-full object-cover"
                src="/pizza2.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/pizza3.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/pizza4.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
          </Swiper>

          <div className="flex flex-col md:space-y-2  space-y-6 2xl:space-y-6  pr-4 pl-4">
            <h1 className="font-bold md:tracking-wider md:text-2xl text-xl tracking-wide  ">
              Pizza Odering App
            </h1>
            <div className="marquee  overflow-hidden whitespace-nowrap ">
              <div className="flex space-x-6 items-center animate-marquee">
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Html
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Css
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Framer Motion
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  React
                </span>
              </div>
            </div>

            <p className="font-serif pb-8  ">
              A highly animated pizza odering app for pizza lovers like myself.
              It doesnt have the best functionaties as the focus was mainly on
              the user interface and animations. you can select the base,
              toppings for each pizza your order for.This app has slick
              animations using framer motion.
            </p>
          </div>

          <div className="flex flex-col space-y-1 pl-4 pr-4 ">
            <Link href="https://github.com/Dev-Jabbar/The-pizza-joint">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BsGithub className="h-4 w-4" />

                <p>Code</p>
              </div>
            </Link>

            <Link href="https://spontaneous-alpaca-972877.netlify.app/">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BiLinkExternal className="h-5 w-5" />

                <p>Live</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-2 justify-between pb-5 h-[570px] lg:h-[570px] min667:h-[650px]  2xl:h-[790px]  bg-white border shadow-xl shadow-gray-600 dark:shadow-black bg-gray-100">
          <Swiper
            className="   w-full"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 10000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/eatery.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
          </Swiper>

          <div className="flex flex-col md:space-y-2  space-y-6 2xl:space-y-6  pr-4 pl-4">
            <h1 className="font-bold md:tracking-wider md:text-2xl text-xl tracking-wide  ">
              Satisfaction Eatery
            </h1>
            <div className="marquee  overflow-hidden whitespace-nowrap ">
              <div className="flex space-x-6 items-center animate-marquee">
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Html
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Tailwind Css
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  React
                </span>
              </div>
            </div>

            <p className="font-serif pb-8  ">
              Satistfaction eatery is a single page website. i buit this website
              when i was practicing tailwind css responsiveness using flexbox
              and gridbox also mastering taiwind css hover effects.
            </p>
          </div>

          <div className="flex flex-col space-y-1 pl-4 pr-4 ">
            <Link href="https://github.com/Dev-Jabbar/The-Sastisfaction-eatery">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BsGithub className="h-4 w-4" />

                <p>Code</p>
              </div>
            </Link>

            <Link href="https://satisfaction-eatery.netlify.app">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BiLinkExternal className="h-5 w-5" />

                <p>Live</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2 justify-between pb-5 h-[570px] lg:h-[570px] min667:h-[650px]  2xl:h-[790px]  bg-white border shadow-xl shadow-gray-600 dark:shadow-black bg-gray-100">
          <Swiper
            className="   w-full"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 10000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/portfolio1.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                className=" w-full object-cover"
                src="/portfolio2.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/portfolio3.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/portfolio4.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
            ..
            <SwiperSlide>
              <Image
                className=" w-full object-cover"
                src="/portfolio5.png"
                width={600}
                height={600}
                alt="project image"
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col md:space-y-2  space-y-6 2xl:space-y-6  pr-4 pl-4 ">
            <h1 className="font-bold md:tracking-wider md:text-2xl text-xl tracking-wide  ">
              My First Porfolio
            </h1>
            <div className="marquee  overflow-hidden whitespace-nowrap ">
              <div className="flex space-x-6 items-center animate-marquee">
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  React
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Firebase
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Tailwind CSS
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Framer Motion
                </span>
                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Next Js
                </span>

                <span className="shadow-inner shadow-blue-700 border-2 border-black p-1 text-[15px] md:text-base">
                  Html
                </span>
              </div>
            </div>

            <p className="font-serif pb-8  ">
              The is my First portfolio website it is very beautiful .I totally
              enjoyed the development process. I later built my current
              portfolio website in order to have two portfolios. Check it out.
            </p>
          </div>

          <div className="flex flex-col space-y-1 pl-4 pr-4 ">
            <Link href="https://github.com/Dev-Jabbar/dev_Jabbar_website">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BsGithub className="h-4 w-4" />

                <p>Code</p>
              </div>
            </Link>

            <Link href="https://jabbar-first-portfolio.netlify.app/">
              <div className=" h-6 flex justify-center space-x-2 items-center bg-gray-100 cursor-pointer hover:bg-gray-200">
                <BiLinkExternal className="h-5 w-5" />

                <p>Live</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
