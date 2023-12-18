import React from 'react'
import banner from "../assets/images/banner.png";
import BG from "../assets/images/BG_top.png";




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
        <div className="absolute top-0 left-0"><img src={BG} alt="BG" /></div>
        <Title text="政策議題"></Title>

        <div className="flex flex-col items-center">

          <h2 className="text-[32px] font-semibold text-red-250 mb-[22px]"> 我們的訴求</h2>

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
    </div>
  )
}
