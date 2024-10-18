"use client";
import React from "react";
import { Spotlight } from "./ui/spotllight";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name: String;
  role: String;
  title: String;
  address: String;
  phone: number;
  mail: String;
}

export function HeroSection({
  name,
  role,
  title,
  address,
  phone,
  mail,
}: HeroSectionProps) {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </motion.div>
      <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          className="text-4xl md:text-7xl mt-8 font-bold text-center from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          {name} <br /> <span className="text-green-400">{role}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="mt-4 font-normal text-2xl text-neutral-300 max-w-lg text-center mx-auto"
        >
          {title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-center sm:flex-col md:flex-row xl:flex-row justify-center gap-5 mt-8"
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 c"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            {address}
          </span>
          <Link href={`phone:${phone}`}>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                // @ts-ignore
                class="w-6 h-6 mr-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              {phone}
            </span>
          </Link>
          <Link href={`mailto:${mail}`}>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {mail}
            </span>
          </Link>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
        >
          <a href="#skills">
            <button className="mt-10 animate-bounce">
              <RiArrowDropDownLine size={60} />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
