"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/tooltip";

export function ToolTip({
  items,
}: {
  items: {
    name: string;
    quote?: string;
    title: string;
    image: string;
    id: string;
  }[];
}) {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {/* @ts-ignore */}
      <AnimatedTooltip items={items} />
    </div>
  );
}
