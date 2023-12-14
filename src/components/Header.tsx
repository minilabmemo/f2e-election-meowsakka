import React from 'react'
import logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import TwitterX from "../assets/images/TwitterX.svg";
import YouTube from "../assets/images/YouTube.svg";
import LINE from "../assets/images/LINE.svg";

export default function Header() {
  return (
    <div className='flex items-center px-[60px] pt-[37px] pb-[38px]  bg-white text-blue-default text-[32px] font-semibold fill-white drop-shadow-default'>
      <div className="logo w-[142px]" > <img src={logo} alt="logo" /></div>
      <nav className='m-auto  w-[819px] '>
        <ul className="flex justify-between">
          <li><a href="#about" className="href">關於薩卡</a></li>
          <li><a href="#about" className="href">最新活動</a></li>
          <li><a href="#about" className="href">政策議題</a></li>
          <li><a href="#about" className="href">民眾服務</a></li>
        </ul>
      </nav>
      <div className="w-[280px] h-[40px] flex ">
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={TwitterX} alt="TwitterX" />
        <img src={YouTube} alt="YouTube" />
        <img src={LINE} alt="LINE" />
      </div>

    </div>
  )
}
