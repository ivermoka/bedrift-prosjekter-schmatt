import React from 'react'
import CodingHelp from './Coding-schmatts/CodingHelp'
import CodingNews from './Coding-schmatts/CodingNews'
import CodingTips from './Coding-schmatts/CodingTips'
import WebDev from './Coding-schmatts/WebDev'
import PlantsCacti from './Coding-schmatts/PlantsCacti'
import PlantsPlantHelp from './Coding-schmatts/PlantsPlantHelp'
import PlantsFlowers from './Coding-schmatts/PlantsFlowers'
import FitnessCardio from './Coding-schmatts/FitnessCardio'
import FitnessStrong from './Coding-schmatts/FitnessStrong'
import FitnessBigDudes from './Coding-schmatts/FitnessBigDudes'

const InfoSection = ({selectedForum}) => {
  const forum = selectedForum.selectedForum;
  console.log(forum)
  return (
    <section className="h-full w-4/12">
        <div className=" h-20 w-full flex justify-center items-center">
          <div className="w-52 h-4/6 flex justify-center items-center border-b-2 flex-col border-border-color">
            <span className=" text-text-color">{forum}</span>
            
          </div>
        </div>
        {forum === "s/CodingTips" && <CodingTips />}
        {forum === "s/CodingNews" && <CodingNews />}
        {forum === "s/WebDevelopment" && <WebDev />}
        {forum === "s/CodingHelp" && <CodingHelp />}
        {forum === "s/Cacti" && <PlantsCacti />}
        {forum === "s/PlantHelp" && <PlantsPlantHelp />}
        {forum === "s/Flowers" && <PlantsFlowers />}
        {forum === "s/Cardio" && <FitnessCardio />}
        {forum === "s/Strong" && <FitnessStrong />}
        {forum === "s/BigDudes" && <FitnessBigDudes />}
    </section>
  )
}

export default InfoSection