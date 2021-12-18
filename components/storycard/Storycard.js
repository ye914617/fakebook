import React from "react";
import Image from "next/image";

const Storycard = ({ src, link }) => {
  return (
    <div className="mx-1 sm:w-screen/12 sm:h-screen/3 relative hover:scale-105 cursor-pointer">
      <div className="w-8 h-8 sm:w-11 sm:h-11 sm:absolute border-4 border-blue-700 rounded-full sm:top-2 sm:left-2 sm:z-10">
        <div className="relative w-full h-full">
          <Image src={src} layout="fill" className="rounded-full" />
        </div>
      </div>
      <div className="opacity-90 hidden sm:block w-full h-full relative">
        <Image
          src={link}
          layout="fill"
          className="object-cover rounded-xl"
          priority="true"
        />
      </div>
    </div>
  );
};

export default Storycard;
