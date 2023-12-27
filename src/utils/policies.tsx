
import { ReactNode } from "react";
import a1_photo from "../assets/images/a1_photo.png";
import a2_photo from "../assets/images/a2_photo.png";
import a3_photo from "../assets/images/a3_photo.png";
import a4_photo from "../assets/images/a4_photo.png";
import a5_photo from "../assets/images/a5_photo.png";
import a6_photo from "../assets/images/a6_photo.png";

export type policiesType = {
  title: string,
  desc: string,
  src: ReactNode | string,
}


export const news: policiesType[] = [
  {
    title: '政策一：讓庫拉皮卡下船！',
    desc: "治傷：請作者來體驗台灣醫療，安排物理治療師。催稿：安排一隻訓練有素的貓，溫馨催稿。陪伴：AKB48 來加油打氣、伴他畫稿。",
    src: a1_photo
  }, {
    title: '政策二：不讓貓貓過重，過重也是一種虐待！',
    desc: '為了讓更多人知道貓咪體重過重對貓身不好，我們開辦了喵喵減肥班，成果發表以「模特兒走秀」的形式呈現，讓更多人意識到貓身健康有多麼重要！',

    src: a3_photo
  }, {
    title: '政策三：為毛孩子謀福利！推動寵物醫療保障方案',
    desc: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',

    src: a2_photo
  }, {
    title: '政策四：打造休閒天堂！推廣寵物休閒與娛樂場所',
    desc: '活動熱烈加開！台北寵物論壇第二場，再次走進活動現場，這次認同理念的支持者變多了，令我滿滿感動，全力宣傳「貓咪至上」的理念！',

    src: a4_photo
  }, {
    title: '政策五：推廣寵物飼養教育，讓愛更加專業',
    desc: '讓「咖啡」與「寵物」蹦出最新鮮的市集組合，歡迎帶著你心愛的寵物們來到這邊，除了可以一同享受咖啡香所帶來的色香味俱全饗宴，也可以與各個寵物與主人們互相交流。',

    src: a5_photo
  }
]