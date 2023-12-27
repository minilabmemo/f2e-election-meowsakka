import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import Modal from '../components/Modal'
import { news } from '../utils/news'

export default function NewsModal({ setNewsModal }: { setNewsModal: Dispatch<SetStateAction<boolean>>; }) {
  const lineRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const modalElem = document.getElementById('newsModal');
    const sectionElement = document.getElementById('firstSection');
    if (sectionElement) {
      setTimeout(() => {//等待 modal 出現完後再新增第一個元素動畫
        sectionElement.classList.add('left-move-in-animate');
      }, 1000);

    }


    const handleScroll = () => {
      if (modalElem && sectionElement && lineRef.current) {
        const scrollTop = modalElem.scrollTop;
        const h = sectionElement.clientHeight
        const num = Math.ceil((scrollTop / h) + 1); //在上一個高度一半時顯示下一個，並無條件進位
        const nextChild: HTMLDivElement | null = document.querySelector(`.activity:nth-child(${num})`);
        if (num % 2 === 0) {
          nextChild?.classList.remove('right-move-out-animate');
          nextChild?.classList.add('right-move-in-animate');

        } else {
          nextChild?.classList.remove('left-move-out-animate');
          nextChild?.classList.add('left-move-in-animate');
        }

        for (let index = num + 1; index < news.length; index++) {
          const hiddenChild: HTMLDivElement | null = document.querySelector(`.activity:nth-child(${index})`);

          if (index % 2 === 0) {
            hiddenChild?.classList.remove('right-move-in-animate');
            hiddenChild?.classList.add('right-move-out-animate');
          } else {
            hiddenChild?.classList.remove('left-move-in-animate');
            hiddenChild?.classList.add('left-move-out-animate');
          }
        }

        lineRef.current.style.bottom = "-" + scrollTop + "px"
      }
    };

    if (modalElem) {
      modalElem.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (modalElem) {
        modalElem.removeEventListener('scroll', handleScroll);
      }
    };
  });
  return (
    <Modal SetModal={setNewsModal}>
      <div className="relative scroll-bar-no-show  overflow-y-scroll h-full p-5" id="newsModal" >

        {news.map(((item, index) => (
          <section key={index} className={`activity flex ${index % 2 === 0 ? "" : "flex-row-reverse"}  opacity-0    `}

            id={`${index === 0 ? "firstSection" : ""}`}>
            <div className="flex-1 flex flex-col ">
              <div className={`w-full flex flex-col ${index % 2 === 0 ? "" : "items-end"}`}>
                <h2 className="w-2/3 text-blue-150 text-[32px] tracking-[10%] font-semibold">{item.title}</h2>
                <div className={`w-full flex relative ${index % 2 === 0 ? "" : " justify-end"}`}>
                  <div className="w-2/3"><img src={`${item.src} `} alt="a1_photo" /></div>
                  {index % 2 === 0 ?
                    (<div className="w-1/3  bg-red-250 h-[3px] top-1/2 left-2/3 absolute ">
                      <div className="bg-red-250 w-[20px]  h-[20px]  rounded-[50%] absolute right-0 translate-x-1/2 -translate-y-1/2"></div></div>
                    ) :
                    (<div className="w-1/3  bg-red-250 h-[3px] top-1/2 left-0 absolute ">
                      <div className="bg-red-250 w-[20px]  h-[20px]  rounded-[50%] absolute left-0 -translate-x-1/2 -translate-y-1/2"></div></div>

                    )
                  }
                </div>

                <div className="w-2/3">
                  <div className="text-red-250 leading-[225%] font-medium">{item.date}</div>
                  <div className="d"> {item.desc}</div>
                </div>
              </div>

            </div>
            <div className="flex-1 ">
            </div>
          </section>
        )))}



        <div className=" absolute bg-red-250 w-[3px] left-1/2 -translate-x-1/2 top-[50px] -bottom-[300px]"
          ref={lineRef}>
          <div className="bg-red-250 w-[20px]  h-[20px]  rounded-[50%] absolute right-0 top-0 translate-x-1/2 "></div>
          <div className="bg-red-250 w-[20px]  h-[20px]  rounded-[50%] absolute right-0 bottom-0 translate-x-1/2 "></div>
        </div>

      </div>

    </Modal>
  )
}
