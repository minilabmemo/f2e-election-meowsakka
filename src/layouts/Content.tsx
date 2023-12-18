import React from 'react'
import banner from "../assets/images/banner.png";
import BG from "../assets/images/BG_top.png";

import mask from "../assets/images/mask.svg";
import test from "../assets/images/test.svg";
import a1_photo from "../assets/images/a1_photo.png";
import a2_photo from "../assets/images/a2_photo.png";
function Title({ text }: { text: string }) {
  return (
    <div className=" flex flex-col items-center w-[257px]">
      <h1 className="text-5xl font-noto font-semibold text-blue-250 h-[70px]">{text}</h1>
      <div className="line h-[16px] w-[97px] bg-gray-150 mt-3"></div>
    </div>
  )
}

export default function Content() {


  return (
    <div className="">
      <section id="about" >
        <div><img src={banner} alt="banner" /></div>
        <div className="border-y-4 border-pink-default bg-white flex flex-nowrap overflow-hidden py-3	font-bold">
          <div className="text whitespace-nowrap  text-3xl text-pink-default animate-marquee">
            立委候選人請支持貓黨 1 號＼＼喵薩卡／／立委候選人請支持貓黨 1 號＼＼喵薩卡／／立委候選人請支持貓黨 1 號＼＼喵薩卡／／
          </div>
          <div className="text whitespace-nowrap  text-3xl text-pink-default animate-marquee">
            立委候選人請支持貓黨 1 號＼＼喵薩卡／／立委候選人請支持貓黨 1 號＼＼喵薩卡／／立委候選人請支持貓黨 1 號＼＼喵薩卡／／
          </div>
        </div>

      </section>
      <section id="policies" className="h-[1080px] relative px-[63px] py-[177px]">
        {/* <div className="absolute top-0 left-0"><img src={BG} alt="BG" /></div> */}
        <Title text="政策議題"></Title>

        <div className="flex flex-col items-center">

          <h2 className="text-[32px] font-semibold text-red-250 m-[22px]"> 我們的訴求</h2>

          <div className="text-2xl font-medium text-black-default leading-[50px]">讓庫拉皮卡下船！</div>
          <div className="text-2xl font-medium text-black-default leading-[50px]">不讓貓貓過重，過重也是一種虐待！</div>
          <div className="text-2xl font-medium text-black-default leading-[50px]">為毛孩子謀福利！推動寵物醫療保障方案。</div>
          <div className="text-2xl font-medium text-black-default leading-[50px]">打造休閒天堂！推廣寵物休閒與娛樂場所。</div>
          <div className="text-2xl font-medium text-black-default leading-[50px]">推廣寵物飼養教育，讓愛更加專業。</div>
          <button className="bg-blue-150 rounded-[30px] py-[5px] px-[21px] mt-[37px]">
            <span className="text-2xl leading-[40px] font-semibold text-white">   詳細政策</span>

          </button>
        </div>

      </section>

      <section id="news" className="h-[1080px] relative px-[63px] py-[177px] flex flex-col">
        <div className="self-end">  <Title text="最新活動"></Title></div>
        <div className="carousel">


          <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.586,1 C0.592,1,0.605,1,0.61,1 L1,0.369 C1,0.356,1,0.339,1,0.339 H0.109 C0.097,0.339,0.09,0.356,0.097,0.369 L0.586,1"></path></clipPath>
          </svg>
          <div style={{ backgroundImage: `url(${a1_photo})` }} className="clipped"> </div>
          <div style={{ backgroundImage: `url(${a2_photo})` }} className="clipped "> </div>

        </div>
      </section >

    </div >
  )
}
