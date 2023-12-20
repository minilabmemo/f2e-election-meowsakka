import React, { useEffect, useRef, useState } from 'react'
import banner from "../assets/images/banner.png";
import BG from "../assets/images/BG_top.png";
import title_bg from "../assets/images/title_bg.svg";
import plane from "../assets/images/plane.png";
import plane_path from "../assets/images/plane_path.svg";
import { news, newsType } from '../utils/news';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
function Title({ text }: { text: string }) {
  return (
    <div className=" flex flex-col items-center w-[300px]">
      <h1 className="text-5xl font-noto font-semibold text-blue-250 h-[70px]">{text}</h1>
      <div className="line h-[16px] w-[97px] bg-gray-150 mt-3"></div>
    </div>
  )
}

export default function Content() {
  const [refService, inViewService] = useInView({ triggerOnce: false, });
  const [isAnimatedFly, setIsAnimatedFly] = useState(false);
  useEffect(() => {
    setIsAnimatedFly(inViewService)
  }, [inViewService]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
        }
      }, {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  };
  const [title, setTitle] = useState(news[0].title)
  const handleClick = (item: newsType, index: number) => {
    setTitle(item.title)
  };


  return (
    <div className="overflow-hidden" style={{ backgroundImage: `url(${BG})` }}>
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

      <section id="news" className="h-[1080px] relative  flex flex-col  w-full justify-center "  >
        <div className="self-end ">  <Title text="最新活動"></Title></div>
        <div className="carousel-bg rotate-[15deg]     overflow-hidden   self-center w-[120vw]">

          <svg className="svg w-0 h-0">
            <clipPath id="triangle-path" clipPathUnits="objectBoundingBox">
              <path d="M0.496,0.991 C0.502,1,0.515,1,0.521,0.991 L1,0.029 C1,0.016,1,0,0.989,0 H0.019 C0.007,0,0,0.016,0.006,0.029 L0.496,0.991"></path>
            </clipPath>
          </svg>
          <svg className="svg w-0 h-0">
            <clipPath id="triangle-path-reverse" clipPathUnits="objectBoundingBox" transform="rotate(180,210,200) ">
              <path d="M0.496,0.991 C0.502,1,0.515,1,0.521,0.991 L1,0.029 C1,0.016,1,0,0.989,0 H0.019 C0.007,0,0,0.016,0.006,0.029 L0.496,0.991"></path>
            </clipPath>
          </svg>
          <Slider {...settings} className="carousel flex justify-start items-start  h-[500px]	">
            {news.map((value, index) => (
              <div style={{ width: 280 }} key={index} className="drop-shadow-[6px_6px_2px_rgba(61,61,61,0.7)] my-10  hover:scale-[1.1] " onMouseMove={() => handleClick(value, index)}>
                <div style={{ backgroundImage: `url(${value.src})` }}
                  className={`grow-0 shrink-0 w-[420px] h-[400px] bg-cover bg-center ${index % 2 === 0 ? "clipped" : "clipped-reverse"} `}> </div>
              </div>
            ))}

          </Slider>


        </div>
        <div className="title font-semibold text-blue-150 relative ">

          <div className=" text-[32px] absolute p-10 z-10 flex flex-col justify-center items-start  w-[800px] h-[200px]">
            {title}
            <button className="bg-blue-150 rounded-[30px] py-[5px] px-[21px] mt-[37px] self-end">
              <span className="text-2xl leading-[40px] font-semibold text-white "> 暸解更多</span>
            </button>
          </div>

          <div className="w-[1000px] absolute top-0 left-0">  <img src={title_bg} alt="title_bg" /></div>

        </div>

      </section >
      <section id="service" className="h-[1080px]   flex flex-col   justify-center px-[63px] py-[177px] " ref={refService} >
        <Title text="民眾服務信箱"></Title>

        <div className="flex flex-col items-center py-[177px] relative">

          <div className="w-[1328px] h-[493px] absolute top-0 left-0">  <img src={plane_path} alt="plane_path" className="" /></div>
          <div className={`w-[226px] h-[111px] absolute plane ${isAnimatedFly ? "fly" : ""} top-0 left-0`}>  <img src={plane} alt="plane" /></div>

          <h2 className="text-[32px] font-semibold text-red-250 m-[22px]"> 您的聲音，我們的行動！</h2>
          <div className="text-2xl font-medium text-black-default leading-[50px]">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。</div>
          <div className="text-2xl font-medium text-black-default leading-[50px]">分享您的想法，一同為我們的未來打造更美好！！</div>

        </div>

      </section>

      <section>

      </section>
    </div >
  )
}
