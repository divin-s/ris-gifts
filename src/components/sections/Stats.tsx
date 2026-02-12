"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden border-y border-neutral-800/50 py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-800/10 blur-3xl" />

      <div className="relative w-full px-6 lg:px-8">
        <div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-neutral-800/50">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-center lg:px-12"
              >
                <div className="font-display text-5xl font-normal text-white sm:text-6xl lg:text-7xl">
                  <NumberTicker
                    value={stat.value}
                    delay={0.3 + i * 0.15}
                    className="text-white"
                  />
                  <span className="text-neutral-600">{stat.suffix}</span>
                </div>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
