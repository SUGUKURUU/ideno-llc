"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Ultra-thin gold reading-progress bar pinned to the very top of the viewport.
 * A subtle premium cue on long landing pages. Sits above the header (z-[60]).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[rgba(196,163,90,0.3)] via-[#C4A35A] to-[rgba(196,163,90,0.5)]"
    />
  );
}
