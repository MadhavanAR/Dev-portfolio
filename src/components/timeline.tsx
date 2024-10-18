"use client";

import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { IoIosGitNetwork } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { MdAssuredWorkload } from "react-icons/md";
import { SiFastapi, SiGraphql, SiNextdotjs } from "react-icons/si";
import type { Chrono as ChronoType } from "react-chrono";
import dynamic from "next/dynamic";

export const Chrono = dynamic(
  () => import("react-chrono").then((lib) => lib.Chrono),
  {
    ssr: false,
  }
) as typeof ChronoType;

const Timeline = ({
  timeline,
}: {
  timeline: {
    company: string;
    summary: string;
    start: string;
    end: string;
    job_title: string;
    location: string;
  }[];
}) => {
  const chronoItems = timeline.map((item) => ({
    title: `${format(parseISO(item.start), "MMMM dd, yyyy")} - ${format(
      parseISO(item.end),
      "MMMM dd, yyyy"
    )}`,
    cardTitle: `${item.company}`,
    cardSubtitle: `${item.summary}`,
    url: `${item.location}`,
  }));

  return (
    <motion.div
      id="exp"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
      className="my-4"
    >
      <Chrono
        items={chronoItems}
        theme={{
          primary: "red",
          secondary: "blue",
          cardBgColor: "white",
          cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "red",
        }}
        mode="VERTICAL_ALTERNATING"
      >
        <div className="chrono-icons">
          <MdAssuredWorkload size={20} />
          <IoIosGitNetwork size={20} />
          <FaComputer size={20} />
          <SiFastapi size={20} />
          <SiGraphql size={20} />
          <SiNextdotjs size={20} />
        </div>
      </Chrono>
    </motion.div>
  );
};

export default Timeline;
