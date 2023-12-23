import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import close from "../assets/images/X.svg";
export default function Modal({ children, SetModal }: { children: ReactNode, SetModal: Dispatch<SetStateAction<boolean>>; }) {
  return (
    <div className=" bg-white p-10 fixed bottom-animate left-1/2 -translate-x-1/2 
    w-[80vw] max-w-[1280px] h-[80vh] rounded-t-[80px] ">
      <div className="absolute right-[40px] w-[43px] h-[77px]" onClick={() => SetModal(false)}><img src={close} alt="close" /></div>
      <div className=" content overflow-y-auto h-full">   {children}</div>

    </div>
  )
}
