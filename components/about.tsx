"use client"
import React from 'react'
import {motion} from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:1, duration:1}}
    id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        Welcome to my <span className='font-bold'>world of football transformation.</span> I am Coach Noel Masha Lughanje, 
        a seasoned professional with a rich decade of coaching experience. My <span className='font-bold'> true joy </span>
         lies in the art of sculpting raw talent into refined football prowess. 
         Over the years, I have dedicated myself to the comprehensive development of individuals, 
         spanning the spectrum from aspiring youngsters to seasoned men and women in
          the world of football
        </p>
        <p>
        With a keen focus on fostering growth, <span className='font-bold'>my coaching journey is characterized by a commitment 
        to building young talents from the ground up, shaping them into the professional footballers 
        they aspire to become</span>. As a mentor, my passion extends across all age groups, embracing the 
        challenge and joy of guiding both children and adults toward excellence on the football field.
        </p>
    </motion.section>
  )
}
