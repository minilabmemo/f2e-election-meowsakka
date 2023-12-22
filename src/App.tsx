import { useState } from "react";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import SideMenu from "./components/SideMenu";


function App() {


  return (
    <div className="bg bg-slate-100 font-inter">
      <div className="3xl:container m-auto ">
        <SideMenu />
        <Header />
        <Content />
        <Footer />

      </div>
    </div>
  );
}

export default App;
