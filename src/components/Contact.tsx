"use client";

import React, { ComponentProps, FC, memo, ReactNode } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import Link from "next/link";
import { Gmail, Telephone } from "@/constant/SVGs";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { RightArrowCTAButtonVariant } from "./RightArrowCTAButton";

const InputVariant = cva("w-full rounded-[30px] border-0 px-6 py-5 outline-0");

export default function ContactForm() {
  return (
    <div className="mt10 w-full bg-[#DBF5FF] py-20 font-plus-jakarta-sans">
      <MaxWidth>
        <h2 className="mb-7 text-center text-2xl font-medium text-[#002A42] sm:text-3xl md:text-4xl">
          Contact our friendly team
        </h2>
        <p className="mb-10 text-center text-base font-light text-black md:text-lg">
          Let us know how we can help! We are available Mon - Fri from 8am to
          5pm.
        </p>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-16">
          {/* Contact Details Section */}
          <motion.div
            className="flex w-max flex-col gap-8 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactLink
              href="tel:+2348034567890"
              name="+234 8034567890"
              icon={<Telephone />}
            />
            <ContactLink
              href="mailto:enoverlab@gmail.com"
              name="enoverlab@gmail.com"
              icon={<Gmail />}
            />
            <ContactLink
              href="mailto:sarah@enoverlab.com"
              name="sarah@enoverlab.com"
              icon={<Gmail />}
            />
          </motion.div>

          {/* Contact Form Section */}
          <motion.form
            className="w-full flex-1 md:max-w-[560px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email:"
                className={cn(InputVariant())}
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              className="mt-5 w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Message:"
                className={cn(InputVariant({ className: "min-h-[175px]" }))}
              />
            </motion.div>

            {/* Send Button */}
            <motion.div
              className="mt-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <button
                type="submit"
                className={cn(
                  RightArrowCTAButtonVariant({
                    className:
                      "ms-auto rounded-full border border-[#0046FF] bg-transparent text-[#0046FF]",
                  }),
                )}
              >
                Send message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </MaxWidth>
    </div>
  );
}

const ContactLink: FC<ComponentProps<"a"> & { name: string; icon: ReactNode }> =
  memo(function ContactLink({ name, icon, href = "", ...props }) {
    return (
      <Link className="flex items-center gap-3" {...{ props, href }}>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#FCFCFC] p-2.5">
          {icon}
        </div>
        <span className="text-[#002A42]">{name}</span>
      </Link>
    );
  });
