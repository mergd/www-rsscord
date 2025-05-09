import { Breadcrumb } from "@/components/ui/breadcrumb";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Breadcrumb />
      {children}
    </React.Fragment>
  );
}
