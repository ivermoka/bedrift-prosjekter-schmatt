import React from 'react'
import Link from 'next/link'

const GetStartedPage = () => {
  return (
    <>
      <div className=' pt-10 z-10 h-[110vh] w-screen  flex flex-col items-center text-text-color'>
          <p className='select-none cursor-default text-[4.5rem]'>Easy and free!</p>
          <p className='select-none cursor-default text-[1rem'>Get chatting with the click of a button!</p>
          <Link href="/signup">
            <button on className='mt-12 text-3xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded'>
              Sign up
            </button>
          </Link>
          
          <img
                className="animate-bounce mt-[30rem] h-auto w-[3rem] "
                src={"down-arrow-svgrepo-com.svg"}
              />
      </div>
      <div className='flex flex-row z-10 h-1/4 mx-40 mb-20 flex-wrap '>
        <div className='basis-1/2 pr-5 flex justify-end'>Chat</div>
        <div className='basis-1/2 bg-slate-600'>(img)</div>
        <div className='basis-1/2 bg-slate-600 '>(img)</div>
        <div className='basis-1/2 pl-5 pt-1'>Forums</div>
      </div>
    </>
    
  )
}

export default GetStartedPage