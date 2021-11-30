import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import StoryBar from "../storybar/StoryBar";
import InputBox from "../inputbox/InputBox";

const Feed = () => {
  return (
    <div>
      {/* Stories */}
      <StoryBar />
      {/* InputBox */}
      <InputBox />
      {/* Posts */}
    </div>
  );
};

export default Feed;
