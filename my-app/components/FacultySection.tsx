"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const faculty = [
  {
    name: "Dr. Danish Siddiqui",
    role: "Director",
    image: "/home/faculty-1.png",
  },
  {
    name: "Dr. Amrita Rath",
    role: "Course Instructor",
    image: "/home/faculty-2.png",
  },
  {
    name: "Dr. Dikshitha Chetty",
    role: "Course Instructor",
    image: "/home/faculty-3.png",
  },
];

export default function FacultySection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] text-purple-700 mb-12">
          Meet Our Faculty
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {faculty.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-300/40 transition">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={280}
                  height={280}
                  className="object-cover w-[280px] h-[280px] hover:scale-105 transition"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-purple-700">
                {person.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-600">{person.role}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            href="/faculty"
            className="inline-block bg-[#d14df6]  text-white px-8 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition"
          >
            FIND OUT MORE
          </Link>
        </div>

      </div>
    </section>
  );
}