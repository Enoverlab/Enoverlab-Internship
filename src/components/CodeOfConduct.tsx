"use client";

import React, { memo, ReactNode, useState } from "react";
import RightArrowCTAButton from "./RightArrowCTAButton";
import { CommunicationSVG, CultureSVG, ReadinessSVG } from "@/constant/SVGs";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import useAnimateObserver from "@/hooks/useAnimateObserver";
import CodeOfConductModal from "@/constant/codeOfConductModal";

const codes: {
  svg: ReactNode;
  name: string;
  description: string;
}[] = [
  {
    svg: <CultureSVG />,
    name: "Culture",
    description: "Respect everyone's different backgrounds and experiences.",
  },
  {
    svg: <CommunicationSVG />,
    name: "Communication",
    description: "Take part in team meetings and listen to others' ideas.",
  },
  {
    svg: <ReadinessSVG />,
    name: "Readiness",
    description: "Be creative and resourceful in solving problems.",
  },
];

export default function CodeOfConduct() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="Our Code of Conduct"
      className="bg-primary-100 py-[71px] font-plus-jakarta-sans text-secondary"
    >
      <MaxWidth className="flex flex-col items-center justify-between gap-x-10 gap-y-16 xl:flex-row xl:items-start">
        <div className="flex w-full max-w-[470px] flex-col gap-6 text-center sm:gap-[34px] xl:text-left">
          <h1 className="text-[clamp(1.5rem,_0.3776rem+3.2653vw,_2.5rem)] font-semibold leading-relaxed text-primary-300">
            Our Code of Conduct
          </h1>
          <p className="text-base font-light !leading-[160%] md:text-lg">
            Understand our standards for a respectful and inclusive environment
            to ensure a positive experience for everyone.
          </p>

          <RightArrowCTAButton
            className="mx-auto border border-primary-300 bg-transparent text-primary-300 xl:mx-0"
            onClick={() => setIsOpen(true)}
          >
            Download Rules
          </RightArrowCTAButton>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-8">
          {codes?.map((item, index) => <CodeCard key={index} item={item} />)}
        </div>
      </MaxWidth>

      {/* Modal for full code of conduct */}
      <CodeOfConductModal open={isOpen} handleClose={() => setIsOpen(false)} />
    </section>
  );
}

const CodeCard = memo(function CodeCard({
  item: { svg, name, description },
}: {
  item: {
    svg: ReactNode;
    name: string;
    description: string;
  };
}) {
  const { hasAnimated, ref } = useAnimateObserver();

  return (
    <motion.div
      ref={ref}
      className="flex w-full gap-5 rounded-[10px] border border-primary-200 bg-white p-[25px] sm:min-h-[171px] sm:w-[calc(50%-32px)] sm:justify-center [&>svg]:size-[28px] [&>svg]:shrink-0"
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }} // Animate in from left
      transition={{ duration: 0.5 }}
    >
      {svg}
      <div>
        <h4 className="text-lg font-medium md:text-2xl">{name}</h4>
        <p className="mt-2.5 text-sm font-light !leading-[160%] md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
});
