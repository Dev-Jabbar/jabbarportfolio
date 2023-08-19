import React, { useContext, useRef, useState } from "react";
import { MyContext } from "./ContextProvider";
import Image from "next/image";

type Props = {};

const Start = (props: Props) => {
  const [text, setText] = useState("Welcome to my Universe");
  const context = useContext(MyContext);

  if (!context) {
    // Handle the case when the context is undefined
    return <div>Loading...</div>;
  }

  const { handleClick } = context;

  const handleMouseEnter = () => {
    setText("Explore Universe");
  };

  const handleMouseLeave = () => {
    setText("Welcome to my Universe");
  };

  return (
    <div className="h-screen w-screen flex flex-col space-y-14 min-[2560px]:space-y-20   justify-center items-center">
      <div className="md:h-[350px] md:w-[350px] w-[300px] h-[300px] min-[2560px]:w-[700px] min-[2560px]:h-[700px]  min-[3456px]:w-[1000px] min-[3072px]:h-[800px] min-[3072px]:w-[800px] min-[3456px]:h-[1000px] relative">
        <Image
          height={500}
          width={500}
          src="/earth.jpg"
          alt="code"
          className="h-full w-full object-cover rounded-full animate-spin-slowest shadow-2xl shadow-gray-500"
        />
      </div>

      <div
        className={`p-6 cursor-pointer min-[3456px]:p-10 min-[3456px]:text-5xl min-[3072px]:p-8 min-[3072px]:text-4xl     min-[2560px]:p-8 min-[2560px]:text-4xl  bg-gray-950 border-4 border-gray-600 hover:shadow-gray-900 shadow-xl shadow-black shadow-y-white font-bold rounded-full`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {text}
      </div>
    </div>
  );
};

export default Start;
