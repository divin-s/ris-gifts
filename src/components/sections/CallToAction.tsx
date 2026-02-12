"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { COMPANY, CTA_IMAGE } from "@/lib/constants";

export function CallToAction() {
  return (
    <section id="contact" className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40">
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        loading="lazy"
        className="object-cover"
        aria-hidden="true"
        sizes="100vw"
      />
      <div className="absolute -inset-px bg-neutral-950/85 backdrop-blur-[2px]" />

      <div className="relative w-full px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">
              Get started
            </span>
            <h2 className="mt-4 font-display text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready to elevate
              <br />
              your corporate gifting?
            </h2>
            <div className="mt-8 h-px w-16 bg-neutral-800" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="max-w-md text-lg font-light leading-relaxed text-neutral-400">
              Let&apos;s create a gifting experience your clients and
              employees will remember. Get in touch for a tailored proposal.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-2.5 text-sm font-light text-white transition-all duration-300 hover:bg-neutral-700"
              >
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Request a quote
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="rounded-lg px-6 py-2.5 text-sm font-light text-neutral-500 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                <a href="#categories" className="flex items-center gap-2">
                  View collections
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p className="mt-12 text-xs font-light text-neutral-600">
              {COMPANY.email} &middot; {COMPANY.location}
            </p>
          </div>
        </div>
      </div>

      <BorderBeam
        size={400}
        duration={5}
        colorFrom="#404040"
        colorTo="#171717"
        borderWidth={1}
      />
    </section>
  );
}
