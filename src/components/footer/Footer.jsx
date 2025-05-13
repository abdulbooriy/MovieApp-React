import React from "react";
import footer__icon from "@/assets/icons/footer__icon.svg";
import goole__play__icon from "@/assets/icons/google__play__icon.svg";
import app__store__icon from "@/assets/icons/app__store__icon.svg";
import { NavLink } from "react-router-dom";
import file_list__icon from "@/assets/icons/file__list__icon.svg";
import banner__icon from "@/assets/icons/banner__icon.svg";
import question__icon from "@/assets/icons/question-line.svg";
import phone__icon from "@/assets/icons/phone-line.svg";
import movie__icon from "@/assets/icons/movie-line.svg";
import concert__icon from "@/assets/icons/concert__icon.svg";
import theater__icon from "@/assets/icons/theater__icon.svg";
import bassketball__icon from "@/assets/icons/basketball-line.svg";
import instagram__icon from "@/assets/icons/instagram-line.svg";
import facebook__icon from "@/assets/icons/facebook-circle-line.svg";
import youtube__icon from "@/assets/icons/youtube-line.svg";

const Footer = () => {
  return (
    <div className="container mx-auto mt-[118px]">
      <footer className="border w-[1180px] h-[240px] bg-[#1D1D1D] rounded-[12px] mb-10 grid grid-cols-4 ">
        <div className="py-[30px] px-[30px]">
          <NavLink to={"/"}>
            <img src={footer__icon} alt="footer icon" />
          </NavLink>
          <div className="flex flex-col gap-2 pt-12">
            <div>
              <NavLink
                to={"https://play.google.com/store/games?hl=ru"}
                target="_blank">
                <img src={goole__play__icon} alt="google play icon" />
              </NavLink>
            </div>
            <div>
              <NavLink to={"https://www.apple.com/app-store/"} target="_blank">
                <img src={app__store__icon} alt="app store icon" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="py-[30px] font-[Inter]">
          <h1 className="font-medium text-white">О нас</h1>

          <ul className="flex flex-col pt-[18px] gap-[18px] text-footer_primary">
            <li className="flex gap-2.5">
              <img src={file_list__icon} alt="file list icon" />
              <NavLink>Публичная оферта</NavLink>
            </li>
            <li className="flex gap-2.5">
              <img src={banner__icon} alt="banner icon" />
              <NavLink>Реклама</NavLink>
            </li>
            <li className="flex gap-2.5">
              <img src={question__icon} alt="faq icon" />
              <NavLink>F.A.Q</NavLink>
            </li>
            <li className="flex gap-2.5">
              <img src={phone__icon} alt="phone icon" />
              <NavLink>Контакты</NavLink>
            </li>
          </ul>
        </div>

        <div className="py-[30px] font-[Inter]">
          <h1 className="font-medium text-white">Категории</h1>

          <ul className="flex flex-col pt-[18px] gap-[18px] text-footer_primary">
            <li className="flex gap-2.5">
              <img src={movie__icon} alt="movie icon" />
              <NavLink>Кино</NavLink>
            </li>
            <li className="flex gap-2.5">
              <img src={theater__icon} alt="theater icon" />
              <NavLink>Театр</NavLink>
            </li>
            <li className="flex gap-2.5">
              <img src={concert__icon} alt="concert icon" />
              <NavLink>Концерты</NavLink>
            </li>
            <li className="flex gap-2.5">
              <img src={bassketball__icon} alt="bassketball icon" />
              <NavLink>Спорт</NavLink>
            </li>
          </ul>
        </div>

        <div className="py-[30px] font-[Inter]">
          <h1 className="font-medium text-white">Связаться с нами</h1>

          <ul className="flex flex-col pt-[18px] gap-[18px] text-footer_primary">
            <li className="flex gap-2.5">
              <NavLink
                className="text-red-700"
                to={"tel:+998958973338"}
                target="_blank">
                +998 (95) 897-33-38
              </NavLink>
            </li>
            <li className="flex gap-2.5 pt-[40px]">
              <h3 className="text-white">Социальные сети</h3>
            </li>
            <li className="flex gap-[20px]">
              <NavLink to={"https://www.instagram.com/"} target="_blank">
                <img src={instagram__icon} alt="instagram icon" />
              </NavLink>
              <NavLink to={"https://www.facebook.com/"} target="_blank">
                <img src={facebook__icon} alt="facebok icon" />
              </NavLink>
              <NavLink to={"https://www.youtube.com/"} target="_blank">
                <img src={youtube__icon} alt="youtube icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
