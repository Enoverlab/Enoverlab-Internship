"use client";

import React, { useState } from "react";
import Step1 from "./components/Step1";
import Steps from "./components/Steps";
import Step3 from "./components/Step3";
import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import CodeOfConductModal from "./components/CodeOfConductModal";

const formShema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string().required("Required"),
  internship_role: Yup.string().required("Required"),
  experience_level: Yup.string().required("Required"),
  question: Yup.string().required("Required"),
  hear_about_us: Yup.string(),
});

export default function Pgae() {
  const [steps, setSteps] = useState<1 | 2 | 3>(1);

  const form: FormikProps<Step1FormType> = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      internship_role: "Frontend Developer",
      experience_level: "Beginner",
      question: "",
      hear_about_us: "Social Media",
    },
    validationSchema: formShema,
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSteps(2);
    },
  });

  return (
    <div className="mx-auto w-full">
      <Steps {...{ steps }} />

      <div className="mt-10">
        {steps === 1 && <Step1 {...{ form }} />}
        {steps === 2 && (
          <CodeOfConductModal
            onclose={() => setSteps(1)}
            onagree={() => setSteps(3)}
          />
        )}
        {steps === 3 && (
          <Step3 userDetails={form.values} onEdit={() => setSteps(1)} />
        )}
      </div>
    </div>
  );
}
