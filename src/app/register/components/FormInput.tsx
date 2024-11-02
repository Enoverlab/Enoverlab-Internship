import { cn } from "@/lib/utils";
import React, { ComponentProps, FC, memo } from "react";
import Animation from "./vibratenshake.module.css";

type FormInputProps = ComponentProps<"input"> & {
  label: string;
  error?: boolean;
};

const FormInput: FC<FormInputProps> = ({
  label,
  className,
  error,
  ...props
}) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm text-secondary">
        {label} {props.required && "*"}
      </span>
      <input
        className={cn(
          "shake h-12 w-full rounded-[4px] border border-secondary-100 px-4 text-base text-secondary placeholder:text-secondary-100",
          className,
          { "border-red-600": error },
          { [Animation.shake]: error },
        )}
        {...props}
      />
    </label>
  );
};

export default memo(FormInput);
