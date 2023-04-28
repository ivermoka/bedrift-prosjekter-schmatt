import React from 'react'
import Searchbar from "./components/searchbar"
export default function Navbar() {
    return (
        <>
            <nav className=' flex flex-row w-screen h-20'>
                <div id='left' className=' flex w-3/5 bg-gray-900 '>
                    <div className='w-[100px]'>  <img className=' h-full w-full ml-20 ' src={"ailogofortesting.webp"} /></div>
                </div>
                <div id='right' className='w-2/5 bg-gray-900 flex flex-row justify-start gap-12 items-center'>
                    <Searchbar />
                </div>
            </nav>

        </>)
}

