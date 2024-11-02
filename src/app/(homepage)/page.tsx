import CareerField from "@/components/CareerField";
import CodeOfConduct from "@/components/CodeOfConduct";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InternshipThreeSteps from "@/components/InternshipThreeSteps";
import PurposeOfInternship from "@/components/PurposeOfInternship";
import StartWithEnoverlab from "@/components/StartWithEnoverlab";
import AluminiTestimonials from "@/components/alumni";
import ContactForm from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InternshipThreeSteps />
      <PurposeOfInternship />
      <CareerField />
      <CodeOfConduct />
      <AluminiTestimonials />
      <ContactForm />
      <FAQ />
      <StartWithEnoverlab />
    </>
  );
}
