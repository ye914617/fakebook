import React from "react";
import {
  VideoCameraIcon,
  CameraIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";

const InputBox = () => {
  return (
    <div className="bg-white w-screen-90 sm:w-screen/3 mt-6 rounded-lg p-3 mx-auto cursor-not-allowed">
      <div className="flex items-center justify-center border-b-2 pb-3 font-bold sm:text-lg">
        <p>Please Login To Continue</p>
      </div>
      <div className="flex justify-around">
        <div className="pt-2">
          <VideoCameraIcon className="w-8 h-8 text-red-500 mx-auto" />
          <p className="text-xs sm:text-sm text-center">Live Video</p>
        </div>
        <div className="pt-2">
          <CameraIcon className="w-8 h-8 text-green-400 mx-auto" />
          <p className="text-xs sm:text-sm text-center">Photo/ Video</p>
        </div>
        <div className="pt-2">
          <EmojiHappyIcon className="w-8 h-8 text-yellow-400 mx-auto" />
          <p className="text-xs sm:text-sm text-center">Feeling/ Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
