"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import { Fullscreen, Pause, PictureInPicture, Play } from "lucide-react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import useCloseDialog from "@/hooks/useCloseDialog";
import RightArrowCTAButton from "./RightArrowCTAButton";

const testimonials = [
  {
    name: "Ezinne Angela",
    role: "Product Designer",
    vidSrc:
      "https://utfs.io/f/1zyAVbuY3DBC1ssq9fuY3DBCVTKZ72IoEvXrHy0Aj8bkLzPi",
  },
  {
    name: "Samson",
    role: "Frontend Developer",
    vidSrc:
      "https://utfs.io/f/1zyAVbuY3DBCjGM0UuibmohA0crqdEiuUNXOs3eQ8SfD9CaP",
  },
  {
    name: "Ezinne",
    role: "Product Manager",
    vidSrc:
      "https://utfs.io/f/1zyAVbuY3DBCdgtgWJpYH0bBv5aMfY7cZo3P4xneSzIJAK1L",
  },
];

export default function AlumniTestimonials() {
  return (
    <MaxWidth id="Our Alumni Speaks" className="py-16 font-plus-jakarta-sans">
      <h1 className="text-center text-[clamp(1.5rem,_0.3776rem+3.2653vw,_2.5rem)] font-medium text-primary-300">
        Our Alumni Speaks
      </h1>
      <p className="mx-auto mt-4 w-full max-w-[750px] text-center text-[clamp(1rem,_0.4388rem+1.6327vw,_1.5rem)] font-light !leading-[160%] text-secondary">
        Discover the impact our program has had , we thrive for excellence and
        that is exactly what we provide.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <RightArrowCTAButton className="ms-auto mt-8 !h-auto !w-auto rounded-full border border-[#7097FF] px-5 py-2.5">
        See all
      </RightArrowCTAButton>
    </MaxWidth>
  );
}

const TestimonialCard = memo(function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; vidSrc: string };
}) {
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const { ref } = useCloseDialog(() => setPlaying(false));

  const [playing, setPlaying] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!vidRef.current) return;

    if (playing) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const haywhy = ref.current;

    return () => {
      if (haywhy) {
        observer.unobserve(haywhy);
      }
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="group relative flex aspect-[390/500] max-h-[420px] w-full flex-col gap-3 overflow-hidden rounded-[20px] bg-[#D9D9D9] pb-7 sm:max-h-[500px]"
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: hasAnimated ? 1 : 0,
        x: hasAnimated ? 0 : -100,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <video
          ref={vidRef}
          preload="metadata"
          className="objectcover object-center"
        >
          <source src={testimonial.vidSrc} type="video/mp4" />
        </video>

        <div className="absolute bottom-1.5 right-2 hidden items-center gap-3 rounded-xl bg-white/90 px-2.5 py-1.5 group-hover:flex">
          <button
            title="Picture in Picture"
            onClick={() => vidRef.current?.requestPictureInPicture()}
          >
            <PictureInPicture className="size-5" />
          </button>
          <button
            onClick={() => vidRef.current?.requestFullscreen()}
            title="Fullscreen"
          >
            <Fullscreen className="size-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pe-7 ps-5">
        <div className="text-black">
          <h4 className="text-[clamp(1.125rem,_0.7041rem+1.2245vw,_1.5rem)] font-medium">
            {testimonial.name}
          </h4>
          <p className="mt-2 text-[clamp(0.875rem,_0.5944rem+0.8163vw,_1.125rem)] font-light">
            {testimonial.role}
          </p>
        </div>

        <button
          className="flex size-[50px] shrink-0 items-center justify-center rounded-full border-[3px] border-white text-white hover:opacity-95 active:scale-98 md:size-[60px] md:border-4 [&&>svg]:size-8"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <Pause /> : <Play />}
        </button>
      </div>
    </motion.div>
  );
});
