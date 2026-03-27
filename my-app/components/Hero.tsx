"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-4xl px-6 py-28">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur"
        >
          🌐 Global Excellence in Anaesthesia Exam Preparation
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl leading-tight font-[var(--font-heading)]"
        >
          Master{" "}
          <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
            Anaesthesiology
          </span>{" "}
          <br />
          & Intensive Care
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-base md:text-lg text-gray-200"
        >
          Expert-led courses and mentorship for EDAIC, EDRA, FCAI, FRCA and specialist
          qualifications. Prepare with confidence for practice across Europe and beyond.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/courses"
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Explore Courses →
          </Link>

          <Link
            href="/about"
            className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition"
          >
            Watch Video
          </Link>
        </motion.div>

      </div>
    </section>
  );
}