"use client";

import { Gift } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800">
      <div className="w-full px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <a href="#" className="inline-flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                  <Gift className="h-4 w-4 text-neutral-400" />
                </div>
                <span className="font-display text-lg text-white">
                  {COMPANY.shortName}
                </span>
              </a>
              <p className="mt-2 text-xs font-light text-neutral-600">
                {COMPANY.tagline} &middot; {COMPANY.name}
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap items-center justify-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-1.5 text-sm font-light text-neutral-500 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-neutral-800/50 pt-6 text-center">
            <p className="text-[11px] font-light text-neutral-600">
              &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
              reserved. Dubai, UAE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
