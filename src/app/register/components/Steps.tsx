import { cn } from "@/lib/utils";
import React from "react";

export default function Steps({ steps }: { steps: 1 | 2 | 3 }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[326px] items-center justify-between">
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "z-[3] flex size-10 cursor-default items-center justify-center rounded-full border border-[#c5c5c5] bg-white font-plus-jakarta-sans text-xl font-medium text-[#c5c5c5] sm:size-[50px]",
            {
              "border-primary-300 bg-primary-300 text-white":
                steps >= index + 1,
            },
          )}
        >
          {index + 1}
        </span>
      ))}

      <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#c5c5c5]" />
      <span
        className="absolute left-0 top-1/2 h-0.5 max-w-full -translate-y-1/2 bg-primary-300"
        style={{ width: `${((steps - 1) / 2) * 100}%` }}
      />
    </div>
  );
}
