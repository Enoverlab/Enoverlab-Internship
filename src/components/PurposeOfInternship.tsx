"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import useAnimateObserver from "@/hooks/useAnimateObserver";
import Image from "next/image";

const POIs = [
  {
    title:
      "Network with professionals to unlock opportunities and foster growth.",
    img: "/svg/networking.svg",
  },
  {
    title:
      "Build a portfolio showcasing your achievements and skills for future opportunities.",
    img: "/svg/build.svg",
  },
  {
    title: "Utilize theoretical knowledge to understand industry standards.",
    img: "/svg/book.svg",
  },
];

export default function PurposeOfInternship() {
  return (
    <section
      id="Purpose of the Internship"
      className="mt-10 overflow-x-hidden bg-[#E0E9FE] py-10 font-plus-jakarta-sans md:mt-20 md:pb-20"
    >
      <MaxWidth className="md:pb-12">
        <h1 className="text-center text-[clamp(1.5rem,_0.3776rem+3.2653vw,_2.5rem)] font-semibold text-black">
          Purpose of the Internship
        </h1>

        <div className="mt-10 flex flex-col items-center justify-between gap-x-4 gap-y-16 md:mt-20 md:flex-row md:items-start">
          {POIs?.map((poi, index) => <PurposeCard key={index} poi={poi} />)}
        </div>
      </MaxWidth>
    </section>
  );
}

const PurposeCard = memo(function PurposeCard({
  poi,
}: {
  poi: {
    title: string;
    img: string;
  };
}) {
  const { ref, hasAnimated } = useAnimateObserver();

  return (
    <motion.div
      ref={ref}
      className="flex w-full max-w-[330px] flex-1 gap-4"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative flex h-[67px] w-[72px] shrink-0 items-center justify-center rounded-2xl border-2 border-[#0046FF]/25 bg-white ipad:h-[88px] ipad:w-24 ipad:rounded-3xl">
        <Image
          alt={poi.title}
          src={poi.img}
          width={64}
          height={64}
          className="size-12 object-cover object-center ipad:size-16"
        />
      </span>
      <p className="-mt-1 text-base text-[#0046FF] ipad:text-lg">{poi.title}</p>
    </motion.div>
  );
});
