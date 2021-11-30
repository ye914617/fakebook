import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { PhotographIcon, EmojiHappyIcon, XIcon } from "@heroicons/react/solid";

const PostForm = ({ closePostPage }) => {
  const userData = useSelector((state) => state.user);
  const showPost = useSelector((state) => state.showPost);
  const { name, image } = userData;
  const [postPhoto, setPostPhoto] = useState(null);
  const uploadphotoRef = useRef(null);
  const postRef = useRef(null);

  const onPhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPostPhoto(URL.createObjectURL(event.target.files[0]));
    }
  };

  const delPostPhoto = () => {
    setPostPhoto(null);
  };

  //   const sendPost = (e) => {
  //     e.preventDefault;
  //     if (!postRef) return;

  //     db.collection("posts").add({
  //       message: postRef.current.value,
  //     });
  //   };

  return (
    <>
      {showPost && (
        <div className="absolute top-0 z-20">
          <div className="flex justify-center items-center w-screen h-screen bg-gray-100/90">
            <div className="relative w-screen-90 xl:w-6/12 rounded-lg bg-white flex flex-col justify-center items-center">
              <p className="p-2 w-11/12 text-center border-b-2 font-bold text-lg">
                Write something
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
                  ref={postRef}
                  className="w-full h-screen/6 outline-none p-2"
                  placeholder={`What's on your mind, ${name}?`}
                />
              </div>
              {postPhoto && (
                <div className="w-3/6 h-screen/4 relative sm:w-2/6 sm:h-screen/3">
                  <Image
                    layout="fill"
                    // objectFit="cover"
                    src={postPhoto}
                    alt="preview image"
                  />
                  <button
                    className="absolute top-0 right-0 "
                    onClick={delPostPhoto}
                  >
                    <XIcon className="h-5 sm:h-8 hover:text-gray-400" />
                  </button>
                </div>
              )}
              <div className="flex w-11/12 justify-between p-2">
                {/* Using useref to set photo icon as trigger of uploading photo */}
                <PhotographIcon
                  onClick={() => uploadphotoRef.current.click()}
                  className="w-8 h-8 text-green-400 hover:text-green-600 cursor-pointer"
                />
                <input
                  ref={uploadphotoRef}
                  type="file"
                  onChange={onPhotoChange}
                  className="hidden"
                />
                <EmojiHappyIcon className="w-8 h-8 text-yellow-300 hover:text-yellow-600 cursor-pointer" />
              </div>
              <button className="w-11/12 rounded-md bg-blue-500 text-white p-2 my-4 hover:bg-blue-700">
                Post
              </button>
              <XIcon
                onClick={closePostPage}
                className="w-5 h-5 absolute top-2 right-2 sm:w-8 sm:h-8 text-gray-300 hover:text-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostForm;
