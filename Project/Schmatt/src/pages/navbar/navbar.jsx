import React from "react";
import Searchbar from "./components/searchbar";
import Profile from "./components/profile";
export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-row w-screen h-14 z-20 bg-rich-black absolute  backdrop-blur-sm">
        <div id="left" className=" flex w-3/5 items-center">
          <div className="w-[100px]">
            {" "}
            <a href="/">
              <img className=" h-auto w-1/2 ml-20 " src={"schmatt_logo.png"} />
            </a>{" "}
          </div>
          <div className=" w-72"></div>
          <a href="/chat" className="text-xl text-gray-50 group transition-all duration-300 ease-in-out"><span className="bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">Chat</span></a>
          <div className=" w-56"></div>
          <a href="/forums" className="text-xl text-gray-50 group transition-all duration-300 ease-in-out"><span className="bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">Forums</span></a>
        </div>
        <div
          id="right"
          className="w-2/5 flex flex-row justify-start   gap-28 items-center"
        >
          <Searchbar />
          <Profile />
        </div>
      </nav>
    </>
  );
}
