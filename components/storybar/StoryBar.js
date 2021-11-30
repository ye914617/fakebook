import React from "react";
import { useSelector } from "react-redux";
import Storycard from "../storycard/Storycard";

const StoryBar = () => {
  const friends = useSelector((state) => state.friends);

  return (
    <div className="flex justify-center pt-3">
      {friends.map((item) => {
        return (
          <div key={item.name}>
            <Storycard
              src={item.src}
              name={item.name}
              link={item.link}
              description={item.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StoryBar;
