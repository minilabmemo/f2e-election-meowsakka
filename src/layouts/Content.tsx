import React, { useEffect, useRef, useState } from 'react'
import banner from "../assets/images/banner_click.png";
import BG from "../assets/images/BG_top.png";
import title_bg from "../assets/images/title_bg.svg";
import plane from "../assets/images/plane.png";
import plane_path from "../assets/images/plane_path.svg";
import about_sakka from "../assets/images/about_sakka.png";
import sakka_detail from "../assets/images/sakka_detail.png";
import { news, newsType } from '../utils/news';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import Modal from '../components/Modal';

import NewsModal from './NewsModal';
function Title({ text }: { text: string }) {
  return (
    <div className=" flex flex-col items-center w-[300px]">
      <h1 className="text-5xl font-noto font-semibold text-blue-250 h-[70px]">{text}</h1>
      <div className="line h-[16px] w-[97px] bg-gray-150 mt-2"></div>
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
  const [aboutModal, setAboutModal] = useState(false)
  const [newsModal, setNewsModal] = useState(false)

  useEffect(() => {

    news.forEach((item) => {
      new Image().src = `${item.src}`
    });
  }, [])

  return (
    <div className="overflow-hidden" style={{ backgroundImage: `url(${BG})` }}>
      <section id="about" onClick={() => { setAboutModal(true) }}>
        <div className='relative'>
          <img src={banner} alt="banner" />
        </div>
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
            <span className="text-2xl leading-[40px] font-semibold text-white" >   詳細政策</span>
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
                  className={`grow-0 shrink-0 w-[420px] h-[400px] bg-cover  ${index % 2 === 0 ? "clipped" : "clipped-reverse"} `}> </div>
              </div>
            ))}


          </Slider>


        </div>
        <div className="title font-semibold text-blue-150 relative -translate-x-4">

          <div className=" text-[32px] absolute p-10 z-[1] flex flex-col justify-center items-start  w-[800px] h-[200px]">
            {title}
            <button className="bg-blue-150 rounded-[30px] py-[5px] px-[21px] mt-[37px] self-end">
              <span className="text-2xl leading-[40px] font-semibold text-white " onClick={() => { setNewsModal(!newsModal) }}> 暸解更多</span>
            </button>
          </div>

          <div className="w-[1000px] absolute top-0 left-0">  <img src={title_bg} alt="title_bg" /></div>

        </div>

      </section >
      <section id="services" className="h-[1080px]   flex flex-col   justify-center px-[63px] py-[177px] " ref={refService} >
        <Title text="民眾服務信箱"></Title>

        <div className="flex flex-col items-center py-[177px] relative">

          <div className="w-[1328px] h-[493px] absolute top-0 left-0">  <img src={plane_path} alt="plane_path" className="" /></div>
          <div className={`w-[226px] h-[111px] absolute plane ${isAnimatedFly ? "fly" : ""} top-0 left-0`}>  <img src={plane} alt="plane" /></div>
          <div className="absolute top-[50%]  flex flex-col   justify-center items-center">
            <h2 className="text-[32px] font-semibold text-red-250 m-[22px]"> 您的聲音，我們的行動！</h2>
            <div className="text-2xl font-medium text-black-default leading-[50px]">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。</div>
            <div className="text-2xl font-medium text-black-default leading-[50px]">分享您的想法，一同為我們的未來打造更美好！！</div>
          </div>
        </div>

      </section>


      {aboutModal && (
        <Modal SetModal={setAboutModal}>
          <div className=" scroll-bar-no-show overflow-y-auto h-full">
            <div className="flex flex-col items-center">
              <h1 className="text-[48px] font-semibold text-blue-250">薩卡的主張</h1>
              <div className="w-[90%] text-[20px] text-black-default leading-[225%] tracking-[6px] my-[32px]">

                我堅信，藉由推動更完善的<span className="text-red-250">貓咪</span>福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的<span className="text-red-250">貓咪</span>福利政策，為台灣的 GDP 經濟帶來巨大效益。
                因此，我期望能在立法院內推進這些政策，確保每一隻<span className="text-red-250">貓咪</span>都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻<span className="text-red-250">貓咪</span>開始。
              </div>
            </div>

            <div className="flex justify-around flex-wrap">
              <div className="h"><img src={about_sakka} alt="about_sakka" /></div>
              <div className="h">
                <h1 className="text-[48px] font-semibold text-blue-250">關於薩卡</h1>
                <div className="my-[46px] text-[24px] leading-[208%] tracking-[3.6px]">
                  <h3 className="text-red-250">經歷</h3>
                  <div className="h">曾擔任「喵星宇宙」顧問</div>
                  <div className="h">現任「喵喵大好」榮譽理事長</div>
                  <div className="h">國立喵喵大學特聘講師及榮譽校友</div>
                </div>
                <div className="my-[46px] text-[24px] leading-[208%] tracking-[3.6px]">
                  <h3 className="text-red-250">學歷</h3>
                  <div className="h">英國哈喵大學 / 喵行為學系博士畢業</div>
                  <div className="h">國立喵喵大學 / 喵行為學系碩士畢業</div>
                  <div className="h">國立喵喵大學 / 喵喵心理系學士畢業</div>
                </div>
              </div>
            </div>
            <div className="relative w-[10px]  font-noto text-gray-350 text-[85px] opacity-10 font-bold">
              <div className="absolute -top-[50px] -translate-x-[200px] z-10">
                <div className="scale-x-[-1] whitespace-nowrap ">薩卡班甲魚</div>
                <div className="scale-x-[-1] ">Sacabambaspis</div>
                <div className="scale-x-[-1] whitespace-nowrap">サカバンバスピス</div>
              </div>
            </div>

            <div className="flex justify-around flex-wrap my-[32px]">
              <div className="flex-1 text-[20px] text-black-default leading-[225%] tracking-[6px]">
                <h1 className="text-[48px] font-semibold text-blue-250">薩卡的起源</h1>
                <div className="my-[32px]">薩卡出生於澳洲附近的海域，隨著洋流去過很多地方，某天在躲避掠食者的攻擊時，努力的一躍跳上了岸，發現自己竟然可以在空氣中自由呼吸，於是薩卡開始了地面上的旅行。
                  風和日麗的某個夏天，薩卡走進了貓咪咖啡廳，馬上就被許多<span className="text-cyan-150">＼＼＼</span><span className="text-yellow-250">世界上最可愛的生物們</span><span className="text-cyan-150">／／／</span>包圍了，基於散播歡樂散播愛的理念，薩卡決定要將<span className="text-cyan-150">＼＼＼</span><span className="text-yellow-250">貓貓的可愛</span><span className="text-cyan-150">／／／</span>發揚光大。
                  「就從改善這個太平洋小島的貓貓權益開始吧！」於是薩卡戴上了貓耳，決心參選下一屆立委！</div>
              </div>
              <div className="flex-1"><img src={sakka_detail} alt="sakka_detail" /></div>
            </div>
          </div>
        </Modal>
      )}

      {newsModal && (
        <NewsModal setNewsModal={setNewsModal} />
      )}

    </div >
  )
}
