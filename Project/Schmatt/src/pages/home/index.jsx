import React from 'react'
import ParticleBackground from './components/ParticleBackground'
import Navbar from '../navbar/navbar'
import SchmattPage from './components/SchmattPage'
import AdPage from './components/AdPage'

const index = () => {
  return (
    <>
      <div className='h-[300vh] w-screen flex flex-col'>
        <Navbar />
        <span className='h-14 w-screen'></span>
        <ParticleBackground />
        <SchmattPage />
        <AdPage />
      </div>
      
    </>
  )
}

export default index