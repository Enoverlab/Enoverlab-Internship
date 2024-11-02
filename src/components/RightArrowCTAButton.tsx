import { RightArrowSVG } from "@/constant/SVGs";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, FC, memo } from "react";

export const RightArrowCTAButtonVariant = cva(
  "flex h-10 w-[150px] items-center justify-center gap-3 rounded-[7px] text-sm hover:bg-opacity-95 active:scale-[0.98] md:h-[51px] md:w-[208px] md:gap-4 md:text-base",
);

interface RightArrowCTAButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof RightArrowCTAButtonVariant> {
  arrow?: boolean;
}

const RightArrowCTAButton: FC<RightArrowCTAButtonProps> = ({
  className,
  children,
  arrow = true,
  ...props
}) => {
  return (
    <button
      className={cn(RightArrowCTAButtonVariant({ className }))}
      {...props}
    >
      {children}
      {arrow && <RightArrowSVG className="w-5 md:w-7" />}
    </button>
  );
};

export default memo(RightArrowCTAButton);
