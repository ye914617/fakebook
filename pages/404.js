import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h5 className="text-5xl my-5">Oppss....</h5>
      <p className="text-2xl mb-3">That page cannot be found.</p>
      <p className="text-lg">
        Go back to the{" "}
        <Link href="/">
          <a className="text-blue-500 underline">Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
