import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { db } from "../../firebase";
import { updateDoc, doc } from "@firebase/firestore";
import { PhotographIcon, EmojiHappyIcon, XIcon } from "@heroicons/react/solid";

const EditPostForm = ({ closeEditPostForm, showEditPostForm, id }) => {
  const userData = useSelector((state) => state.user);
  const { name, image } = userData;
  const [message, setMessage] = useState("");

  //Edit post
  const handleEditPost = (e) => {
    e.preventDefault();
    if (id) {
      const docRef = doc(db, "posts", id);
      if (!message) return;
      updateDoc(docRef, {
        message: message,
      });
      setMessage("");
      closeEditPostForm();
    }
  };
  //Edit post

  return (
    <>
      {showEditPostForm && (
        <div className="fixed top-0 z-50">
          <div className="flex justify-center items-center w-screen h-screen bg-gray-100/90">
            <div className="relative w-screen-90 xl:w-6/12 rounded-lg bg-white flex flex-col justify-center items-center">
              <p className="p-2 w-11/12 text-center border-b-2 font-bold text-lg">
                Edit Post
              </p>
              <div className="flex w-11/12 items-center space-x-2 p-2">
                {image && (
                  <Image
                    src={image}
                    width="40"
                    height="40"
                    className="rounded-full"
                  />
                )}
                {name && <p className="font-bold">{name}</p>}
              </div>
              <div className="w-11/12">
                <textarea
                  className="w-full h-screen/6 outline-none p-2"
                  placeholder={`What's on your mind, ${name}?`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex w-11/12 justify-between p-2">
                <PhotographIcon className="w-8 h-8 text-green-400 hover:text-green-600 cursor-pointer" />
                <EmojiHappyIcon className="w-8 h-8 text-yellow-300 hover:text-yellow-600 cursor-pointer" />
              </div>
              <button
                onClick={handleEditPost}
                className="w-11/12 rounded-md bg-blue-500 text-white p-2 my-4 hover:bg-blue-700"
              >
                Edit
              </button>
              <XIcon
                onClick={closeEditPostForm}
                className="w-5 h-5 absolute top-2 right-2 sm:w-8 sm:h-8 text-gray-300 hover:text-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPostForm;
