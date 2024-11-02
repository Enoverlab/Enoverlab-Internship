import MaxWidth from "@/constant/MaxWidth";
import { DropdownSVG, HamburgerSVG } from "@/constant/SVGs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks: {
  name: string;
  href: string;
  dropdown?: boolean;
}[] = [
  {
    name: "Programs",
    href: "/",
  },
  {
    name: "Internship",
    href: "/",
    dropdown: true,
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Free Resources",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="z-50 bg-white/70 pb-3 pt-5 backdrop-blur-md md:fixed md:inset-x-0 md:top-0"
      >
        <MaxWidth className="flex items-center justify-between">
          <Image
            src={"/enoverlab_logo.png"}
            width={225}
            height={0}
            alt="Enoverlab Logo"
            objectFit="contain"
            className="w-[138px] sm:w-[225px]"
          />

          <span className="hidden items-center gap-10 lg:flex">
            {navLinks?.map((item, index) => (
              <Link
                className="flex items-center gap-1.5 font-plus-jakarta-sans text-lg font-normal text-secondary"
                href={item.href}
                key={index}
              >
                <span>{item.name}</span>
                {item.dropdown && <DropdownSVG />}
              </Link>
            ))}
          </span>

          <Link
            href="/register"
            target="_blank"
            className="hidden items-center justify-center rounded-[10px] border border-[#C5C5C5] bg-[#0046FF] px-7 py-2.5 text-sm text-white hover:bg-opacity-95 active:scale-98 sm:inline-flex md:text-base"
          >
            Enroll
          </Link>

          {/* Hamburger */}
          <button className="inline-flex sm:hidden">
            <HamburgerSVG />
          </button>
        </MaxWidth>
      </nav>

      <div className="h-[82px] w-full max-md:hidden"></div>
    </>
  );
}
