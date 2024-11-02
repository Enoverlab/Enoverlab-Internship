"use client";

import { FAQDropdownSVG } from "@/constant/SVGs";
import useCloseDialog from "@/hooks/useCloseDialog";
import React, { memo, useEffect, useState } from "react";

type QuestionType = {
  ques: string;
  ans: string;
};

const questions_answers: QuestionType[] = [
  {
    ques: "What is the duration of the internship?",
    ans: "The internship typically lasts for 7 - 8 weeks",
  },
  {
    ques: "Is the internship paid?",
    ans: "No, this is an unpaid internship designed to provide valuable hands - on experience and professional growth",
  },
  {
    ques: "What kind of projects will I be working on?.",
    ans: "You will work on real - world problem statements curated by our program, designed to challenge and enhance your skills",
  },
  {
    ques: "How many hours per week are expected?",
    ans: "We recommend dedicating 8 - 12  hours per week to ensure you get the most out of the experience, but this may vary based on project requirements.",
  },
  {
    ques: "How will my performance be evaluated?",
    ans: "Your performance will be evaluated based on your contributions to the project, teamwork, and adherence to deadlines.",
  },
  {
    ques: "What happens if I have to miss a day or two?",
    ans: "Please inform your team and mentor as soon as possible.We understand that unforeseen circumstances may arise and will accommodate reasonable requests.",
  },
  {
    ques: "Will I have a mentor or supervisor?",
    ans: "Yes, each group will have an assigned mentor to guide and support you throughout the internship.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-5 font-plus-jakarta-sans text-secondary sm:mt-[87px]">
      <div className="container mx-auto px-4 py-[37px]">
        <h4 className="mx-auto w-full max-w-[641px] text-center text-2xl font-semibold !leading-[160%] sm:text-3xl">
          Get quick answers to questions asked by people like you
        </h4>

        <div className="mx-auto mt-5 w-full max-w-[991px] sm:mt-10">
          {questions_answers?.map((item, index) => (
            <Question key={index} item={item} no={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Question = memo(function Question({
  no,
  item: { ques, ans },
}: {
  item: QuestionType;
  no: number;
}) {
  const [isAns, setIsAns] = useState<boolean>(false);
  const { ref } = useCloseDialog(() => setIsAns(false));

  useEffect(() => {
    if (no === 1) setIsAns(true);
  }, []);

  return (
    <div ref={ref} className="border-b border-b-black py-4">
      <button
        className="flex w-full items-center justify-between gap-3 text-left text-base font-medium !leading-[160%] text-[#323232] sm:text-lg sm:font-semibold md:text-2xl"
        onClick={() => setIsAns(!isAns)}
      >
        <span className="w-full max-w-[763px]">
          {no}. {ques}
        </span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-300 md:size-10">
          <FAQDropdownSVG styles={isAns ? "rotate-180" : ""} />
        </span>
      </button>

      {isAns && (
        <p className="mt-6 w-[90%] max-w-[735px] ps-3 text-sm !leading-[160%] text-[#323232] sm:text-base md:text-xl">
          {ans}
        </p>
      )}
    </div>
  );
});
