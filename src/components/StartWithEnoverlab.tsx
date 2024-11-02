"use client";

import React from "react";
import { motion } from "framer-motion"; // Importing framer motion components
import { RightArrowCTAButtonVariant } from "./RightArrowCTAButton";
import MaxWidth from "@/constant/MaxWidth";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RightArrowSVG } from "@/constant/SVGs";

export default function StartWithEnoverlab() {
  return (
    <MaxWidth className="mt-16 md:mt-20 max-w-[1120px] font-plus-jakarta-sans">
      <motion.div
        className="flex flex-col items-center justify-center gap-10 rounded-[30px] bg-primary-300 px-4 py-[60px] text-center text-white md:py-20 ipad:gap-12 ipad:py-[100px]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="w-full max-w-[783px] text-xl font-bold !leading-[150%] sm:text-2xl md:text-3xl ipad:text-4xl">
          Start Your Career Journey with Enoverlab and have a real world
          experience!
        </h1>

        <Link
          href="/register"
          target="_blank"
          className={cn(
            RightArrowCTAButtonVariant({
              className: "bg-white text-[#323232]",
            }),
          )}
        >
          Get Started
          <RightArrowSVG className="w-5 md:w-7" />
        </Link>
      </motion.div>
    </MaxWidth>
  );
}
