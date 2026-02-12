"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.8]);

  const imageY = useSpring(rawY, springConfig);
  const imageScale = useSpring(rawScale, springConfig);
  const overlayOpacity = useSpring(rawOpacity, springConfig);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-end overflow-hidden"
    >
      {/* Full-bleed local hero image with smooth parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/img/hero_img.png"
          alt="Elegant corporate gift arrangement"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay — intensifies on scroll */}
      <motion.div
        className="absolute inset-0 bg-neutral-950 will-change-[opacity]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40" />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

      {/* Content pinned to bottom */}
      <div className="relative w-full px-6 pb-16 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            {/* Label */}
            <BlurFade delay={0.2} inView>
              <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                RIS Services DMCC — Dubai
              </span>
            </BlurFade>

            {/* Headline — large, light weight */}
            <BlurFade delay={0.4} inView>
              <h1 className="mt-5 font-display text-5xl font-normal leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                Corporate gifts
                <br />
                that resonate
              </h1>
            </BlurFade>

            {/* Subheadline */}
            <BlurFade delay={0.6} inView>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-neutral-400">
                We curate premium gifting experiences for the region&apos;s most
                discerning businesses. Every detail intentional.
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.8} inView>
              <div className="mt-10 flex items-center gap-3">
                <Button
                  asChild
                  className="rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-2.5 text-sm font-light text-white transition-all duration-300 hover:bg-neutral-700"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Start your order
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="rounded-lg px-6 py-2.5 text-sm font-light text-neutral-500 transition-colors duration-300 hover:bg-white/5 hover:text-white"
                >
                  <a href="#categories">Explore collections</a>
                </Button>
              </div>
            </BlurFade>
          </div>

          {/* Stats row — right-aligned on desktop */}
          <BlurFade delay={1.0} inView>
            <div className="mt-16 flex gap-12 border-t border-neutral-800/50 pt-6 lg:ml-auto lg:mt-0 lg:w-auto lg:justify-end lg:border-t-0 lg:pt-0">
              {[
                { value: "500+", label: "Clients" },
                { value: "50K+", label: "Delivered" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl text-white">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>

      {/* BorderBeam around entire hero viewport */}
      <BorderBeam
        size={400}
        duration={6}
        colorFrom="#404040"
        colorTo="#171717"
        borderWidth={1}
      />
    </section>
  );
}
