import React from "react";
import { useSelector } from "react-redux";
import StoryBar from "../storybar/StoryBar";
import InputBox from "../inputbox/InputBox";
import Posts from "../posts/Posts";
import NotLoginInputBox from "../notLoginInputBox/NotLoginInputBox";

const Feed = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-full">
      {/* Stories */}
      <StoryBar />
      {/* InputBox */}
      {user.name ? <InputBox /> : <NotLoginInputBox />}
      {/* Posts */}
      <Posts />
    </div>
  );
};

export default Feed;
