import React from "react";
import Link from "next/link";
import Header from "../components/header";

const About = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-screen flex flex-col items-center">
        <h5 className="text-5xl my-5">About us</h5>
        <p className="text-2xl mb-3">Coming soon.</p>
        <p className="text-lg">
          Go back to the{" "}
          <Link href="/">
            <a className="text-blue-500 underline">Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default About;
