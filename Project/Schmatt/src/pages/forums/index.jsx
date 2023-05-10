import Navbar from "../navbar/navbar";
import Selectforum from "./components/SelectForum";
import Posts from "./components/Posts";
import { use, useState } from "react";
import {useEffect} from "react";

export default function forums() {
  const [selectedForum, setSelectedForum] = useState("");
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <Navbar />
      <main className=" w-screen h-screen bg-[#0F151A] flex items-center">
        <div className="flex flex-row items-center w-screen h-4/5 gap-6">
          <section id="forumview" className="flex flex-col h-full ">
            <Selectforum selectedForum={selectedForum} setSelectedForum={setSelectedForum} refresh={refresh} setRefresh={setRefresh} />
          </section>
          <section className="flex flex-row h-full w-full  ">
            <Posts selectedForum={selectedForum} refresh={refresh} setRefresh={setRefresh} />
          </section>
        </div>
      </main>
    </>
  );
}
