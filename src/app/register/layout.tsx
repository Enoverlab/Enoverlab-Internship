import React from "react";
import { metadata } from "../layout";
import SideBar from "./components/SideBar";

metadata.title = "Enoverlab - Internship Registration";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 font-plus-jakarta-sans ipad:grid-cols-[0.6fr,1fr]">
      <SideBar />
      <div className="flex-1 overflow-auto px-5 py-11">{children}</div>
    </div>
  );
}
