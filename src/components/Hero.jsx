import React from 'react'
import { HERO_CONTENT } from "../constants"
import profilePhoto from "../assets/imagencv.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className="text-black pb-16 text-6xl font-thin tracking-tighter 
                lg:mt-4 lg:text-8xl">
              Raquel Melo
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500
                to-blue-300 bg-clip-text text-4xl tracking-tight text-transparent font-bold'>
              Full Stack Developer
            </span>
            <p className='text-slate-500 my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg_p-8'>
        <div className='flex justify-center'>
          <img className='rounded-2xl' src={profilePhoto} alt="Raquel's profile photo" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
