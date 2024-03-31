"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-800 my-10 h-24 w-0.5 rounded-full sm:block'
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.5, duration: 1}}
    ></motion.div>
  )
}
