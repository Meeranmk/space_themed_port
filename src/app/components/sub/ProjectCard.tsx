import React from 'react'
import Image from 'next/image';

interface Props{
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block" // ensures the whole card is clickable
    >
      <div className='relative z-20 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300 cursor-pointer'>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full h-48 object-contain'
        />
        <div className='relative p-4'>
          <h2 className='text-2xl font-semibold text-white'>{title}</h2>
          <p className='mt-2 text-gray-300'>{description}</p>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
