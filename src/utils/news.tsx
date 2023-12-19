
import { ReactNode } from "react";
import a1_photo from "../assets/images/a1_photo.png";
import a2_photo from "../assets/images/a2_photo.png";
import a3_photo from "../assets/images/a3_photo.png";
import a4_photo from "../assets/images/a4_photo.png";

export type newsType = {
  title: string,
  desc: string,
  src: ReactNode | string,
}


export const news: newsType[] = [
  {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    desc: '參與台北寵物論壇，爭取貓咪友善環境',
    src: a1_photo
  }, {
    title: '收容所模特兒大比拼！',
    desc: '收容所模特兒大比拼！',
    src: a3_photo
  }, {
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    desc: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    src: a2_photo
  }, {
    title: '台北寵物論壇',
    desc: '參與台北寵物論壇，爭取貓咪友善環境',
    src: a4_photo
  }, {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    desc: '參與台北寵物論壇，爭取貓咪友善環境',
    src: a1_photo
  }, {
    title: '收容所模特兒大比拼！',
    desc: '收容所模特兒大比拼！',
    src: a3_photo
  }, {
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    desc: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    src: a2_photo
  }, {
    title: '台北寵物論壇',
    desc: '參與台北寵物論壇，爭取貓咪友善環境',
    src: a4_photo
  }
]