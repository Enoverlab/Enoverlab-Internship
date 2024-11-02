"use client";
import { cn } from "@/lib/utils";
import React, {
  ComponentProps,
  FC,
  memo,
  useState,
  useTransition,
} from "react";
import FormButton from "./FormButton";
import { useRouter } from "next/navigation";
import CustomBounceAnimation from "@/constant/CustomBounceAnimation";
import ShakeAnimation from "./vibratenshake.module.css";

const Step3 = ({
  userDetails,
  onEdit,
}: {
  userDetails: Step1FormType;
  onEdit: () => void;
}) => {
  const [error, setError] = useState("");
  const [isTransition, startTransition] = useTransition();
  const router = useRouter();

  const onNext = () =>
    startTransition(async () => {
      try {
        const res = await fetch("/api/spreadsheet", {
          method: "POST",
          body: JSON.stringify(userDetails),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!res.ok) {
          console.log("Response Error", res.statusText);
          setError(res.statusText);
          return;
        }

        router.replace("/welcome");
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setTimeout(() => setError(""), 10000);
      }
    });

  return (
    <div className="mx-auto mt-16 w-full max-w-[650px]">
      <h1 className="text-xl text-primary-300 md:text-2xl">
        Please review your submission.
      </h1>

      <p className="mt-2.5 text-sm md:text-base">
        Update any relevant information as needed
      </p>

      <hr className="mb-6 mt-14 border-black/20" />
      <button
        className="ms-auto flex text-sm hover:opacity-90 active:translate-y-0.5 md:text-base"
        onClick={onEdit}
      >
        Edit
      </button>

      <div className="flex flex-col gap-5">
        <FlexItem name="First Name and Last Name?" value={userDetails.name} />
        <FlexItem name="Phone number" value={userDetails.number} />
        <FlexItem name="Email Address" value={userDetails.email} />
        <FlexItem
          name="What is your internship Role?"
          value={userDetails.internship_role}
        />
        <FlexItem
          name="What is your experience level?"
          value={userDetails.experience_level}
        />
        <FlexItem
          name="What is your expectation onboarding with  a team?"
          value={"To become a team player"} //
        />
        <FlexItem
          name="How did you hear about us?"
          value={userDetails.hear_about_us}
        />
      </div>
      {error && (
        <p className={cn("mt-4 text-sm text-red-500", ShakeAnimation.shake)}>
          {error}
        </p>
      )}
      <hr className="my-14 border-black/20" />
      <FormButton
        className="mx-auto max-w-[400px]"
        disabled={isTransition}
        onClick={onNext}
      >
        {isTransition ? (
          <CustomBounceAnimation className="bg-white" />
        ) : (
          "Submit"
        )}
      </FormButton>
    </div>
  );
};

export default memo(Step3);

type FlexItemProps = ComponentProps<"div"> & {
  name: string;
  value: string | number;
};

const FlexItem: FC<FlexItemProps> = memo(function FlexItem({
  name,
  value,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 text-sm font-light md:text-base",
        className,
      )}
      {...props}
    >
      <span className="text-secondary/70">{name}</span>
      <span className="text-right text-black">{value}</span>
    </div>
  );
});
