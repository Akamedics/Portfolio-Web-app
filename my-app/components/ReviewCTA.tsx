"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ReviewCTA() {
  return (
    <section className="py-20 bg-[#ffeecb] text-center">
      <div className="container mx-auto px-6">
        
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-500 fill-yellow-500" />
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-[var(--font-heading)] mb-6"
        >
          Share your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Success Story
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Expert-led courses and mentorship for EDAIC, EDRA, FCAI, FRCA and specialist qualifications. 
          Prepare with confidence for practice across Europe and beyond.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
          >
            Leave a Google Review
          </Link>
        </motion.div>

      </div>
    </section>
  );
}