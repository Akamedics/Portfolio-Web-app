"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] mb-10">
          See How Akamedics Helps You Succeed
        </h2>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl"
        >
          
          {!play ? (
            <>
              {/* Thumbnail */}
              <div
                className="relative cursor-pointer group"
                onClick={() => setPlay(true)}
              >
                <Image
                  src="/home/yt-video.png"
                  alt="Video Thumbnail"
                  width={400}
                height={200}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition">
                    <Play className="text-black" size={28} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-[500px]"
              src="https://www.youtube.com/watch?v=ZEv6mQ4wnOk&t=3s"
              title="Akamedics Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </motion.div>

      </div>
    </section>
  );
}