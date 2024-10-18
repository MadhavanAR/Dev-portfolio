"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { ToolTip } from "./tooltip";

export default function Testimonials({
  testimonials,
}: {
  testimonials: {
    quote: string;
    name: string;
    title: string;
  }[];
}) {
  return (
    <div id="testimonials" className="my-16 space-y-8">
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ opacity: 0, x: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl  mx-4"
      >
        &quot;Testimonials are the best way to prove that your products work.
        They help potential buyers feel more{" "}
        <span className="underline-offset-8 underline decoration-green-400 text-green-400 font-semibold">
          confident
        </span>{" "}
        in their purchase decision.&quot; - Neil Patel
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 25 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 0, x: 1 }}
        transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
      >
        {/* @ts-ignore */}
        <ToolTip items={testimonials} />
      </motion.div>
      <motion.div
        className="my-[6rem]"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
      <a href="#contact">
        <button className="flex mx-auto animate-bounce">
          <RiArrowDropDownLine size={60} />
        </button>
      </a>
    </div>
  );
}
