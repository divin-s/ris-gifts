"use client";

import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { OCCASIONS } from "@/lib/constants";

export function Occasions() {
  return (
    <section id="occasions" className="relative w-full border-t border-neutral-800/50 py-24 sm:py-32 lg:py-40">
      <div className="w-full px-6 lg:px-8">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">
            Occasions
          </span>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
              Perfect for every occasion
            </h2>
            <p className="max-w-md text-base font-light leading-relaxed text-neutral-500">
              Whether it&apos;s a celebration, recognition, or simply a
              thank-you, we have the perfect solution.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-neutral-800/50" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OCCASIONS.map((occasion) => (
              <div
                key={occasion.title}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 transition-colors duration-300 hover:border-neutral-700"
              >
                <div className="relative h-72 w-full overflow-hidden sm:h-80 lg:h-96">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700/50 bg-neutral-900/80 backdrop-blur-sm">
                      <occasion.icon className="h-4 w-4 text-neutral-300" />
                    </div>
                    <h3 className="font-display text-lg text-white">
                      {occasion.title}
                    </h3>
                    <p className="mt-1 text-sm font-light leading-relaxed text-neutral-400">
                      {occasion.description}
                    </p>
                  </div>
                </div>

                <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <BorderBeam
                    size={120}
                    duration={8}
                    colorFrom="#525252"
                    colorTo="#262626"
                    borderWidth={1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
