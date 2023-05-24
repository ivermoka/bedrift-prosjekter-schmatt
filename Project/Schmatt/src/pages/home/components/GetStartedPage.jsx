import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useRef } from 'react'

const GetStartedPage = () => {
  
  return (
    <>
      <Box />
      <Box2 />
      
    </>
    
  )
}
function Box() {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    
  return (
      <motion.div className='  backdrop-blur-sm w-screen h-screen items-center flex z-[8] ' initial={{opacity:0, translateY:10}} whileInView={{opacity:1, translateY:0}} transition={{duration:1}} >
        <div className=' pt-40 z-10 h-[110vh] w-screen  flex flex-col items-center text-text-color'>
          <p className='select-none cursor-default text-[4.5rem]'>Easy and free!</p>
          <p className='select-none cursor-default text-[1rem'>Get chatting and posting with the click of a button!</p>
          <Link href="/signup">
            <button on className='mt-12 text-3xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded'>
              Sign up
            </button>
          </Link>
          
          <img
                className=" scroll-smooth animate-bounce mt-[20rem] h-auto w-[3rem] "
                src={"chevron-down-svgrepo-com.svg"}
                onClick={executeScroll}
                ref={myRef}
              />
        </div>
        
      </motion.div>
  )
}
function Box2() {
  return (
      <motion.div className='backdrop-blur-sm pt-10 z-10 h-[110vh] w-screen flex flex-col items-center text-text-color' initial={{opacity:0, translateY:10}} whileInView={{opacity:1, translateY:0}} transition={{duration:2}} >
        <div className='flex flex-row z-10 h-full w-full px-32 mb-20 flex-wrap '>
          <div className='p-2 basis-1/2 flex justify-around items-end flex-col'>
            <div className='flex flex-col items-end'>
              <p className='font-bold text-xl'>Chat</p>
              
              <p>Chat with your friends and family</p>
            </div>
            <a href='/chat'>
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded text-xl'>Go to chat</button>
            </a>
            
          </div>
          <div className='basis-1/2 '>
            <img src='chat.png'></img>
          </div>
          <div className='basis-1/2  '>
            <img src='forums.png'></img>
          </div>
          <div className='p-2 basis-1/2 flex justify-around items-start flex-col'>
            <div>
              <p className='font-bold text-xl'>Forums</p>
              
              <p>Join forums and discuss your interests</p>
            </div>
            <a href='/forums'>
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded text-xl'>Go to forums</button>
            </a>
            
          </div>
          <footer className='flex flex-col items-center justify-center w-full h-20 pb-20 pt-40 text-text-color'>
            <p className='text-xl'>Schmatt</p>
            <p className='text-sm'>© 2023 Schmatt. All rights reserved.</p>

          </footer>
        </div>
        
        
      </motion.div>
  )
}

export default GetStartedPage