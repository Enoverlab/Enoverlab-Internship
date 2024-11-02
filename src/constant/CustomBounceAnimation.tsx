import { cn } from "@/lib/utils";
import React, { ComponentProps, FC, memo } from "react";
import Animation from "./customBounce.module.css";

type PropsType = ComponentProps<"span"> & { length?: number };

const CustomBounceAnimation: FC<PropsType> = ({
  className,
  style,
  length = 3,
  ...props
}) => {
  return Array.from({ length }).map((_, index) => (
    <span
      key={index}
      className={cn(
        "size-3 rounded-full bg-primary-300",
        Animation.bounce,
        className,
      )}
      style={{ animationDelay: `${index * 200}ms`, ...style }}
      {...props}
    />
  ));
};

export default memo(CustomBounceAnimation);
