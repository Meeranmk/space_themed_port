"use client";
import React from 'react'
import {motion} from 'framer-motion';
import {slideInFromLeft, slideInFromTop} from "@/app/utils/motion"
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
   className="flex flex-row items-center justify-center px-20 md:px-20 mt-32 md:mt-20 w-full z-[20]"
    >
        <div className='flex flex-col gap-5 justify-center m-auto text-start h-full w-full'>
         <motion.div
         variants={slideInFromTop}
         className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='h-5 w-5 text-[#b49bff] mr-[10px]' />
          <h1 className='Welcome-text text-[13px]'>Frontend Developer Portfolio</h1>
         </motion.div>

         <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
          >
            <span>
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500'> the best </span>
            project experience
            </span>
          </motion.div>

          <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
          >
            I&apos;m a passionate Frontend Developer experienced in building web applications and software. Explore my projects and skills.
          </motion.p>
          <motion.a
          variants={slideInFromLeft(1)}
           href="#projects"
          className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
         
          >
            Learn More!
          </motion.a>
        </div>
        <motion.div
          variants={slideInFromLeft(0.8)}
          className='h-full w-full flex justify-center items-center pl-25'
        >
          <Image
           src='/mainIconsdark.svg'
            alt='mainIcon'
            height={650}
            width={650}
          />
        </motion.div>  
    </motion.div>
  )
}

export default HeroContent