import React from "react";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";

const PostOptionBox = ({ openEditPostForm, openDeleteAlert }) => {
  return (
    <div>
      <div className="bg-white shadow-lg p-2 sm:w-screen/8 sm:h-screen/6 relative flex flex-col items-center justify-center">
        <div
          onClick={openEditPostForm}
          className="border-b-2 border-gray-200 w-full cursor-pointer"
        >
          <div className="flex p-1 space-x-2 hover:bg-gray-200 my-2">
            <PencilAltIcon
              className="w-5 h-5
        "
            />
            <p>Edit</p>
          </div>
        </div>
        <div onClick={openDeleteAlert} className="w-full cursor-pointer">
          <div className="flex p-1 space-x-2 hover:bg-gray-200 my-2">
            <TrashIcon
              className="w-5 h-5
        "
            />
            <p>Delete</p>
          </div>
        </div>
        <div className="w-4 overflow-hidden inline-block absolute right-2 -top-2">
          <div className=" h-2 w-2 bg-white rotate-45 transform origin-bottom-left"></div>
        </div>
      </div>
    </div>
  );
};

export default PostOptionBox;
