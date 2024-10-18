"use client";
import { HoverEffect } from "./ui/card-hover";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiApollographql,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiC,
  SiGit,
  SiGithub,
  SiVercel,
  SiThreedotjs,
  SiDocker,
  SiFigma,
  SiRedux,
  SiSass,
} from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Skills() {
  const items = [
    {
      title: "React",
      icon: SiReact,
    },
    {
      title: "Next.js",
      icon: SiNextdotjs,
    },
    {
      title: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      title: "Node.js",
      icon: SiNodedotjs,
    },
    {
      title: "Express",
      icon: SiExpress,
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
    },
    {
      title: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      title: "GraphQL",
      icon: SiGraphql,
    },
    {
      title: "Apollo",
      icon: SiApollographql,
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
    },
    {
      title: "JavaScript",
      icon: SiJavascript,
    },
    {
      title: "HTML",
      icon: SiHtml5,
    },
    {
      title: "CSS",
      icon: SiCss3,
    },
    {
      title: "Python",
      icon: SiPython,
    },
    {
      title: "C++",
      icon: SiCplusplus,
    },
    {
      title: "C",
      icon: SiC,
    },
    {
      title: "Git",
      icon: SiGit,
    },
    {
      title: "GitHub",
      icon: SiGithub,
    },
    {
      title: "Docker",
      icon: SiDocker,
    },
    {
      title: "Figma",
      icon: SiFigma,
    },
    {
      title: "Three.js",
      icon: SiThreedotjs,
    },
    {
      title: "Redux",
      icon: SiRedux,
    },
    {
      title: "Sass",
      icon: SiSass,
    },
    {
      title: "Vercel",
      icon: SiVercel,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
      id="skills"
      className="max-w-5xl mx-auto mt-[18rem] px-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-xl:text-8xl text-center font-bold underline decoration-green-400 underline-offset-8 mt-[15rem] -rotate-6">
        Skills
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      >
        <HoverEffect items={items} />
      </motion.div>
      <a href="#exp">
        <button className="flex mx-auto animate-bounce">
          <RiArrowDropDownLine size={60} />
        </button>
      </a>
    </motion.div>
  );
}
