import React from "react";
import { useState } from "react";
import { auth, db } from "../../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Message from "@/pages/chat/components/MessageSchmatt";

export default function Posts() {
  return (
    <>
      <section className="h-full w-8/12">
        <div className=" h-20 w-full flex justify-center items-center">
          <div className="w-80 h-4/6 flex justify-center items-center border-b-2 border-border-color">
            <span className=" text-text-color">Posts</span>
          </div>
        </div>
      </section>
      <section className="h-full w-4/12">
        <div className=" h-20 w-full flex justify-center items-center">
          <div className="w-52 h-4/6 flex justify-center items-center border-b-2 border-border-color">
            <span className=" text-text-color">s/CodingTips</span>
          </div>
        </div>
      </section>
    </>
  );
}
