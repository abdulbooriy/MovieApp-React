import React from "react";

const Skeleton = ({ count }) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2">
      {Array(count)
        .fill("")
        .map((_, index) => (
          <div key={index}>
            <div className="w-full h-[420px] bg-gray-300"></div>
            <div className="w-10/12 h-7 bg-gray-300 my-3"></div>
            <div className="w-1/2 h-7 bg-gray-300"></div>
            <div></div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
