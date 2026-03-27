"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/home/card1.png",
  "/home/card2.png",
  "/home/card3.png",
  "/home/card4.png",
];

export default function Stats() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt={`stat-${i}`}
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}