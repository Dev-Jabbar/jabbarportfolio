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
    name: "The Stock Market",
    text: `It provides efficient real time stock data insights with static page rendering. Features include organized structures, static page loading, and comprehensive analysis metrics. Utilizes Tailwind CSS, React-Apex-Charts, and Material-UI for a robust tech stack.`,
    link: "https://github.com/Dev-Jabbar/The_Stock_Markets",
    live: "https://the-stock-markets.netlify.app/",
    scrollText: [
      { id: 1, name: "Apex Chart" },
      { id: 2, name: "SWR caching" },
      { id: 3, name: "Alpha Vantage Api" },
      { id: 5, name: "Dark Mode" },
      { id: 6, name: "Next Js" },
      { id: 7, name: "Tailwind CSS" },

      { id: 4, name: "Html" },
    ],
    scrollImage: [{ id: 1, link: "/Stock_Market.JPG", alt: "Stock Market" }],
  },
  {
    id: 2,
    name: "Focus Bank UI",
    text: `Explore Focus Bank UI, an elegantly designed and user-friendly banking interface. With a sleek aesthetic and clean loading skeletons, it offers a seamless and visually appealing experience for all your banking needs.`,
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
    id: 3,
    name: "Gym Ontime",
    text: "when complete would be your all-in-one gym app for easy class booking, real-time updates, secure payments with Stripe, and seamless connections between users and trainers. Simplify your fitness journey with Gym_Ontime. ",
    link: "https://github.com/Dev-Jabbar/Gym_Ontime",
    live: "https://gym-ontime.vercel.app/",
    scrollText: [
      { id: 1, name: "JWT Authentication" },
      { id: 2, name: "Next Js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Nest js" },

      { id: 5, name: "Chart js" },
      { id: 6, name: "Posgre Sql" },
      { id: 7, name: "Prisma" },

      { id: 8, name: "Stripe" },
    ],
    scrollImage: [{ id: 1, link: "/Gym_Ontime.JPG", alt: "Gym" }],
  },

  {
    id: 4,
    name: "Store Genius",
    text: "The ultimate API generator for customizing and managing your online store. Create, update, and delete products and billboards with ease. Enjoy dark and light modes for a sleek user experience. Tailor-made for any store, from books to fashion.",
    link: "https://github.com/Dev-Jabbar/StoreGenius",
    live: "https://storegenius.vercel.app/",
    scrollText: [
      { id: 1, name: "Clerk Authentication" },
      { id: 2, name: "Next Js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "React" },

      { id: 5, name: "html" },
      { id: 6, name: "planet scale" },
      { id: 7, name: "Prisma" },
      { id: 8, name: "Radix Ui" },
      { id: 9, name: "Next Api" },
      { id: 10, name: "Stripe" },
    ],
    scrollImage: [{ id: 1, link: "/api.gif", alt: "StoreGenius1" }],
  },

  {
    id: 5,
    name: "Book Island",
    text: "Book Island is a sophisticated web app utilizing the Book_island_api to access content. Users receive 100 points on their first visit, granting them the freedom to choose a book. The app also facilitates book creation, cart additions, and order placement within the allocated 100 points.",
    link: "https://github.com/Dev-Jabbar/Book_Island",
    live: "https://book-island.netlify.app/",
    scrollText: [
      { id: 1, name: "react" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "tailwind css" },
      { id: 4, name: "Context api" },
      { id: 5, name: "react toastify" },
      { id: 6, name: "Headless Ui" },
    ],
    scrollImage: [{ id: 1, link: "/Book_Island.jpg", alt: "Book_island" }],
  },

  {
    id: 6,
    name: "Book Island Api",
    text: "This API service, crafted with precision, drives the Book Island frontend using Express.js with TypeScript. It follows the services, repository, and controller pattern, offering routes for authentication, books, customers, carts, and orders with robust validation. Passwords are securely hashed for user protection.",
    link: "https://github.com/Dev-Jabbar/Book_Island_Backend",
    live: "https://book-island-backend.onrender.com",
    scrollText: [
      { id: 1, name: " Authentication" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Express JS" },
      { id: 4, name: "Cors" },
      { id: 5, name: "Bcrypt" },
      { id: 6, name: "Render" },
    ],
    scrollImage: [{ id: 1, link: "/api.gif", alt: "API" }],
  },

  {
    id: 7,
    name: "Medium Clone",
    text: `
    I have developed a Medium-inspired website that caters to avid readers and writers. Users can seamlessly sign in using Google authentication and enjoy the convenience of creating and publishing articles effortlessly. This platform is designed to provide a user-friendly experience for both readers and content creators.`,
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
    id: 8,
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
    id: 9,
    name: "Pizza Odering App",
    text: `Indulge in a visually captivating pizza ordering experience! This app, designed with pizza lovers in mind, focuses on a stunning user interface and smooth animations. Choose your pizza base and toppings with flair, enhanced by slick animations powered by Framer Motion.`,
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
    id: 10,
    name: "Satisfaction Eatery",
    text: `Satisfaction Eatery is A single-page website showcasing Tailwind CSS expertise in responsiveness, Flexbox, Gridbox, and captivating hover effects. Explore a visually delightful culinary experience.`,
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
