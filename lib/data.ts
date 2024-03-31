import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import IMG_1196Img from "@/public/IMG_1196.jpg";
import IMG_1352Img from "@/public/IMG_1352.jpg";
import IMG_1380Img from "@/public/IMG_1380.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Youth Development Programs:",
    description:
      "Organize skills clinics and camps for younger age groups, introducing them to the sport and fostering a love for the game.",
    tags: [],
    imageUrl: IMG_1380Img,
  },
  {
    title: "Football Journalism and Content Creation.",
    description:"Write articles, analyze matches, or create video content related to football, sharing knowledge and engaging with the football community.",
    tags: [],
    imageUrl: IMG_1352Img,
  },
  {
    title: " International Coaching Exchange Programs.",
    description:
      "Share knowledge and expertise with coaches from other countries, learning different approaches and fostering cultural exchange.",
    tags: [],
    imageUrl: IMG_1196Img,
  },
] as const;

export const skillsData = [
  "Technical Expertise",
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Leadership",
  "Time Management",
  "Adaptability",
  "Creativity",
  "Attention to Detail",
  "Critical Thinking",
  "Organization",
  "Multitasking",
  "Conflict Resolution",
  "Decision Making",
  "Negotiation",
  "Emotional Intelligence",
  "Stress Management",
  "Empathy",
] as const;