import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, orderBy, query } from "@firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "../Post/Post";

const Posts = () => {
  const posts = collection(db, "posts");
  const postsQuery = query(posts, orderBy("timeStamp", "desc"));
  const [realtimePosts, loading, error] = useCollection(postsQuery, {});

  return (
    <div>
      {realtimePosts &&
        realtimePosts.docs.map((item) => {
          return (
            <Post
              key={item.id}
              id={item.id}
              name={item.data().name}
              image={item.data().image}
              message={item.data().message}
              timeStamp={item.data().timeStamp}
              postUrl={item.data().postUrl}
            />
          );
        })}
    </div>
  );
};

export default Posts;
