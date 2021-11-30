import React from "react";
import Image from "next/image";
import Link from "next/link";

const SidebarRow = ({ src, title, Icon }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-300">
      {src && (
        <div className="flex items-center p-3">
          <Image src={src} width="30" height="30" className="rounded-full" />
          <p className="hidden font-bold sm:block ml-2">{title}</p>
        </div>
      )}
      {Icon && (
        <div className="flex items-center p-3">
          <Link href="/" className="">
            <a>
              <Icon className="w-8 h-8" />
            </a>
          </Link>
          <p className="hidden sm:block ml-2">{title}</p>
        </div>
      )}
    </div>
  );
};

export default SidebarRow;
