import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

type Props = {};

const Contact = (props: Props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_r8pejxm",
          "template_f57b54n",
          form.current,
          "gLAV6p5c2pKScO-iy"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("sent , would reply you soon..");
            setEmail("");
            setTextarea("");
            setUsername("");
            toast.success("sent to JABBAR", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error) => {
            console.log(error.text);
            console.log("not sent, Try again..");

            toast.error("Error,try again later!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        );
    }
  };

  return (
    <div className="flex flex-col bg-gray-950  ">
      <ToastContainer
        className="absoute md:mt-10 mt-20 mr-20 md:mr-16 2xl:mt-[150px] "
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="flex flex-col md:flex-row  md:h-[450px] min-[2560px]:h-[1000px]  space-y-8 md:space-y-0  ">
        <div className="flex flex-col space-y-4 min-[2560px]:space-y-8 md:pl-8  text-blue-700  md:pr-2    pl-7 pr-10 min-[2560px]:w-[900px]  md:w-[580px]">
          <h3 className="font-RegularInter400 font-medium  text-3xl tracking-widest min-[2560px]:text-5xl pt-14">
            Let's get in touch
          </h3>

          <p className="text-white min-[2560px]:text-2xl">
            I am open to web development jobs and new challenges
          </p>

          <Link href="tel:+2347066986305">
            <div className="flex space-x-2 cursor-pointer items-center">
              <PhoneIcon className="w-10 h-10 min-[2560px]:h-11 min-[2560px]:w-11 border rounded-full p-2 cursor-pointer  text-blue-700" />

              <span className="text-white min-[2560px]:text-2xl">
                +2347066986305
              </span>
            </div>
          </Link>

          <Link href="mailto:momohabduljabbar@gmail.com">
            <div className="flex space-x-2 cursor-pointer pb-20 md:pb-0 items-center">
              <EnvelopeIcon className="w-10 h-10 min-[2560px]:h-11 min-[2560px]:w-11 border rounded-full  text-blue-700 p-2 cursor-pointer" />

              <span className="text-white min-[2560px]:text-2xl ">
                Momohabduljabbar@gmail.com
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-y-10 min-[2560px]:text-2xl min-[2560px]:space-y-20 text-white border md:border-6 border-3 shadow shadow-black shadow-6xl  md:w-[100%] bg-black pt-14 pl-8 pr-8 pb-10">
          <h3 className="font-RegularInter400 font-medium min-[2560px]:text-5xl   text-3xl tracking-widest ">
            Get in touch
          </h3>

          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col space-y-6 min-[2560px]:space-y-72">
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-8 md:space-x-8 ">
                <div className="flex flex-col space-y-2 min-[2560px]:mt-40 justify-start md:w-[50%]">
                  <p className="font-bold">FULL NAME</p>
                  <input
                    className="border-b focus:outline-none border-gray-400 bg-transparent  "
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="flex flex-col space-y-2 min-[2560px]:pt-40  justify-start md:w-[50%]">
                  <p className="font-bold">EMAIL ADDRESS</p>
                  <input
                    className="border-b focus:outline-none border-gray-400 bg-transparent"
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>
              </div>

              <div>
                <div className="flex flex-col space-y-2 ">
                  <p className="font-bold">MESSAGE</p>

                  <textarea
                    className="border-b focus:outline-none border-gray-400 bg-transparent h-28"
                    placeholder="Message"
                    name="message"
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    required
                  ></textarea>

                  <button
                    className="text-white bg-blue-600 min-[2560px]:h-14 hover:bg-blue-950"
                    type="submit"
                    value="Send "
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex mt-20 justify-center  text-white mb-20 min-[2560px]:mb-72 text-center md:text-start  ">
        <div className="flex md:flex-row flex-col  min-[2560px]:text-2xl     md:justify-between md:space-x-40  min-[2560px]:space-x-72 ">
          <div>
            <h2 className="text-blue-700 min-[2560px]:pt-10 font-bold">
              Sections
            </h2>
            <br></br>
            <a href="#About">
              <p className="text-white cursor-pointer">About Me</p>
            </a>
            <a href="#Projects">
              <p className="text-white cursor-pointer">Projects</p>
            </a>
            <a href="#Testimonials">
              <p className="text-white cursor-pointer">Testimonials</p>
            </a>
            <a href="#Skills">
              <p className="text-white cursor-pointer">Skills</p>
            </a>
          </div>
          <div>
            <h2 className="text-blue-700 min-[2560px]:pt-10 pt-10 md:pt-0 font-bold">
              External
            </h2>
            <br></br>
            <Link href="https://github.com/Dev-Jabbar">
              <p className="text-white cursor-pointer">Github</p>
            </Link>
            <Link href="https://www.linkedin.com/in/momoh-abdul-jabbar-183260161/">
              <p className="text-white cursor-pointer">Linkedin</p>
            </Link>
          </div>
          <div>
            <h2 className="text-blue-700  pt-10 md:pt-0 font-bold min-[2560px]:pt-10">
              Information
            </h2>
            <br></br>
            <div className="flex flex-col space-y-1 ">
              <div className="flex space-x-2 min-[2560px]:space-x-4 md:justify-start justify-center">
                <MapPinIcon className="w-5 h-5 min-[2560px]:h-8 min-[2560px]:w-8  text-blue-700" />
                <p className="text-white text-center  ">Abuja,Nigeria</p>
              </div>

              <Link href="mailto:momohabduljabbar@gmail.com">
                <div className="flex space-x-2 justify-center min-[2560px]:space-x-4 md:justify-start cursor-pointer ">
                  <EnvelopeIcon className="w-5 h-5 min-[2560px]:h-8 min-[2560px]:w-8 text-blue-700" />
                  <p className="text-white text-center">
                    Momohabduljabbar@gmail.com
                  </p>
                </div>
              </Link>

              <div className="flex space-x-2 justify-center min-[2560px]:space-x-4 md:justify-start cursor-pointer">
                <DocumentTextIcon className="w-5 min-[2560px]:h-8 min-[2560px]:w-8  text-blue-700 h-5" />
                <a href="/cv.pdf">
                  <p className="text-white ">Resume</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
