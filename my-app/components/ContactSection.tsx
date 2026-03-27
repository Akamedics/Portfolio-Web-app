"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#f3f0f7]">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-[var(--font-heading)] text-purple-700 mb-16">
          Register and enquiry
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            {/* Badge */}
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-6">
              👉 Start Your Journey
            </div>

            {/* Title */}
            <h3 className="text-3xl font-[var(--font-heading)] mb-4">
              Sign up To our platform
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Experience our expert-led teaching approach. Our team will be in touch shortly to discuss your exam goals and the most suitable learning pathway.
            </p>

            {/* Features */}
            <ul className="space-y-3 text-gray-700">
              <li>✅ Expert-led interactive sessions</li>
              <li>✅ Structured exam preparation</li>
              <li>✅ Proven track record of success</li>
            </ul>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm mb-1 font-medium">
                Name *
              </label>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First"
                  className="border rounded-md px-3 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Last"
                  className="border rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm mb-1 font-medium">
                Email *
              </label>
              <input
                type="email"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-sm mb-1 font-medium">
                Comment or Message
              </label>
              <textarea
                rows={4}
                placeholder="What brings you to akamedics..."
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-900 transition"
            >
              SUBMIT
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}