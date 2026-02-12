"use client";

import { motion } from "motion/react";
import { FEATURES } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function WhyChooseUs() {
  const left = FEATURES.slice(0, 3);
  const right = FEATURES.slice(3);

  return (
    <section id="why-us" className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent" />

      <div className="relative w-full px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">
              Why choose us
            </span>
            <h2 className="mt-4 font-display text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
              Gifting made
              <br />
              effortless
            </h2>
            <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-neutral-500">
              From selection to delivery, we handle every detail so you can
              focus on what matters — your relationships.
            </p>
            <div className="mt-8 h-px w-16 bg-neutral-800" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-4">
              {left.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-800/60"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 transition-colors duration-300 group-hover:border-neutral-700">
                    <feature.icon className="h-5 w-5 text-neutral-400" />
                  </div>
                  <h3 className="font-display text-lg text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-neutral-500">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:mt-12">
              {right.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (i + 3) * 0.06, ease: "easeOut" }}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-800/60"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 transition-colors duration-300 group-hover:border-neutral-700">
                    <feature.icon className="h-5 w-5 text-neutral-400" />
                  </div>
                  <h3 className="font-display text-lg text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-neutral-500">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
