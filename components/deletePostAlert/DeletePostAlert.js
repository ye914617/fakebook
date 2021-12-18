import React from "react";
import { db } from "../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";
import { XIcon } from "@heroicons/react/solid";

const DeletePostAlert = ({ showDeleteAlert, closeDeleteAlert, id }) => {
  //Delete post
  const handleDeletePost = (e) => {
    e.preventDefault();
    if (id) {
      const docRef = doc(db, "posts", id);
      deleteDoc(docRef);
      closeDeleteAlert();
    }
  };
  //Delete post

  return (
    <>
      {showDeleteAlert && (
        <div className="fixed top-0 z-50">
          <div className="flex justify-center items-center w-screen h-screen bg-gray-100/90">
            <div className="relative w-screen-90 xl:w-6/12 rounded-lg bg-white flex flex-col justify-center items-center">
              <p className="p-2 w-11/12 text-center border-b-2 font-bold text-lg">
                Delete Post?
              </p>
              <p className="p-4 text-center sm:h-screen/4">
                Items in your trash will be automatically deleted after 30 days.
              </p>

              <div className="space-x-2 flex mb-4">
                <button
                  onClick={closeDeleteAlert}
                  className=" bg-white text-blue-600 font-medium p-2 hover:bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeletePost}
                  className=" text-white bg-blue-600 font-medium p-2 hover:bg-blue-700 hover:text-gray-300 rounded-md"
                >
                  Delete
                </button>
              </div>
              <XIcon
                onClick={closeDeleteAlert}
                className="w-5 h-5 absolute top-2 right-2 sm:w-8 sm:h-8 text-gray-300 hover:text-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePostAlert;
