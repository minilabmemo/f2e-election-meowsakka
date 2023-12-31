import React from 'react'
import logo from "../assets/images/logo.svg";
export default function Footer() {
  return (
    <div className=' flex items-center justify-center flex-col  bg-orange-150 '>
      <div className="flex justify-around items-center  flex-wrap gap-5 p-7 w-[90%]">
        <div className="w-[313px] "><img src={logo} alt="logo" /></div>
        <div className="text-black-150 text-2xl flex my-2">
          <div>
            <div className="m-3  ">104 專區</div>
            <div className="m-3  ">人才招募</div>
          </div>
          <div>
            <div className="m-3  ">友善連結</div>
            <div className="m-3  ">小額捐款</div>
          </div>

          <div></div>
        </div>
        <div className="text-black-150 text-2xl flex flex-col mt-2">
          <div className="m-1">喵星區，毛茸茸大道 88 號，喵喵大樓 3 樓</div>
          <div className="m-1">(02) 888-5678</div>
          <div className="m-1">meowoffice@linmeow.tw </div>

        </div>
      </div>
      <div className="h-[5px] bg-red-250"></div>
      <div className="text-black-150 text-2xl flex justify-center pb-8">© 2023 喵薩卡 版權所有。</div>
    </div>
  )
}
