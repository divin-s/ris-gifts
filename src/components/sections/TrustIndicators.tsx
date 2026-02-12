"use client";

import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { TRUST_INDICATORS } from "@/lib/constants";

export function TrustIndicators() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40">
      <div className="w-full px-6 lg:px-8">
        <div>
          {/* Horizontal layout — heading + cards inline */}
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">
                Trust
              </span>
              <h2 className="mt-4 font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
                Built on trust
              </h2>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-neutral-500">
                RIS Services DMCC is your reliable partner for corporate
                gifting in the Gulf region.
              </p>
              <div className="mt-8 h-px w-16 bg-neutral-800" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {TRUST_INDICATORS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative flex flex-col items-center rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 text-center transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800/60"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 transition-colors duration-300 group-hover:border-neutral-700">
                    <item.icon className="h-6 w-6 text-neutral-400" />
                  </div>
                  <h3 className="font-display text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-neutral-500">
                    {item.description}
                  </p>

                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <BorderBeam
                      size={120}
                      duration={8}
                      colorFrom="#525252"
                      colorTo="#262626"
                      borderWidth={1}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
