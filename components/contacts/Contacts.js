import React from "react";
import Image from "next/image";

const Contacts = ({ name, src }) => {
  return (
    <div className="relative flex items-center space-x-2 mt-1 p-1 cursor-pointer hover:bg-gray-200">
      <Image src={src} width={40} height={40} className="rounded-full" />
      <p className="font-bold">{name}</p>
      <div className="h-2 w-2 bg-green-400 rounded-full absolute bottom-1 left-6" />
    </div>
  );
};

export default Contacts;
