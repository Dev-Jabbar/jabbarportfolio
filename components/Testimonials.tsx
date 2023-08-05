import React from "react";
import { HandThumbUpIcon, StarIcon } from "@heroicons/react/24/solid";

import { TestimonialData } from "./TestimonialData";

import { motion } from "framer-motion";

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
import AnimatedTestimonials from "./AnimatedTestimonials";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className=" pt-28 md:pb-72 pb-60 overflow-hidden min-[2560px]:pb-[400px]     ">
      <div className="flex justify-center">
        <h3 className="font-RegularInter400 tracking-widest text-3xl text-center  font-medium md:pb-24 pb-20  ">
          <div className="text-blue-800 shadow-2xl border-collapse shadow-blue-400 border-4 border-black   min-[3456px]:text-8xl   tracking-widest min-[2880px]:tracking-[20px] min-[2560px]:tracking-[15px] 2xl:tracking-[10px] text-3xl min-[2880px]:text-6xl min-[2560px]:text-6xl 2xl:text-4xl  ">
            <AnimatedTestimonials text="Testimonials" />
          </div>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:ml-20 mr-10 ml-10 md:mr-10">
        <div className=" md:max-w-[40%]  flex flex-col space-y-6  justify-start ">
          <h1 className=" font-RegularInter400 min-[2560px]:text-3xl font-semibold text-lg">
            Why me ?
          </h1>

          <div className="flex flex-col space-y-4 min-[2560px]:space-y-20 min-[2560px]:text-3xl font-RegularInter400">
            <div className="flex flex-row space-x-10  text-justify">
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <HandThumbUpIcon className="w-5 h-5 shrink-0 text-blue-600" />
              </motion.div>

              <motion.p
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="text-justify"
              >
                I am a workaholic.
              </motion.p>
            </div>

            <div className="flex flex-row space-x-10 text-justify">
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
              >
                <HandThumbUpIcon className="w-5 h-5 shrink-0 text-blue-600" />
              </motion.div>

              <motion.p
                className="text-justify"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
              >
                I am a very fast learner who pays attention to details
              </motion.p>
            </div>

            <div className="flex flex-row space-x-10">
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                viewport={{ once: true }}
              >
                <HandThumbUpIcon className="w-5 h-5 shrink-0 text-blue-600" />
              </motion.div>

              <motion.p
                className="text-justify"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                viewport={{ once: true }}
              >
                I am a team player.
              </motion.p>
            </div>

            <div className="flex flex-row space-x-10">
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
                viewport={{ once: true }}
              >
                <HandThumbUpIcon className="w-5 h-5 shrink-0 text-blue-600" />
              </motion.div>

              <motion.p
                className="text-justify"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
                viewport={{ once: true }}
              >
                I have good critical thinking and problem solving skills.
              </motion.p>
            </div>

            <div className="flex flex-row space-x-10">
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 5 }}
                viewport={{ once: true }}
              >
                <HandThumbUpIcon className="w-5 h-5 shrink-0 text-blue-600" />
              </motion.div>

              <motion.p
                className="text-justify"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 5 }}
                viewport={{ once: true }}
              >
                Achieving the companies aims and objectives is my priority
              </motion.p>
            </div>

            <div className="flex flex-row space-x-10">
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 6 }}
                viewport={{ once: true }}
              >
                <HandThumbUpIcon className="w-5 h-5 shrink-0 text-blue-600" />
              </motion.div>

              <motion.p
                className="text-justify"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 6 }}
                viewport={{ once: true }}
              >
                i have good technical skills and i'm always improving
              </motion.p>
            </div>
          </div>
        </div>

        <div className="md:max-w-[50%]  space-y-14 ">
          <h1 className="font-RegularInter400 font-semibold text-center text-lg"></h1>

          <Swiper
            className="shadow-2xl shadow-blue-900 border-collapse bg-gray-700 text-white w-full  ')] "
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="flex flex-col justify-start min-[2560px]:h-[900px] space-y-36 2xl:space-y-56 md:h-[300px] h-[400px] 2xl:h-[400px] p-4 2xl:p-10 min-[2560px]:mt-20   ">
                <p className="italic min-[2560px]:text-3xl">
                  "{TestimonialData[0].text}"
                </p>

                <div className="flex flex-col space-y-2   min-[2560px]:pt-[400px]  min-[2560px]:text-4xl ">
                  <div className="flex space-x-1 text-yellow-400 ">
                    <StarIcon className="w-5 h-5  min-[2560px]:h-10 min-[2560px]:w-10 " />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                  </div>
                  <h2 className="font-bold">{TestimonialData[0].name}</h2>
                  <p className="tracking-wider">{TestimonialData[0].company}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex flex-col justify-start min-[2560px]:h-[900px] space-y-36 2xl:space-y-56 md:h-[300px] h-[400px] 2xl:h-[400px] p-4 2xl:p-10 min-[2560px]:mt-20   ">
                <p className="italic min-[2560px]:text-3xl">
                  "{TestimonialData[1].text}"
                </p>

                <div className="flex flex-col space-y-2   min-[2560px]:pt-[400px]  min-[2560px]:text-4xl ">
                  <div className="flex space-x-1 text-yellow-400 ">
                    <StarIcon className="w-5 h-5  min-[2560px]:h-10 min-[2560px]:w-10 " />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                  </div>
                  <h2 className="font-bold">{TestimonialData[1].name}</h2>
                  <p className="tracking-wider">{TestimonialData[1].company}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-start min-[2560px]:h-[900px] space-y-36 2xl:space-y-56 md:h-[300px] h-[400px] 2xl:h-[400px] p-4 2xl:p-10 min-[2560px]:mt-20   ">
                <p className="italic min-[2560px]:text-3xl">
                  "{TestimonialData[2].text}"
                </p>

                <div className="flex flex-col space-y-2   min-[2560px]:pt-[400px]  min-[2560px]:text-4xl ">
                  <div className="flex space-x-1 text-yellow-400 ">
                    <StarIcon className="w-5 h-5  min-[2560px]:h-10 min-[2560px]:w-10 " />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                    <StarIcon className="w-5 h-5 min-[2560px]:h-10 min-[2560px]:w-10" />
                  </div>
                  <h2 className="font-bold">{TestimonialData[2].name}</h2>
                  <p className="tracking-wider">{TestimonialData[2].company}</p>
                </div>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
