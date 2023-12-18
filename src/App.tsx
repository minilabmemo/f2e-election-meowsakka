import Content from "./layouts/Content";
import Header from "./layouts/Header";


function App() {
  return (
    <div className="bg bg-slate-100 font-inter">
      <div className="3xl:container m-auto ">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
