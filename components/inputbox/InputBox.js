import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import {
  VideoCameraIcon,
  CameraIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";

const InputBox = () => {
  const userData = useSelector((state) => state.user);
  const { name, image } = userData;
  const dispatch = useDispatch();

  return (
    <div className="bg-white w-screen-90 sm:w-screen/3 mt-6 rounded-lg p-3 mx-auto">
      <div className="flex items-center border-b-2 pb-3">
        {image && (
          <Image src={image} width="40" height="40" className="rounded-full" />
        )}
        <input
          onClick={() => dispatch({ type: "SHOW_POST_PAGE" })}
          type="text"
          placeholder={`What's on your mind, ${name}?`}
          className="text-xs sm:text-base bg-gray-100 rounded-full py-1 px-3 w-full ml-2 outline-none"
        />
      </div>
      <div className="flex justify-around">
        <div className="cursor-pointer pt-2">
          <VideoCameraIcon className="w-8 h-8 text-red-500 mx-auto" />
          <p className="text-xs sm:text-sm text-center">Live Video</p>
        </div>
        <div
          onClick={() => dispatch({ type: "SHOW_POST_PAGE" })}
          className="cursor-pointer pt-2"
        >
          <CameraIcon className="w-8 h-8 text-green-400 mx-auto" />
          <p className="text-xs sm:text-sm text-center">Photo/ Video</p>
        </div>
        <div className="cursor-pointer pt-2">
          <EmojiHappyIcon className="w-8 h-8 text-yellow-400 mx-auto" />
          <p className="text-xs sm:text-sm text-center">Feeling/ Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
