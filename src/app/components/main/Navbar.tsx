"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Socials } from '@/app/constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
      <div className='w-full h-full flex items-center justify-between m-auto px-[2px]'>
        {/* Logo */}
        <a href='#about-me' className='flex items-center'>
          <Image
            src='/Nav.webp'
            alt='Logo'
            width={60}
            height={60}
            className='cursor-pointer hover:animate-slowspin rounded-full h-[50px] w-[50px] object-cover transition-all duration-300 ease-in-out hover:scale-105'
          />
          <span className='font-bold ml-2 hidden md:block text-gray-300'>
            {/* Dev */}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex items-center justify-between w-[500px] border border-[#7042f861]  md:mr-[-15] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200 '>
          <a href='#about-me' className='cursor-pointer'>About me</a>
          <a href='#skills' className='cursor-pointer'>Skills</a>
          <a href='#projects' className='cursor-pointer'>Projects</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className='md:hidden flex flex-col justify-center items-center z-50'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Social Icons */}
        <div className='hidden md:flex flex-row gap-5 ml-6'>
          {Socials.map((social) => (
            <a href={social.href} key={social.name} target='_blank' rel='noopener noreferrer'>
              <Image
                src={social.src}
                alt={social.name}
                className='cursor-pointer'
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed top-[65px] left-0 w-full bg-[#030014ee] backdrop-blur-md flex flex-col items-center py-6 gap-6 z-40 md:hidden animate-fade-in-down'>
          <a href='#about-me' className='text-gray-200 text-lg' onClick={() => setMenuOpen(false)}>About me</a>
          <a href='#skills' className='text-gray-200 text-lg' onClick={() => setMenuOpen(false)}>Skills</a>
          <a href='#projects' className='text-gray-200 text-lg' onClick={() => setMenuOpen(false)}>Projects</a>
          <div className='flex flex-row gap-5 mt-4'>
            {Socials.map((social) => (
              <a href={social.href} key={social.name} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={social.src}
                  alt={social.name}
                  className='cursor-pointer'
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
