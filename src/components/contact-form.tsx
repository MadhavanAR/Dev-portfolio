"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function ContactForm({ socials }: { socials: string[] }) {
  const emailMe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ opacity: 0, x: 1 }}
      transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
      className="max-w-md my-[5rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
    >
      <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-center font-bold underline decoration-green-400 underline-offset-8 my-8 -rotate-6">
        Contact me!!
      </h1>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Wanna Contact me??
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Do send me a message over the mail or contact me in any of the social
        medias given below!!
      </p>

      <form className="my-8" onSubmit={emailMe}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="John" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="portfolio3@gmail.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">The message??</Label>
          <Input
            id="text"
            placeholder="Hey there! I am interested in your work!"
            type="text"
            required
          />
        </LabelInputContainer>

        <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Send me a message &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <a href="#">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                {socials[0]}
              </span>
              <BottomGradient />
            </button>
          </a>
          <a href="#">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                {socials[1]}
              </span>
              <BottomGradient />
            </button>
          </a>
          <a href="#">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandTwitter className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                {socials[2]}
              </span>
              <BottomGradient />
            </button>
          </a>
          <a href="#">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandFacebookFilled className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                {socials[3]}
              </span>
              <BottomGradient />
            </button>
          </a>
        </div>
      </form>
    </motion.div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
