import { AppThemeProvider } from "@/components/theme";

import { ViewTransitions } from "next-view-transitions";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransitions>
      <AppThemeProvider enableSystem={false}>{children}</AppThemeProvider>
    </ViewTransitions>
  );
};
