import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons/lib";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Link
            href={item?.title}
            key={item?.title}
            className="relative group  block p-1 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-md w-full relative z-20 p-4 bg-black transition-all group-hover:ring-2 ring-green-500 cursor-pointer">
              <div className="space-y-5 relative z-5 py-5">
                <Icon className="w-5 h-5 mx-auto" />
                <h1 className="text-2xl text-center">{item.title}</h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};