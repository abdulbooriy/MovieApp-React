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
  const [show, setShow] = useState(false);

  return (
    <header className="max-w-full h-20 bg-dark">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="py-[22px]">
            <NavLink to={"/"}>
              <img className="w-full h-full" src={logo__icon} alt="logo icon" />
            </NavLink>
          </div>

          <ul className="lg:flex gap-10 py-4 ml-28 font-medium font-[Inter] text-[#A1A1A1] md:hidden hidden">
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
                Movies
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
            <div className="text-[#A1A1A1] hidden lg:block transition">
              {theme ? (
                <MdOutlineLightMode
                  onClick={() => setTheme((prev) => !prev)}
                  className="text-3xl cursor-pointer"
                />
              ) : (
                <FaRegMoon
                  className="text-3xl cursor-pointer"
                  onClick={() => setTheme((prev) => !prev)}
                />
              )}
            </div>

            <div
              onClick={() => setShow(!show)}
              className={`flex flex-col gap-1.5 lg:hidden md:flex md:gap-1.5 cursor-pointer p-2 transition ${
                show ? `bg-red-900 rounded` : ""
              }`}>
              <div className="w-9 h-1.5 bg-primary rounded"></div>
              <div className="w-9 h-1.5 bg-primary rounded"></div>
              <div className="w-9 h-1.5 bg-primary rounded"></div>
            </div>

            <NavLink>
              <button className="w-[180px] h-[56px] bg-primary rounded-[12px] cursor-pointer text-white">
                SignUp
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
