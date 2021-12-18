import React from "react";
import Image from "next/image";
import Link from "next/link";
import Login from "../login/Login";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/client";
import { ArrowLeftIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import NotLoginMenu from "../notLoginMenu/NotLoginMenu";

const Menu = ({ closingMenu }) => {
  // const [session] = useSession();
  const userData = useSelector((state) => state.user);
  const { name, image } = userData;
  const showMenu = useSelector((state) => state.showMenu);
  return (
    <>
      {!name ? (
        <NotLoginMenu closingMenu={closingMenu} />
      ) : (
        <div
          className={
            showMenu ? "fixed z-50 sm:hidden" : "absolute h-0 sm:hidden"
          }
        >
          <div
            className={
              showMenu
                ? "relative w-screen h-screen transition translate-x-0 duration-500 bg-gray-100"
                : "relative w-screen h-screen transition -translate-x-full duration-500"
            }
          >
            {/* top */}
            <div className="bg-blue-900 text-white p-2 text-lg text-center relative">
              <ArrowLeftIcon
                onClick={closingMenu}
                className="w-4 h-4 absolute top-3 left-2"
              />
              <p>Fakebook</p>
            </div>

            {/* Profile name and photo */}
            <div className="flex items-center p-3 border-b-2">
              <Image
                src={image}
                className="rounded-full"
                width="50"
                height="50"
              />
              <p className="text-2xl ml-2">{name}</p>
            </div>

            {/* Links */}
            <div>
              <div className="flex p-4 items-center space-x-6">
                <Link href="/#_=_">
                  <a>
                    <HomeIcon className="w-8 h-8 text-gray-600" />
                  </a>
                </Link>
                <p className="text-lg">Home</p>
              </div>
              <div className="flex p-4 items-center space-x-6">
                <Link href="/#_=_">
                  <a>
                    <UserGroupIcon className="w-8 h-8 text-gray-600" />
                  </a>
                </Link>
                <p className="text-lg">Friends</p>
              </div>
            </div>

            {/* bottom */}

            <button
              onClick={signOut}
              className="absolute bottom-5 left-1/4 bg-red-500 text-white text-lg font-bold p-4 rounded-md w-3/6"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
