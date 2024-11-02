import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";

const MaxWidth: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 ipad:px-8",
        className,
      )}
      id="MaxWidth"
      {...props}
    />
  );
};

export default MaxWidth;
