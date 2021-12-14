import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { db, storage } from "../../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
  doc,
} from "@firebase/firestore";
import { PhotographIcon, EmojiHappyIcon, XIcon } from "@heroicons/react/solid";

const PostForm = ({ closePostPage }) => {
  const userData = useSelector((state) => state.user);
  const showPost = useSelector((state) => state.showPost);
  const { name, image } = userData;
  const [message, setMessage] = useState("");
  const [postPhoto, setPostPhoto] = useState(null);
  const uploadphotoRef = useRef(null);
  const posts = collection(db, "posts");

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPostPhoto(readerEvent.target.result);
    };
  };
  const delPostPhoto = () => {
    setPostPhoto(null);
  };

  const handleUploadPost = (e) => {
    e.preventDefault();
    ////Adding data to a new collection,
    ////document name will auto generated a unique id
    ////if the collection name already exist,then just simply add new data to the collection.
    ////Becareful that even the data content is same, it will store as another new data
    if (!message) return;
    addDoc(posts, {
      message: message,
      name: name,
      image: image,
      timeStamp: serverTimestamp(),
    }).then((dcc) => {
      if (postPhoto) {
        const storageRef = ref(storage, `${dcc.id}`);
        uploadString(storageRef, postPhoto, "data_url").then((item) => {
          getDownloadURL(storageRef).then((url) => {
            const imgPostDoc = doc(db, `posts/${dcc.id}`);
            setDoc(imgPostDoc, { postUrl: url }, { merge: true });
          });
        });
      }
    });
    setMessage("");
    delPostPhoto();
    closePostPage();
  };

  return (
    <>
      {showPost && (
        <div className="fixed top-0 z-50">
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
                  className="w-full h-screen/6 outline-none p-2"
                  placeholder={`What's on your mind, ${name}?`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  onChange={addImageToPost}
                  className="hidden"
                />
                <EmojiHappyIcon className="w-8 h-8 text-yellow-300 hover:text-yellow-600 cursor-pointer" />
              </div>
              <button
                onClick={handleUploadPost}
                className="w-11/12 rounded-md bg-blue-500 text-white p-2 my-4 hover:bg-blue-700"
              >
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
