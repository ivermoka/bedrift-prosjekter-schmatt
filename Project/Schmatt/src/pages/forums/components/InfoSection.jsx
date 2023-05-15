import React from 'react'
import CodingHelp from './Coding-schmatts/CodingHelp'
import CodingNews from './Coding-schmatts/CodingNews'
import CodingTips from './Coding-schmatts/CodingTips'
import WebDev from './Coding-schmatts/WebDev'

const InfoSection = ({selectedForum}) => {
  const forum = selectedForum;
  return (
    <section className="h-full w-4/12">
        <div className=" h-20 w-full flex justify-center items-center">
          <div className="w-52 h-4/6 flex justify-center items-center border-b-2 border-border-color">
            <span className=" text-text-color"></span>
            {forum === "s/CodingTips" && <CodingTips />}
            {forum === "s/CodingNews" && <CodingNews />}
            {forum === "s/WebDevelopment" && <WebDev />}
            {forum === "s/CodingHelp" && <CodingHelp />}
          </div>
        </div>
    </section>
  )
}

export default InfoSection