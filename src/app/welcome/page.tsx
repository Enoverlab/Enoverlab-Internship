"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Check } from "lucide-react";
import FormButton from "../register/components/FormButton";
import { FacebookSVG, InstagramSVG, LinkedInSVG } from "@/constant/SVGs";
import Link from "next/link";
import Confetti from "react-confetti";

type SocialLinksType = {
  icon: React.ReactNode;
};

const socialLinks: SocialLinksType[] = [
  {
    icon: <FacebookSVG />,
  },
  {
    icon: <LinkedInSVG />,
  },
  {
    icon: <InstagramSVG />,
  },
];

export default function Page() {
  const [confettiConfig, setConfettiConfig] = useState({
    display: true,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window) {
      setConfettiConfig((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }
    setTimeout(
      () => setConfettiConfig((prev) => ({ ...prev, display: false })),
      7000,
    );
  }, []);

  return (
    <div className="flex h-fit min-h-screen w-full items-center justify-center overflow-hidden bg-white px-5 font-plus-jakarta-sans">
      {confettiConfig.display && (
        <Confetti
          width={confettiConfig.width}
          tweenDuration={1000}
          height={confettiConfig.height}
        />
      )}
      <div className="max-h[411px] relative flex w-full max-w-[500px] flex-col items-center justify-center overflow-hidden py-10 text-center sm:py-20">
        <span className="flex size-16 items-center justify-center rounded-full bg-[#D9D9D9] text-primary-300">
          <Check className="size-8" />
        </span>
        <h1 className="mt-7 text-xl font-semibold text-primary-300 sm:text-[32px]">
          Thank You
        </h1>
        <p className="mt-4 text-base font-light">
          Your application has been submitted for review. We will get back to
          you on the next steps!
        </p>
        <FormButton className="mx-auto mt-11 h-auto w-fit max-w-full rounded-[25px] border-2 border-primary-300/50 bg-white px-7 py-5 text-primary-300">
          Join Our Community Whatsapp Group
        </FormButton>

        <div className="mt-5 flex items-center justify-center gap-2.5">
          {socialLinks?.map((item, index) => (
            <Link className="" key={index} href={"#"}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
