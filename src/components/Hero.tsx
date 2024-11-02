"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import useAnimateObserver from "@/hooks/useAnimateObserver";

const AboutInternship: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);
  const { ref, hasAnimated } = useAnimateObserver();

  // Animation variants
  const boxVariants = {
    initial: { opacity: 0, scale: 0.5 }, // Start state for the box
    animate: { opacity: 1, scale: 1 }, // End state for the box
  };

  const textVariants = {
    initial: { opacity: 0, x: -100 }, // Start state for the text
    animate: { opacity: 1, x: 0 }, // End state for the text
  };

  useEffect(() => {
    if (hasAnimated) {
      // After the box is visible, show the text
      const timer = setTimeout(() => setTextVisible(true), 300); // Delay for text animation
      return () => clearTimeout(timer);
    } else {
      setTextVisible(false); // Reset text visibility when not visible
    }
  }, [hasAnimated]);

  return (
    <motion.div
      id="About Internship"
      ref={ref} // Attach the ref to the main container
      initial="initial"
      className="mt-14 bg-[#E0E9FE]"
      animate={hasAnimated ? "animate" : "initial"} // Animate box visibility
      exit="initial" // No exit animation for the box
      variants={boxVariants}
      transition={{ duration: 0.5 }} // Animation duration for the box
    >
      <MaxWidth className="max-w-[850px] py-6 text-center font-plus-jakarta-sans md:py-[60px]">
        <motion.h2
          className="mb-3.5 text-[calc(clamp(1.625rem,_-0.3393rem+5.7143vw,_3.375rem))] font-semibold text-[#0046FF] md:mb-6"
          initial="initial"
          animate={textVisible ? "animate" : "initial"} // Animate text visibility
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.3 }} // Delay text animation
        >
          About Internship
        </motion.h2>
        <motion.p
          className="text-[calc(clamp(1rem,_0.4388rem+1.6327vw,_1.5rem))] font-light !leading-[170%] text-[#323232]"
          initial="initial"
          animate={textVisible ? "animate" : "initial"} // Animate text visibility
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.3 }} // Delay text animation
        >
          Welcome to Enoverlab Internships, where you can apply your training in
          product management, UI/UX design, or development in real-world
          scenarios. Collaborate, refine your skills, and gain the experience
          needed to excel. Ready to make an impact?
        </motion.p>
      </MaxWidth>
    </motion.div>
  );
};

export default AboutInternship;
