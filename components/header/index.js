import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  UserGroupIcon,
  MenuIcon,
  OfficeBuildingIcon,
  PlayIcon,
  PuzzleIcon,
} from "@heroicons/react/solid";
import logo from "../../public/facebook-logo.png";
import { useSession, signOut, signIn } from "next-auth/client";
import { useSelector } from "react-redux";

const Header = ({ showingMenu }) => {
  // const [session, loading] = useSession();
  const user = useSelector((state) => state.user);

  return (
    <div className="sticky top-0 z-40 flex p-2 bg-white shadow-md items-center justify-between">
      {/* left */}
      <div className="flex">
        <Link href="/#_=_">
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
      <div className="hidden mr-28 sm:block">
        <div className="flex flex-grow justify-center md:space-x-6 lg:space-x-16">
          <div className="flex p-1 text-gray-600 sm:text-xl justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
            <Link href="/#_=_">
              <a>
                <HomeIcon className="w-8 h-8 sm:w-8" />
              </a>
            </Link>
          </div>
          <div className="flex p-1 text-gray-600 sm:text-xl justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
            <Link href="/about">
              <a>
                <PlayIcon className="w-8 h-8 sm:w-8" />
              </a>
            </Link>
          </div>
          <div className="flex p-1 text-gray-600 sm:text-xl justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
            <Link href="/about">
              <a>
                <OfficeBuildingIcon className="w-8 h-8 sm:w-8" />
              </a>
            </Link>
          </div>
          <div className="flex p-1 text-gray-600 sm:text-xl justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
            <Link href="/about">
              <a>
                <UserGroupIcon className="w-8 h-8 sm:w-8" />
              </a>
            </Link>
          </div>
          <div className="flex p-1 text-gray-600 sm:text-xl justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
            <Link href="/about">
              <a>
                <PuzzleIcon className="w-8 h-8 sm:w-8" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* right */}
      {!user.name ? (
        <button
          onClick={signIn}
          className="hidden sm:block font-bold text-xl mx-1"
        >
          Login
        </button>
      ) : (
        <div
          onClick={signOut}
          className="hidden sm:flex flex space-x-2 cursor-pointer"
        >
          {/* profile picture */}
          <Image
            src={user.image}
            className="rounded-full"
            width="40"
            height="40"
          />

          <button className="hidden sm:block font-bold text-xl mx-1">
            {user.name}
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
