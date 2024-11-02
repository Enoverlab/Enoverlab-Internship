import { DropdownSVG } from "@/constant/SVGs";
import { cn } from "@/lib/utils";
import React, { ComponentProps, FC, memo } from "react";
import Animation from "./vibratenshake.module.css";

type FormSelectProps = ComponentProps<"select"> & {
  label: string;
  option?: string[];
  error?: boolean;
};

const FormSelect: FC<FormSelectProps> = ({
  label,
  className,
  option,
  error,
  ...props
}) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm">
        {label} {props.required && "*"}
      </span>
      <div className="relative">
        <select
          className={cn(
            "h-12 w-full rounded-[4px] border border-secondary-100 px-4 text-base text-secondary placeholder:text-secondary-100",
            className,
            { "border-red-600": error },
            { [Animation.shake]: error },
          )}
          {...props}
        >
          {option?.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>

        <button
          className="absolute right-1 top-1/2 z-10 h-[40px] -translate-y-1/2 bg-white pe-3"
          type="button"
        >
          <DropdownSVG className="size-3" />
        </button>
      </div>
    </label>
  );
};

export default memo(FormSelect);
