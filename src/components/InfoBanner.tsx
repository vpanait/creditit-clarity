'use client'

import { WIDTH_CONSTRAINT } from "@/const";
import { cn } from "@/lib/utils";

const AWS_OUTAGE_URL =
  "https://www.businessinsider.com/amazon-web-services-data-center-fire-objects-middle-east-strikes-2026-3";

export default function InfoBanner() {
  return (
    <div
      role="banner"
      className={cn(
        "sticky top-0 z-30 h-18 md:h-12 shrink-0",
        "flex items-center justify-center",
        "bg-surface border-b-2 border-accent",
        "text-center text-sm text-foreground px-4"
      )}
    >
      <div className={cn(WIDTH_CONSTRAINT, "mx-auto")}>
        <span className="font-medium text-accent">Service notice:</span>{" "}
        Amazon Web Services is experiencing a major outage affecting data
        centers in the Middle East (UAE). This directly impacts our services. {" "}
        <a
          href={AWS_OUTAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold underline underline-offset-2 hover:opacity-90"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
