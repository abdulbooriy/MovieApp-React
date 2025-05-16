import React from "react";
import Card from "../card/Card";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const MovieView = ({ movies }) => {
  const pathname = useLocation();

  return (
    <div className="container mx-auto">
      <div className="mt-[118px] text-white">
        <div className="flex justify-between mb-5 font-[Inter]">
          <span>In the week</span>
          <NavLink
            className={`flex items-center gap-2 text-red-700 ${
              pathname === "/movies" && "text-red-700"
            }`}
            to={"/movies"}>
            Show all{" "}
            <span>
              {" "}
              <FaAngleRight />
            </span>
          </NavLink>
        </div>
        <div className="flex overflow-auto scrollbar-hidden gap-5">
          {movies?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieView);
