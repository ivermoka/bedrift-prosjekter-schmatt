import React from 'react'
import { motion } from "framer-motion"

const SchmattPage = () => {
  return (
    <>
        <Box />
    </>
  )
}
function Box() {
    return (
        <motion.div className='w-screen h-screen items-center flex z-[8] ' initial={{opacity:0, translateY:10}} whileInView={{opacity:1, translateY:0}} transition={{duration:1}} >
            <h1 className='select-none cursor-default text-[12vh] text-schmatt-text ml-36 -mt-80'>Schmatt™</h1>
        </motion.div>
    )
}

export default SchmattPage