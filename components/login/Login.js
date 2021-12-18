import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/client";
import signinlogo from "../../public/facebook.png";
import { XIcon } from "@heroicons/react/solid";

const Login = ({ closeLoginPage, showLoginPage }) => {
  return (
    <>
      {showLoginPage && (
        <div className="flex flex-col justify-center items-center h-screen w-screen fixed bg-gray-100 z-50">
          <div className="w-4/6 h-screen/3 relative mb-10 sm:w-2/6 lg:w-1/5">
            <Image src={signinlogo} layout="fill" />
          </div>
          <button
            onClick={signIn}
            className="bg-blue-500 text-white font-bold p-4 rounded-md w-4/6 sm:w-2/6 lg:w-1/5"
          >
            Login with Facebook
          </button>
          <button onClick={closeLoginPage} className="absolute top-2 right-2">
            <XIcon className="h-8 hover:text-gray-400" />
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
