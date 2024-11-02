"use client";

import useCloseDialog from "@/hooks/useCloseDialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { ComponentProps, FC, memo, useState } from "react";
import FormButton from "./FormButton";
import CustomBounceAnimation from "@/constant/CustomBounceAnimation";
import { resolve } from "path";

const CoC = [
  {
    name: "Culture",
    list: [
      "Interns are expected to respect everyone's different backgrounds and experiences, ensure everyone feels welcome and included in the group projects and  treat everyone fairly and with respect",
      "Interns must be curious, eager to learn and grow and open to constructive and constant feedback and evaluations to help them improve and grow professionally.",
      "Interns will work under the supervision of professional Mentors who will provide guidance and feedback.",
      "Inters are to be accountable to the assigned mentor and team throughout the duration of the project",
      "Interns are expected to conduct themselves professionally at all times, both in person and in virtual interactions.",
    ],
  },
  {
    name: "Communication",
    list: [
      "Interns are expected to communicate clearly with the team and ensure proper documentation of work done",
      "Interns should communicate openly with their mentors and colleagues regarding their progress, challenges, and questions.",
      "Interns are to ensure responsiveness  and availability at all times",
      "Interns are expected to collaborate effectively, take part in team meetings, listen to others' ideas, resolve disagreements professionally and try to understand different viewpoints.",
    ],
  },
  {
    name: "Readiness",
    list: [
      "Interns are expected to provide all tools and resources required (e.g.; laptop or software) before resuming the internship program",
      "Interns are expected to attend all training sessions and review the materials provided.",
      "Interns are expected to be punctual and attend all scheduled activities.",
      "Interns are expected to commit 2-3 hours daily to their tasks, assignments or responsibilities.",
    ],
  },
];

const STRUCTURE = [
  {
    name: "New structure for interns:",
    list: [
      "General team lead to oversee,assign and follow up on task on weekly basis.",
      "2 meetings per week attendance is compulsory.",
      "Anyone who doesn't attend at least 2 meetings without a valid reason would be removed from the program.",
      "5 screens only (An MVP that delivers value to specific users)",
      "8-10 people on the team; 4 PMs,2-3 designers, 2-3 developers.",
      "Give the PMs the use case at least 3 days earlier before the project timeline begins.",
    ],
  },
  {
    name: "Rules",
    list: [
      "Attendance to general check in call is compulsory",
      "Communication is very important",
    ],
  },
];

const TABLE = [
  {
    week: "Week 1:",
    data: ["Project survey"],
  },
  {
    week: "Week 2: (PRD)",
    data: [
      "PM1: Product overview, product problem & statement, product metrics.",
      "PM2: User research, segmentation, personas stories.",
      "PM3: Wireframe/user flow, roadmap, priotization framework.",
      "PM4: Competitive analysis/teardown, go to market plan.",
    ],
  },
  {
    week: "Week 3: (Sketch & LowFi)",
    data: ["PD1: Sketch all the screens.", "PD2: Low fi of all the screens. "],
  },
  {
    week: "Week 4: (HighFi)",
    data: [
      "PD1: Web view of all the screens.",
      "PD2: Mobile view of all the screens. ",
    ],
  },
  {
    week: "Week 5: (Implementation)",
    data: ["3 screens must be ready with full functionality."],
  },
  {
    week: "Week 6: (Implementation)",
    data: [
      "Completion of remaining 2 screens with full functionality/testing.",
    ],
  },
  {
    week: "Week 7:",
    data: ["Preparation for mock presentation."],
  },
  {
    week: "Week 8:",
    data: ["Final project presentation."],
  },
];

const CodeOfConductModal = ({
  onclose,
  onagree,
}: {
  onclose: () => void;
  onagree: () => void;
}) => {
  const { ref } = useCloseDialog(onclose);
  const [loading, setLoading] = useState(false);

  return (
    <section className="fixed inset-0 z-10 flex items-center justify-center bg-[#D9D9D9]/50 px-2.5 py-5">
      <div
        className="relative flex h-fit max-h-[90vh] w-full max-w-[950px] flex-col gap-10 overflow-auto rounded-lg border bg-white px-3.5 py-12 text-black sm:px-6 md:px-10 md:pt-20 ipad:px-16 ipad:pt-28"
        ref={ref}
      >
        <button
          className="right-08 absolute right-6 top-5 md:right-8 md:top-7 ipad:right-12 ipad:top-9"
          onClick={onclose}
        >
          <X className="size-7" />
        </button>

        <div className="flex-1 md:text-justify">
          <h1 className="text-center text-2xl font-semibold text-primary-300 ipad:text-3xl">
            Code of Conduct
          </h1>

          <div className="mt-9 text-lg font-light ipad:text-xl">
            <p className="!leading-[35px]">
              Interns are expected to fully adhere to the company&apos;s code of
              conduct and professional standards.
            </p>

            {CoC?.map((item, index) => (
              <div key={index} className="mt-5">
                <p className="!leading-[35px]">
                  {index + 1}. {item.name}
                </p>

                <ul className="list-outside list-disc ps-10 text-[15px] ipad:text-[17px]">
                  {item.list?.map((item, index) => (
                    <li key={index} className="mt-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-5">
            {STRUCTURE?.map((item, index) => (
              <div key={index} className="mt-8">
                <p className="text-base font-medium ipad:text-lg">
                  {item.name}
                </p>

                <ul className="list-outside list-disc ps-10 text-sm font-light ipad:text-[15px]">
                  {item.list.map((item, index) => (
                    <li key={index} className="mt-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-11">
            <table className="w-full">
              <tbody>
                {TABLE?.map(({ week, data }, index) => (
                  <tr key={index}>
                    <TableData>{week}</TableData>
                    <TableData className="list-item list-none sm:px-6">
                      {data.map((data, index) => (
                        <li key={index} className="mt-1.5">
                          {data}
                        </li>
                      ))}
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <FormButton
            className="mx-auto max-w-[350px]"
            onClick={async () => {
              setLoading(true);
              await new Promise((resolve) => setTimeout(resolve, 3000))
                .then(onagree)
                .finally(() => setLoading(false));
            }}
            disabled={loading}
          >
            {loading ? <CustomBounceAnimation className="bg-white" /> : "Agree"}
          </FormButton>
        </div>
      </div>
    </section>
  );
};

export default memo(CodeOfConductModal);

const TableData: FC<ComponentProps<"td">> = memo(function TableHeadData({
  className,
  ...props
}) {
  return (
    <td
      className={cn(
        "border-collapse border px-2.5 py-3 text-sm font-light ipad:text-base",
        className,
      )}
      {...props}
    />
  );
});
