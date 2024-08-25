import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Share/Footer";
import SSP from "./SSP/SSP";
import Video from "./Video/Video";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[500px]"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/background/20230516/original/pngtree-two-business-men-shake-hands-on-a-city-street-picture-image_2597476.jpg")',
      }}
    >
      <div className="flex w-full justify-center gap-28 items-center h-[500px]">
        <Link to="sales">
          <div className="border-[1px] border-white p-20 bg-slate-600 skew-y-2 opacity-70 w-[455px] hover:bg-red-600 hover:cursor-pointer">
            <button className="text-7xl opacity-100 text-red-50 font-semibold ">
              For Sales
            </button>
          </div>
        </Link>
        <Link to="buy">
          <div className="border-[1px] border-white py-20 px-24 bg-slate-600 -skew-y-2 opacity-70 w-[455px]  hover:bg-red-600 hover:cursor-pointer">
            <button className="text-7xl opacity-100 text-white font-semibold ">
              To Buy
            </button>
          </div>
        </Link>
      </div>
      <Video/>
      <SSP />
      <Footer/>
    </div>
  );
};

export default Home;
