"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { GIFT_CATEGORIES } from "@/lib/constants";

export function GiftCategories() {
  return (
    <section id="categories" className="relative w-full border-t border-neutral-800/50 py-24 sm:py-32 lg:py-40">
      <div className="w-full px-6 lg:px-8">
        {/* Header */}
        <div>
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

        {/* 3-column grid, 2 rows of big square cards */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GIFT_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-neutral-800 transition-all duration-300 hover:border-neutral-700"
            >
              {/* Full-bleed square image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

              {/* Content pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700/50 bg-neutral-900/80 backdrop-blur-sm">
                  <category.icon className="h-5 w-5 text-neutral-300" />
                </div>
                <h3 className="font-display text-xl text-white sm:text-2xl">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                  {category.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-800/80 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-neutral-400 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <BorderBeam
                  size={200}
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
    </section>
  );
}
