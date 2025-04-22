import "@/styles/main.css";
import "@radix-ui/themes/styles.css";

import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";
import { fonts } from "@/styles/fonts";

import { Theme } from "@radix-ui/themes";
import clsx from "clsx";

export const metadata: Metadata = {
  ...OpenGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(fonts)} suppressHydrationWarning>
      <body>
        <Providers>
          <Theme accentColor="gray" radius="large" scaling="90%">
            <main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
              <article className="article">{children}</article>
            </main>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
