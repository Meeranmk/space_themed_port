"use client";
import React from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col min-h-[500px] md:min-h-[825px] w-full py-10'
    id='about-me'
    >
      <video
        autoPlay
        loop
        muted
        className='rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1]  object-cover'>
        <source src='/blackhole.webm' type='video/webm' />
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero;