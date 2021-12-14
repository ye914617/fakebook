import React from "react";
import {
  SearchIcon,
  VideoCameraIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Contacts from "../contacts/Contacts";
import { useSelector } from "react-redux";

const Widgets = () => {
  const friends = useSelector((state) => state.friends);

  return (
    <div className="hidden sm:block w-1/5 fixed right-0">
      <div className="text-gray-500 flex justify-between items-center mb-2 p-1">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-5 cursor-pointer hover:bg-gray-200" />
          <SearchIcon className="h-5 cursor-pointer hover:bg-gray-200" />
          <DotsHorizontalIcon className="h-5 cursor-pointer hover:bg-gray-200" />
        </div>
      </div>
      {friends && (
        <>
          {friends.map((item) => {
            const { name, src } = item;
            return (
              <div key={name}>
                <Contacts name={name} src={src} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Widgets;
