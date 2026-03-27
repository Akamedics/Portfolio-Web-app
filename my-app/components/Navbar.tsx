"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#2b0a4b] text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
  href="/"
  className="text-3xl font-medium tracking-wide"
>
          AKAMEDICS
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link href="/" className="hover:text-purple-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-300 transition">
            About
          </Link>
          <Link href="/courses" className="hover:text-purple-300 transition">
            Courses
          </Link>
          <Link href="/updates" className="hover:text-purple-300 transition">
            Updates
          </Link>
          <Link href="/contact" className="hover:text-purple-300 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/register"
          className="ml-6 rounded-md px-7 py-2 text-lg font-medium bg-[#d14df6] hover:opacity-90 transition"
        >
          REGISTER
        </Link>

      </div>
    </header>
  );
}