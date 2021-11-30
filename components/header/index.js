import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  UserGroupIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import logo from "../../public/fakebook.jpg";
import { useSession, signOut } from "next-auth/client";

const Header = ({ showingMenu }) => {
  const [session, loading] = useSession();

  return (
    <div className="flex p-2 bg-white shadow-md items-center justify-between">
      {/* left */}
      <div className="flex">
        <Link href="/">
          <a>
            <Image
              src={logo}
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div className="bg-gray-100 ml-2 flex rounded-full justify-center items-center">
          <SearchIcon className="w-6 h-6 text-gray-400 ml-2" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search Fakebook"
          />
        </div>
      </div>

      {/* middle */}
      <div className="hidden sm:block">
        <div className="flex flex-grow justify-center space-x-2 md:space-x-6 lg:space-x-48">
          <div className="flex p-1 text-gray-500 sm:text-xl justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
            <Link href="/">
              <a>
                <HomeIcon className="w-5 h-5 sm:w-8" />
              </a>
            </Link>
            Home
          </div>
          <div className="flex p-1 text-gray-500 sm:text-xl justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
            <Link href="/">
              <a>
                <UserGroupIcon className="w-5 h-5 sm:w-8" />
              </a>
            </Link>
            Friends
          </div>
        </div>
      </div>

      {/* right */}
      {!session.user ? (
        "Please Login"
      ) : (
        <div
          onClick={signOut}
          className="hidden sm:flex flex space-x-2 cursor-pointer"
        >
          {/* profile picture */}
          <Image
            src={session.user.image}
            className="rounded-full"
            width="40"
            height="40"
          />

          <button className="hidden sm:block font-bold text-xl mx-1">
            {session.user.name}
          </button>
        </div>
      )}

      <button
        onClick={showingMenu}
        className="flex sm:hidden justify-center items-center"
      >
        <MenuIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Header;
