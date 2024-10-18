"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import React from "react";
import { DirectionAwareHover } from "./ui/project-hover";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

interface ProjectPageProps {
  title: string;
  desc: string;
  tech: string[];
  cover: string;
  link: string;
}

export default function ProjectsPage({
  projects,
}: {
  projects: ProjectPageProps[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
      className="my-16 p-3 sm:p-0"
    >
      <h1
        id="projects"
        className="text-7xl text-center font-bold underline decoration-green-400 underline-offset-8 my-4 rotate-6"
      >
        Projects
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 pt-10"
      >
        {projects.map((project, idx) => (
          <Link href={project.link || "#"} key={idx}>
            <div className={cn("p-5 rounded-sm bg-black")}>
              <div className="h-[25rem] relative flex items-center justify-center">
                <DirectionAwareHover imageUrl={project.cover}>
                  <h6 className="font-bold">{project.title}</h6>
                  <h6 className="font-extralight text-xs">{project.desc}</h6>
                  <h6 className="text-sky-400 font-extralight text-xs">
                    {project.tech.join(", ")}
                  </h6>
                  <h6 className="p-1 bg-black w-[4rem] hover:bg-slate-300/95">
                    <button>Github</button>
                  </h6>
                </DirectionAwareHover>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
      <div>
        <a href="#services">
          <button className="mt-8 flex mx-auto animate-bounce">
            <RiArrowDropDownLine size={60} />
          </button>
        </a>
      </div>
    </motion.div>
  );
}
