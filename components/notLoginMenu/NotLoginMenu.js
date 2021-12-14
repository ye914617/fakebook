import React, { useState } from "react";
import Login from "../login/Login";
import { useSelector } from "react-redux";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const NotLoginMenu = ({ closingMenu }) => {
  const showMenu = useSelector((state) => state.showMenu);

  //Change to login page once sign in button is clicked
  const [showLoginPage, setShowLoginPage] = useState(false);

  const openLoginPage = () => {
    setShowLoginPage(true);
  };
  const closeLoginPage = () => {
    setShowLoginPage(false);
  };
  //Change to login page once sign in button is clicked

  return (
    <>
      {showLoginPage ? (
        <Login showLoginPage={showLoginPage} closeLoginPage={closeLoginPage} />
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
            <div className="flex flex-col items-center h-screen/2 justify-center">
              <div className="flex flex-col items-center justify-center p-3 border-b-2">
                <p className="text-2xl font-bold">Welcome</p>
              </div>
              <div className="flex flex-col items-center justify-center p-3 ">
                <p className="text-2xl font-bold">Please Login To Continue</p>
              </div>
            </div>
            {/* bottom */}

            <button
              onClick={openLoginPage}
              className="absolute bottom-5 left-1/4 bg-blue-500 text-white text-lg font-bold p-4 rounded-md w-3/6"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NotLoginMenu;
