import React, { useState } from "react";
import logo__icon from "@/assets/icons/LOGOTYPE – BILETICK.svg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(true);

  return (
    <header className="h-20 bg-dark">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="py-[22px]">
            <NavLink to={"/"}>
              <img src={logo__icon} alt="logo icon" />
            </NavLink>
          </div>

          <ul className="flex gap-10 py-4 ml-28 font-medium font-[Inter] text-[#A1A1A1]">
            <li>
              <NavLink
                className={`flex flex-col items-center gap-1.5 ${
                  pathname === "/" && "text-red-700"
                }`}
                to={"/"}>
                <IoHomeOutline className="text-2xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`flex flex-col items-center gap-1.5 ${
                  pathname === "/movies" && "text-red-700"
                }`}
                to={"/movies"}>
                <MdOutlineMovie className="text-2xl" />
                Moives
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`flex flex-col items-center gap-1.5 ${
                  pathname === "/saved" && "text-red-700"
                }`}
                to={"/saved"}>
                <RiCoupon3Line className="text-2xl" />
                Saved
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`flex flex-col items-center gap-1.5 ${
                  pathname === "/search" && "text-red-700"
                }`}
                to={"/search"}>
                <IoSearchSharp className="text-2xl" />
                Search
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <div className="text-[#A1A1A1]">
             {theme ? <MdOutlineLightMode onClick={()=> setTheme((prev)=> !prev )} className="text-3xl cursor-pointer" /> : <FaRegMoon className="text-3xl cursor-pointer" onClick={()=> setTheme((prev)=> !prev )} />}  
            </div>
            <a href="#">
              <button className="w-[180px] h-[56px]  bg-primary rounded-[12px] cursor-pointer text-white">
                SignUp
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
