import React from 'react'
import { motion } from "framer-motion"

const AdPage = () => {
  return (
    <div className=' w-screen h-screen flex z-[9] backdrop-blur-sm'>
        <Box />
    </div>
  )
}
function Box() {
    return (
        <motion.div className=' w-screen h-screen flex z-[9] justify-center items-center gap-10' initial={{opacity:0, translateY:40}} whileInView={{opacity:1, translateY:0}} transition={{duration:0.5}} >
            <div className=' w-3/5 h-3/5 border-border-color border'>
                <img src='chatforum.gif' className=''></img>
            </div>
            <div className=' w-1/3 pl-10  lg:text-[2rem] md:text-[1rem] sm:text-[0.5rem] pt-10 h-3/5 text-[1rem] text-text-color  border-border-color border'>
                Introducing our innovative and user-friendly platform 
                that seamlessly connects you to the world of digital content and creativity.
            </div>
        </motion.div>
    )
}

export default AdPage