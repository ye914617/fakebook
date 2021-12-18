import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
  ThumbUpIcon,
  ShareIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import PostOptionBox from "../postOptionBox/PostOptionBox";
import EditPostForm from "../editPostForm/EditPostForm";
import DeletePostAlert from "../deletePostAlert/DeletePostAlert";

const Post = ({ name, message, timeStamp, postUrl, image, id }) => {
  const user = useSelector((state) => state.user);

  //To manage single post option box
  const [showPostOptionBox, setShowPostOptionBox] = useState(false);

  const togglePostOptionBox = () => {
    setShowPostOptionBox(!showPostOptionBox);
  };
  //To manage single post option box

  //Open and close edit post form
  const [showEditPostForm, setShowEditPostForm] = useState(false);

  const closeEditPostForm = () => {
    setShowEditPostForm(false);
  };
  const openEditPostForm = () => {
    setShowEditPostForm(true);
  };
  //Open and close edit post form

  //Open and close delete post alert form
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const openDeleteAlert = () => {
    setShowDeleteAlert(true);
  };
  const closeDeleteAlert = () => {
    setShowDeleteAlert(false);
  };
  //Open and close delete post alert form

  return (
    <>
      {showEditPostForm && (
        <EditPostForm
          showEditPostForm={showEditPostForm}
          closeEditPostForm={closeEditPostForm}
          id={id}
        />
      )}
      {showDeleteAlert && (
        <DeletePostAlert
          showDeleteAlert={showDeleteAlert}
          closeDeleteAlert={closeDeleteAlert}
          id={id}
        />
      )}
      <div className="flex flex-col justify-center items-center">
        {/* Logo, name, timestamp message */}
        <div className="bg-white w-screen-90 sm:w-screen/3 mt-6 rounded-t-lg p-3 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src={image}
                width={40}
                height={40}
                alt="profile picture"
                className="rounded-full cursor-pointer"
              />
              <div>
                <p className="font-medium cursor-pointer hover:underline">
                  {name}
                </p>
                <p className="text-xs text-gray-400 cursor-pointer hover:underline">
                  {new Date(timeStamp?.toDate()).toLocaleString()}
                </p>
              </div>
            </div>
            <div className={user.name ? "" : "cursor-not-allowed"}>
              <div
                onClick={togglePostOptionBox}
                className={
                  user.name
                    ? "p-2 cursor-pointer hover:bg-gray-100 rounded-full relative"
                    : "p-2 pointer-events-none hover:bg-gray-100 rounded-full relative"
                }
              >
                <DotsHorizontalIcon className="w-5 h-5" />
                {showPostOptionBox && (
                  <div className="absolute right-0 z-10">
                    <PostOptionBox
                      openEditPostForm={openEditPostForm}
                      openDeleteAlert={openDeleteAlert}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="pt-4">{message}</p>
        </div>

        {/* photo */}
        {postUrl && (
          <div className="w-screen-90 h-screen/3 relative sm:w-screen/3 sm:h-screen/2">
            <Image src={postUrl} layout="fill" className="" />
          </div>
        )}

        {/* footer */}
        <div className="p-2 rounded-b-lg bg-white w-screen-90 sm:w-screen/3 text-gray-500">
          <div className="pt-1 border-t-2 flex justify-between items-center">
            <div className="text-xs sm:text-base w-full justify-center flex items-center cursor-pointer hover:bg-gray-100">
              <ThumbUpIcon className="w-5" />
              <p className="ml-1">Like</p>
            </div>
            <div className="text-xs sm:text-base w-full justify-center flex items-center cursor-pointer hover:bg-gray-100">
              <ChatAltIcon className="w-5" />
              <p className="ml-1">Comment</p>
            </div>
            <div className="text-xs sm:text-base w-full justify-center flex items-center cursor-pointer hover:bg-gray-100">
              <ShareIcon className="w-5" />
              <p className="ml-1">Share</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
