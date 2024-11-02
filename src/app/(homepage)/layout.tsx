import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function HompageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-full min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
