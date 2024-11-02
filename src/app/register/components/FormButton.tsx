"use client";

import { cn } from "@/lib/utils";
import React, { ComponentProps, FC, memo } from "react";

const FormButton: FC<ComponentProps<"button">> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "flex h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-primary-300 text-center font-plus-jakarta-sans text-base font-normal text-white hover:bg-opacity-95 active:scale-[0.98] disabled:pointer-events-none disabled:bg-opacity-90",
        className,
      )}
      {...props}
    />
  );
};

export default memo(FormButton);
