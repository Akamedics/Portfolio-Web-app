"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    title: "EDAIC 2 Topic Based Vivas Cycle 2 (2026)",
    description:
      "A structured, high-yield viva preparation series designed to help you confidently master every major domain of the EDAIC Part 2 exam through weekly, topic-focused sessions.",
    tag: "New Cycle",
    features: ["Weekly Sessions", "All Major Domains"],
  },
  {
    title: "FCAI Part 2 Topic Based Course February (2026)",
    description:
      "A structured FCAI Part 2 viva preparation course focusing on examiner-style questioning, clear clinical reasoning, and confident performance under exam conditions.",
    tag: "New Cycle",
    features: ["Weekly Sessions", "All Major Domains"],
  },
  {
    title: "Premium EDAIC 1 Course",
    description:
      "An intensive programme designed to prepare candidates for EDAIC Part 1 through structured weekly MCQs, detailed explanations, and recorded sessions.",
    tag: "Premium",
    features: ["18–20 Weeks", "Weekly MCQs"],
  },
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-[#f3f0f7]">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-5xl  font-[var(--font-heading)] text-fuchsia-700 mb-12">
          Browse our courses
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-left shadow-md hover:shadow-xl transition"
            >
              
              {/* Tag */}
              <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                  🎓
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">
                  {course.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                {course.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                {course.features.map((f, idx) => (
                  <span key={idx}>📌 {f}</span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#"
                className="text-purple-600 font-medium text-sm hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12">
          <Link
            href="/courses"
            className="inline-block bg-[#d14df6] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition"
          >
            VIEW ALL COURSES
          </Link>
        </div>

      </div>
    </section>
  );
}