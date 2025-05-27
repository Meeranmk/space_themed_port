"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/app/utils/motion';
import Image from 'next/image';

const Encryption = () => {
  return (
    <div className='flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full'>
      {/* Title */}
      <div className='absolute top-4 md:top-0 w-full z-[5] flex justify-center px-2'>
        <motion.div
          variants={slideInFromTop}
          className='text-[24px] md:text-[40px] font-medium text-center text-gray-200'
        >
          Performance
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500'>
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      {/* Lock Images and Encryption Label */}
      <div className='flex flex-col items-center justify-center absolute z-[20] w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center group cursor-pointer'>
          <Image
            src="/LockTop.png"
            alt='Lock Top'
            width={40}
            height={40}
            className='translate-y-3 md:translate-y-5 transition-all duration-200 group-hover:translate-y-7 md:group-hover:translate-y-11'
          />
          <Image
            src="/LockMain.png"
            alt='Lock Main'
            width={56}
            height={56}
            className="z-10"
          />
        </div>
        <div className='Welcome-box px-4 py-1 z-[20] border my-4 border-[#7042f88b] opacity-[0.9]'>
          <h1 className='Welcome-text text-[11px] md:text-[12px]'>Encryption</h1>
        </div>
      </div>

      {/* Bottom Text */}
      <div className='absolute z-[20] bottom-4 md:bottom-[10px] w-full flex justify-center px-2'>
        <div className='cursive text-[15px] md:text-[20px] font-medium text-center text-gray-300'>
          Secure your data with advanced encryption techniques.
        </div>
      </div>

      {/* Background Video */}
      <div className='w-full h-full flex items-start justify-center absolute top-0 left-0'>
        <video
          autoPlay
          preload='false'
          loop
          muted
          src="/encryption.webm"
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default Encryption;
