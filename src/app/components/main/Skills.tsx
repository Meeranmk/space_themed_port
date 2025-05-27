import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/app/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillTest from '../sub/SkillTest'

const Skills = () => {
  return (
    <section id='skills' className=' flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20'
    style={{transform:"scale(0.9)"}}
    >
        <SkillTest/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Skill_data.map((image, index) => (
            <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) => (
            <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image, index) => (
            <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Full_stack.map((image, index) => (
            <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Other_skill.map((image, index) => (
            <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
      </div>

      <div className='w-full h-full absolute'>
          <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
            <video
              autoPlay
              preload='false'
              loop
              muted
              className=' h-auto w-full '
            >
              <source src='/cards-video.webm' type='video/webm' />
            </video>
          </div>
      </div>
      </section>
  )
}

export default Skills