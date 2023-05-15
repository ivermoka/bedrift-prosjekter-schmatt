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
        <motion.div className=' w-screen h-screen flex z-[9] justify-center items-center gap-20' initial={{opacity:0, translateY:40}} whileInView={{opacity:1, translateY:0}} transition={{duration:0.5}} >
            <div className=' w-1/3 h-2/3 border-border-color border'>
                (gif of chat/forums)
            </div>
            <div className=' w-1/3 pl-10  lg:text-[2.5rem] md:text-[1rem] sm:text-[0.5rem] pt-10 h-2/3 text-[1rem] text-text2  border-border-color border'>
                <p>
                    Introducing our innovative and user-friendly platform 
                    that seamlessly connects you to the world of digital content and creativity.
                </p>
            </div>
        </motion.div>
    )
}

export default AdPage