"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";



export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section  id="home" className='mb-28 max-w-[51rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                initial={{opacity:0, scale:0}} 
                animate={{opacity:1, scale:1}}
                transition={
                    {
                        type: "tween",
                        duration: 0.2
                   }
                }>
                    <Image
                        src="/Coaches.jpeg"
                        alt="Yasin"
                        width={132}
                        height={152}
                        quality={95}
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>
                
                <motion.span className='absolute bottom-0 right-0 text-4xl'
                 initial={{opacity:0, scale:0}} 
                 animate={{opacity:1, scale:1}}
                 transition ={{
                    type:'spring',
                    stiffness: 125,
                    delay:0.4,
                    duration:0.7
                 }}>
                    🤞
                </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 font-medium leading-8 sm:text-1xl'
          initial = {{opacity:0, y:100}}
          animate = {{opacity:1, y:0}}
          transition={{delay:1, duration:1}}
        >
            <span className='font-bold'>Hello, I'm 
            Coach Noel Masha Lughanje.</span> I'm a seasoned
            <span className='font-bold'> Professional Coach </span>
            with
            <span className='font-bold'> decade of </span> coaching expertise. My passion lies in nurturing raw talent, transforming individuals from the ground up into
            <span className='italic'> proficient footballers. </span>
            My dedication spans across diverse age groups, <span className='underline'> encompassing the development of both young boys and girls, as well as men and women in the realm of football.</span>
            <span className='font-bold'> Join me</span> on this transformative journey where <span className='font-bold'>dedication, skill, and a love for the beautiful game </span>converge to create a legacy of footballing excellence. 
            Together, we'll navigate the exciting path from potential to proficiency, forging a collective narrative of success in the world of football.
        </motion.h1>
        <motion.div className='flex flex-col gap-2 sm:flex-row items-center justify-center px-2 font-medium'
        initial={{opacity: 0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{ delay:1 , duration:1}}
        >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

            <a className='group bg-white text-black px-5 py-2 flex items-center gap-2 rounded-full first-letter 
            outline-none focus:scale-100 hover:scale-105 active:scale-105 transition cursor-pointer border border-black/20' href='\NOELLUGHANJE.pdf' download >Download CV 
            {" "}<HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>

            <a className='group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer'>
                <BsTwitter className='group-hover:translate-y-1 transition'/>
            </a>

            <a className='group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
            outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer'>
                <BsInstagram className='group-hover:translate-y-1 transition'/>
            </a>
        </motion.div>
    </section>
  )
}
