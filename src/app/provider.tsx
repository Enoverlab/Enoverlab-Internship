"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext<any>({});

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [steps, setSteps] = useState<1 | 2 | 3>(1);

  return (
    <GlobalContext.Provider
      value={{
        steps,
        setSteps,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const UseGlobalContext = () => useContext(GlobalContext);
