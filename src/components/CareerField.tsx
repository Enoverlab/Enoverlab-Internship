"use client";

import Image from "next/image";
import React, { memo } from "react";
import { RightArrowCTAButtonVariant } from "./RightArrowCTAButton";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
import MaxWidth from "@/constant/MaxWidth";
import useAnimateObserver from "@/hooks/useAnimateObserver";
import { cn } from "@/lib/utils";
import { RightArrowSVG } from "@/constant/SVGs";

const careers: {
  name: string;
  description: string;
  img: string;
}[] = [
  {
    name: "Product Designer",
    description:
      "A Product Designer crafts user experiences and collaborates with teams to turn concepts into functional products.",
    img: "/product_design.png",
  },
  {
    name: "Product Manager",
    description:
      "A Product Manager defines the vision, strategy, and plan, coordinating with teams to meet customer needs and achieve business goals.",
    img: "/product_manager.png",
  },
  {
    name: "Frontend Dev",
    description:
      "A Front-end Developer works with designers and back-end developers to build products using HTML, CSS, React, JavaScript, and more.",
    img: "/frontend_dev.png",
  },
];

export default function CareerField() {
  return (
    <section
      id="Our Career Fields"
      className="mt-14 bg-primary-300 font-plus-jakarta-sans"
    >
      <MaxWidth className="py-[50px]">
        <div className="mx-auto w-full max-w-[640px] text-center">
          <h1 className="text-[clamp(1.5rem,_0.6582rem+2.449vw,_2.25rem)] font-medium !leading-relaxed text-white">
            Our Career Fields
          </h1>

          <p className="mt-3 text-base !leading-[160%] text-[#FEFEFE]/70 sm:mt-2 md:text-lg">
            From front-end development to product management and design, Explore
            the diverse fields where our interns thrive.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-[60px] ipad:grid-cols-3">
          {careers?.map((item, index) => (
            <CareerCard
              key={index}
              img={item.img}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}

const CareerCard = memo(function CareerCard({
  img,
  name,
  description,
}: {
  img: string;
  name: string;
  description: string;
}) {
  const { ref, hasAnimated } = useAnimateObserver();
  return (
    <motion.div
      ref={ref}
      className="h-520px] relative rounded-[15px] bg-white px-3 pb-36 pt-4 text-secondary"
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }} // Animate only once
      transition={{ duration: 0.5 }}
    >
      <Image
        src={img}
        width={370}
        height={196}
        alt={name}
        className="aspect-[370/196] w-full rounded-lg object-cover object-center"
      />

      <h1 className="mt-7 text-xl md:text-[24px]">{name}</h1>

      <p className="mt-5 text-sm font-light !leading-[160%] md:text-[15px]">
        {description}
      </p>

      <Link
        href={"/register"}
        className={cn(
          RightArrowCTAButtonVariant({
            className:
              "absolute bottom-7 left-4 border border-primary-300 bg-white text-primary-300",
          }),
        )}
        target="_blank"
      >
        Apply Now
        <RightArrowSVG className="w-5 md:w-7" />
      </Link>
    </motion.div>
  );
});
