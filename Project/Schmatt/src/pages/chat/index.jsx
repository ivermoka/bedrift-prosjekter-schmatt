import React from 'react'
import Rooms from './components/Rooms'
import Layout from '../layout'


const index = () => {
  return (
    <>
      <div className=' w-screen h-screen bg-rich-black'>
        <Layout />
        <Rooms />
        <div className=' '>index</div>
      </div>
        
    </>
    
  )
}

export default index