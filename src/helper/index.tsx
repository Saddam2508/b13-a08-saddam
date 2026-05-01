import TilesProvider from "@/context/TilesContext";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <TilesProvider>{children}</TilesProvider>;
};

export default Providers;
