"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import { cn } from "@/lib/utils";
import {
  CurvedArrowLeft,
  CurvedArrowRight,
  ForwardArrow,
} from "@/constant/SVGs";
import useAnimateObserver from "@/hooks/useAnimateObserver";

const threeSteps = [
  {
    heading: "Onboarding & Learning",
    subtext: "Get acquainted with your project and understand your objectives.",
  },
  {
    heading: "Practical Experience",
    subtext: "Leverage the skills and knowledge to tackle real-world projects",
  },
  {
    heading: "Reflect & Improve",
    subtext:
      "Summarize your experience, insights, and growth to enhance your career",
  },
];

export default function InternshipThreeSteps() {
  return (
    <section
      id="Your Internship Journey in Three Steps"
      className="font-plus-jakarta-sans sm:mt-[52px]"
    >
      <MaxWidth className="py-12">
        <h1 className="text-center text-[clamp(1.5rem,_0.3776rem+3.2653vw,_2.5rem)] font-semibold !leading-snug text-[#000A23]">
          Your Internship Journey in Three Steps...
        </h1>
        <p className="mx-auto mt-5 w-full max-w-[708px] text-center text-[clamp(1rem,_0.4388rem+1.6327vw,_1.5rem)] font-light !leading-[150%] text-secondary">
          Kickstart your career with an internship that offers hands-on
          experience, and professional growth opportunities.
        </p>

        <div className="mt-6 flex w-full flex-col gap-x-8 overflow-x-hidden max-md:mx-auto max-md:max-w-[350px] md:mt-20 md:grid md:grid-cols-[1fr,40px,1fr,40px,1fr] lg:grid-cols-[1fr,65px,1fr,65px,1fr]">
          {threeSteps?.map((item, index) => (
            <React.Fragment key={index}>
              <InternshipStepsCard item={item} index={index} />
              {index < 2 && (
                <>
                  <div className="flex items-center justify-center max-md:hidden">
                    <ForwardArrow />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}

const InternshipStepsCard = memo(function InternshipStepsCard({
  item: { subtext, heading },
  index,
}: {
  item: { subtext: string; heading: string };
  index: number;
}) {
  const { ref, hasAnimated } = useAnimateObserver();

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        className="relative z-[2] text-[#323232] max-md:pb-7 max-md:pt-[40px]"
        initial={{ opacity: 0, x: hasAnimated ? -100 : 100 }} // Start off-screen (left or right)
        animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 100 }} // Animate to visible when in view
        transition={{ duration: 0.5 }}
      >
        <p
          className={cn(
            "flex w-full max-w-[250px] flex-col gap-1.5 text-base font-medium md:mx-auto md:text-lg",
            {
              "ms-auto": index === 1,
            },
          )}
        >
          <span className="text-[#0046FF]">{heading}:</span>
          <span className="font-light">{subtext}</span>
        </p>
      </motion.div>

      {index === 0 && (
        <CurvedArrowRight className="-translatex-8 absolute -bottom-8 right-0 z-[1] md:hidden" />
      )}
      {index === 1 && (
        <CurvedArrowLeft className="absolute -bottom-8 left-0 z-[1] translate-x-0.5 md:hidden" />
      )}
    </div>
  );
});
