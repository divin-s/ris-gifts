"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { GIFT_CATEGORIES } from "@/lib/constants";

export function GiftCategories() {
  return (
    <section id="categories" className="relative w-full border-t border-neutral-800/50 py-24 sm:py-32 lg:py-40">
      <div className="w-full px-6 lg:px-8">
        {/* Header — left-aligned, full-width feel */}
        <div className="mx-auto max-w-[90rem]">
          <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">
            Collections
          </span>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
              Curated gift categories
            </h2>
            <p className="max-w-md text-base font-light leading-relaxed text-neutral-500">
              Explore our range of premium gifting solutions for every occasion
              and recipient.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-neutral-800/50" />
        </div>

        {/* Bento grid — 2 large + 4 small for visual variety */}
        <div className="mx-auto mt-12 grid max-w-[90rem] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {GIFT_CATEGORIES.map((category, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 transition-all duration-300 hover:border-neutral-700 ${
                  isLarge ? "lg:row-span-2" : ""
                }`}
              >
                {/* Image — taller for large cards */}
                <div
                  className={`relative w-full overflow-hidden ${
                    isLarge ? "h-56 lg:h-full" : "h-44"
                  }`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={
                      isLarge
                        ? "(max-width: 1024px) 100vw, 33vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

                  {/* Content overlaid on image */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700/50 bg-neutral-900/80 backdrop-blur-sm">
                      <category.icon className="h-4 w-4 text-neutral-300" />
                    </div>
                    <h3 className="font-display text-lg text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm font-light leading-relaxed text-neutral-400">
                      {category.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-800/80 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-400 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover reveal */}
                    <div className="mt-3 flex items-center gap-1 text-xs font-light text-neutral-600 transition-colors duration-300 group-hover:text-neutral-300">
                      Learn more
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>

                <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <BorderBeam
                    size={150}
                    duration={8}
                    colorFrom="#525252"
                    colorTo="#262626"
                    borderWidth={1}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
