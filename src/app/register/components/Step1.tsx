"use client";

import React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormButton from "./FormButton";
import { FormikProps } from "formik";
import CustomBounceAnimation from "@/constant/CustomBounceAnimation";

const INTERNSHIP_ROLES = [
  "Frontend Developer",
  "Product Manager",
  "Product Designer",
];

const EXPERIENCE_LEVELS = ["Beginner", "Intermediate", "Advanced", "Expert"];

const HEAR_ABOUT_US = [
  "Social Media",
  "Friends & Family",
  "LinkedIn",
  "Facebook",
  "Twitter",
  "Instagram",
  "Other",
];

export default function Step1({ form }: { form: FormikProps<Step1FormType> }) {
  const {
    values: {
      email,
      experience_level,
      name,
      hear_about_us,
      internship_role,
      number,
      question,
    },
    isSubmitting,
    handleSubmit,
    handleChange,
    errors,
    touched,
  } = form;

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <h1 className="text-xl font-medium !leading-[160%] text-primary-300">
        Welcome to your internship! Fill out your details to get started on this
        exciting journey!
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
        <FormInput
          name="name"
          placeholder="John Doe"
          label="First Name and Last Name?"
          value={name}
          onChange={handleChange}
          error={touched.name && errors.name ? true : false}
          required
        />

        <FormInput
          name="number"
          label="Phone number"
          placeholder="123-456-7890"
          type="tel"
          inputMode="numeric"
          value={number}
          onChange={handleChange}
          error={touched.number && errors.number ? true : false}
          required
        />

        <FormInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={handleChange}
          error={touched.email && errors.email ? true : false}
          required
        />

        <FormSelect
          label="What is your internship Role?"
          name="internship_role"
          required
          value={internship_role}
          onChange={handleChange}
          option={INTERNSHIP_ROLES.sort()}
          error={
            touched.internship_role && errors.internship_role ? true : false
          }
        />

        <FormSelect
          label="What is your experience level?"
          name="experience_level"
          required
          value={experience_level}
          onChange={handleChange}
          option={EXPERIENCE_LEVELS}
          error={
            touched.experience_level && errors.experience_level ? true : false
          }
        />

        <FormInput
          name="question"
          label="A question on a user's cohort?"
          value={question}
          onChange={handleChange}
          error={touched.question && errors.question ? true : false}
          required
        />

        <FormSelect
          label="How did you hear about us?"
          name="hear_about_us"
          value={hear_about_us}
          onChange={handleChange}
          option={HEAR_ABOUT_US.sort()}
        />

        <FormButton type="submit" disabled={isSubmitting} className="mt-10">
          {isSubmitting ? (
            <CustomBounceAnimation className="bg-white" />
          ) : (
            "Next"
          )}
        </FormButton>
      </form>
    </div>
  );
}
