"use client";

import { useState } from "react";
import { Gift, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
            <Gift className="h-4 w-4 text-neutral-400" />
          </div>
          <span className="font-display text-lg text-white">
            {COMPANY.shortName}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-light text-neutral-500 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-lg border border-neutral-700 bg-neutral-800 text-sm font-light text-white transition-colors duration-300 hover:bg-neutral-700"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-800 bg-neutral-950 px-4 pb-4 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-light text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 px-4">
            <Button
              asChild
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 text-sm font-light text-white hover:bg-neutral-700"
            >
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
