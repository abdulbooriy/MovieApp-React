import React from "react";

const Skeleton = ({ count }) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 rounded-[12px]">
      {Array(count)
        .fill("")
        .map((_, index) => (
          <div key={index}>
            <div className="w-full h-[400px] bg-[#15191e] rounded-[10px]"></div>
            <div className="w-10/12 h-7 bg-[#15191e] my-3 rounded-[10px]"></div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
