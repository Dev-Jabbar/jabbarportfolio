import React from "react";
import Image from "next/image";

type Props = {};

const Skill = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 items-center ">
      <Image
        className="shrink-0 biggerthansmall:h-20 biggerthansmall:w-20  md:w-20 md:h-20 lg:w-12 lg:h-12 shadow-2xl shadow-black   object-cover"
        src="https://res.cloudinary.com/demo/image/fetch/https://cdn-icons-png.flaticon.com/512/732/732190.png"
        alt="Skills"
        height={50}
        width={50}
      />

      <p>CSS</p>
    </div>
  );
};

export default Skill;
