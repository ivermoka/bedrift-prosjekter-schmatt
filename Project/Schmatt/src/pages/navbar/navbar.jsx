import React from "react";
import Searchbar from "./components/searchbar";
import Profile from "./components/profile";
export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-row w-screen h-14 z-20 bg-rich-black absolute  backdrop-blur-sm">
        <div id="left" className=" flex w-3/5 ">
          <div className="w-[100px]">
            {" "}
            <a href="/">
              <img className=" h-auto w-1/2 ml-20 " src={"schmatt_logo.png"} />
            </a>{" "}
          </div>
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
