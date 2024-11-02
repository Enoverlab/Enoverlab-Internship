import {
  FacebookSVG,
  InstagramSVG,
  LinkedInSVG,
  WhatsAppSVG,
  YoutubeSVG,
} from "@/constant/SVGs";
import Image from "next/image";
import React from "react";

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
    icon: <YoutubeSVG />,
  },
  {
    icon: <InstagramSVG />,
  },
  {
    icon: <WhatsAppSVG />,
  },
];

type OtherLinksType = {
  name: string;
};

const programs: OtherLinksType[] = [
  {
    name: "Basic Program",
  },
  {
    name: "Adanced Program",
  },
  {
    name: "Executive Coaching",
  },
  {
    name: "Corporate Training",
  },
  {
    name: "Onsite Training",
  },
];

const resources: OtherLinksType[] = [
  {
    name: "Blog",
  },
  {
    name: "E-books",
  },
  {
    name: "Product Sessions",
  },
  {
    name: "Career Advisor",
  },
];

const company: OtherLinksType[] = [
  {
    name: "About us",
  },
  {
    name: "Accreditation",
  },
  {
    name: "Our Teams",
  },
  {
    name: "Review",
  },
  {
    name: "Community",
  },
  {
    name: "Contact us",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-primary-100 px-4 py-20 font-plus-jakarta-sans">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-16">
          {/* Enoverlab Image and Social Links */}
          <div className="w-[285px]">
            <Image
              src={"/enoverlab_logo.png"}
              width={225}
              height={0}
              alt="Enoverlab Logo"
              objectFit="contain"
              className="w-[138px] sm:w-[225px]"
            />
            <p className="mt-4 text-base font-light leading-[160%] text-secondary">
              Building impactful product managers for today, tomorrow and the
              future
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socialLinks?.map((socialLink, index) => (
                <button
                  className="rounded-lg p-1 hover:opacity-85 active:translate-y-[2px]"
                  key={index}
                >
                  {socialLink.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Other Links */}
          {/* <div className='flex flex-wrap gap-20'> */}
          {/* Programs */}
          <LinksComponent name="Programs" array={programs} />

          {/* Free Resource */}
          <LinksComponent name="Free Resource" array={resources} />

          {/* Company */}
          <LinksComponent name="Company" array={company} />

          <div className="flex flex-col gap-[18px] sm:w-[320px]">
            <h6 className="w-[205px] text-base font-medium text-secondary sm:w-max">
              Receive important PM info weekly
            </h6>
            <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
              <input
                type="text"
                name=""
                placeholder="Fullname"
                className="h-9 w-[152px] border-0 bg-white px-[18px] font-plus-jakarta-sans text-xs font-light outline-0 ring-0"
              />
              <input
                type="text"
                name=""
                placeholder="Email Address"
                className="h-9 w-[152px] border-0 bg-white px-[18px] font-plus-jakarta-sans text-xs font-light outline-0 ring-0"
              />
              <button className="flex h-9 w-[152px] items-center justify-center bg-primary-200 font-plus-jakarta-sans text-xs font-light text-white hover:bg-primary-300/80 active:scale-98">
                Subscribe
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>

        <hr className="mt-36 border-[#727272]" />
        <p className="mt-7 text-center text-base font-light text-secondary">
          Copyright @enoverlab 2024. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}

function LinksComponent({
  array,
  name,
}: {
  array: OtherLinksType[];
  name: string;
}) {
  return (
    <div className="flex w-max flex-col gap-5">
      <h6 className="text-base font-medium text-secondary">{name}</h6>
      <div className="flex flex-col gap-2">
        {array?.map((item, index) => (
          <button
            className="text-left text-sm font-light text-secondary hover:opacity-85 active:scale-98"
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
