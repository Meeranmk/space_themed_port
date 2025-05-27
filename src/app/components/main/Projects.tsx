import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center py-5'
        id='projects'
        >
          <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
             My Projects
          </h1>

          <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src='/Eco.png'
            title='Fashion E-commerce'
            description='A fashion e-commerce website built with Next.js and Tailwind CSS, featuring a modern design and responsive layout.'
             link='https://highstore.netlify.app/'
            />
             <ProjectCard
            src='/admin.png'
            title='React Admin Dashboard'
            description='A React-based admin dashboard with a clean UI, built using Tailwind CSS and React Router for navigation.'
             link='https://glexadmindashboard.netlify.app/'
            />
             <ProjectCard
            src='/spot.png'
            title='Spotify Clone'
            description='A Spotify clone built with Next.js, featuring a sleek design and responsive layout, mimicking the Spotify interface.'
             link='https://spotifys-3.netlify.app/'
            />
          </div>
        </div>
    </div>
  )
}

export default Projects