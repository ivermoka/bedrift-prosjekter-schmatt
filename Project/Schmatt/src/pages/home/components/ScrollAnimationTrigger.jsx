import React from 'react'
import { motion } from "framer-motion"

const ScrollAnimationTrigger = () => {
  return (
    <div className='flex flex-col items-center'>
        
    </div>
  )
}

function Box() {
    return (
        <motion.div initial={{opacity:0, translateY:-10}} whileInView={{opacity:1, translateY:0}} transition={{duration:0.6}}>

        </motion.div>
    )
}

export default ScrollAnimationTrigger