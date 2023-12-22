import React, { useEffect, useRef, useState, RefObject } from 'react'
import logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import TwitterX from "../assets/images/TwitterX.svg";
import YouTube from "../assets/images/YouTube.svg";
import LINE from "../assets/images/LINE.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';




function NavLink({ href, text, animate }: { href: string; text: string; animate: boolean }) {
  return (
    <>
      {animate ? (
        <li className="group mx-5">
          <a href={href} >{text}</a>
          <div className=" w-0 group-hover:w-full transition-[width] duration-1000 ease-in-out bg-red-100 h-[5px] ">
          </div>
        </li>
      ) : (
        <li className="mx-5">
          <a href={href} >{text}</a>
        </li>

      )}
    </>
  );
}




export default function Header() {

  const hRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 100) {
        if (hRef.current) {
          hRef.current.style.transition = ".5s";
          hRef.current.style.height = "100px";

        }
      } else {
        if (hRef.current) {
          hRef.current.style.transition = "0s";
          hRef.current.style.height = "135px";

        }

      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMeanOpen, setIsMeanOpen] = useState(false)

  return (
    <div className="flex items-center  h-[135px]">
      <header ref={hRef} className="transition-[height] fixed  top-0 left-1/2 -translate-x-1/2 z-10 
      w-full max-w-screen-3xl  flex items-center justify-between px-[60px]   bg-white text-blue-150  font-semibold fill-white drop-shadow-default">
        <div className="logo w-[142px]" > <img src={logo} alt="logo" /></div>
        <nav className='m-auto  hidden md:block '>
          <ul className="flex justify-between text-2xl xl:text-[32px]">
            <NavLink href={'#about'} text={'關於薩卡'} animate={true}></NavLink>
            <NavLink href={'#policies'} text={'政策議題'} animate={true}></NavLink>
            <NavLink href={'#news'} text={'最新活動'} animate={true}></NavLink>
            <NavLink href={'#services'} text={'民眾服務'} animate={true}></NavLink>
          </ul>
        </nav>
        <div className="w-[250px] h-[30px] flex items-center xl:h-[40px]">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={TwitterX} alt="TwitterX" />
          <img src={YouTube} alt="YouTube" />
          <img src={LINE} alt="LINE" />
        </div>

        <div className={`
    before:bg-red-400 before:w-[100%] before:h-[5px] before:absolute before:top-0  before:transition-all before:duration-1000
     after:bg-red-400 after:w-[100%]  after:h-[5px] after:absolute after:bottom-0  after:transition-all after:duration-1000
     h-[50px] w-[50px] bg-slate-300 relative  
     ${isMeanOpen ? "before:top-1/2 before:-translate-y-1/2 before:rotate-[135deg] after:bottom-1/2 after:translate-y-1/2 after:rotate-[45deg]" : ""}`}>
          <div className={` h-[5px] bg-red-400 w-[100%] absolute top-1/2 -translate-y-1/2  transition-opacity  ${isMeanOpen ? "opacity-0" : "opacity-100"}`}></div>
        </div>


      </header>
    </div>
  )
}
