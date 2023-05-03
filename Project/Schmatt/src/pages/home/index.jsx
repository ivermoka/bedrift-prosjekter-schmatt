import React from 'react'
import ParticleBackground from './components/ParticleBackground'
import Navbar from '../navbar/navbar'
import SchmattPage from './components/SchmattPage'

const index = () => {
  return (
    <>
      <div className='h-[300vh] w-screen flex flex-column'>
        <Navbar />
        <span className='h-14 w-screen'></span>
        <ParticleBackground />
        <SchmattPage />
      </div>
      
    </>
  )
}

export default index