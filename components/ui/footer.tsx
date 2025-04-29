import { AppThemeSwitcher } from "@/components/theme";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="px-[2px] text-muted text-small">
        <div>Made in SF</div>
      </div>
      <div className="flex items-center gap-4 text-muted text-small">
        <Link
          href="/changelog"
          className="hover:text-foreground transition-colors"
        >
          Changelog
        </Link>
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
