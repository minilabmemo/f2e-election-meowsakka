import React from 'react'
import logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import TwitterX from "../assets/images/TwitterX.svg";
import YouTube from "../assets/images/YouTube.svg";
import LINE from "../assets/images/LINE.svg";




function NavLink({ href, text, animate }: { href: string; text: string; animate: boolean }) {
  return (
    <>
      {animate ? (
        <li className="group">
          <a href={href} >{text}</a>
          <div className=" w-0 group-hover:w-full transition-[width] duration-1000 ease-in-out bg-red-100 h-[5px] ">
          </div>
        </li>
      ) : (
        <li className="">
          <a href={href} >{text}</a>
        </li>

      )}
    </>
  );
}



//TODO 縮說
export default function Header() {
  return (
    <header className='fixed  top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-screen-3xl  flex items-center px-[60px] pt-[37px] pb-[38px]  bg-white text-blue-150 text-[32px] font-semibold fill-white drop-shadow-default'>
      <div className="logo w-[142px]" > <img src={logo} alt="logo" /></div>
      <nav className='m-auto  w-[819px] '>
        <ul className="flex justify-between">

          <NavLink href={'#about'} text={'關於薩卡'} animate={true}></NavLink>

          <NavLink href={'#policies'} text={'政策議題'} animate={true}></NavLink>
          <NavLink href={'#news'} text={'最新活動'} animate={true}></NavLink>
          <NavLink href={'#services'} text={'民眾服務'} animate={true}></NavLink>

        </ul>
      </nav>
      <div className="w-[280px] h-[40px] flex ">
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={TwitterX} alt="TwitterX" />
        <img src={YouTube} alt="YouTube" />
        <img src={LINE} alt="LINE" />
      </div>

    </header>
  )
}
