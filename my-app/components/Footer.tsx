"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2b0a4b] text-white">
      <div className="container mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/logo.png" // 👈 replace with your logo file in /public
              alt="Akamedics Logo"
              width={120}
              height={120}
            />
            <p className="mt-4 text-sm text-gray-300">
              Prepare Smarter. Perform Better
            </p>

            
          </div> 

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">
              About Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about">About</Link></li>
              <li><Link href="#">Faculty</Link></li>
              <li><Link href="#">Upcoming Events</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Articles</Link></li>
              <li><Link href="#">Subscribe</Link></li>
              <li><Link href="#">Feedback</Link></li>
              <li><Link href="#">Terms of Use</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">
              Courses
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#">Premium EDAIC 1 Course</Link></li>
              <li><Link href="#">EDAIC 2 Comprehensive</Link></li>
              <li><Link href="#">FCAI Part 1 Course</Link></li>
              <li><Link href="#">FCAI Part 2 Viva</Link></li>
              <li><Link href="#">Anaesthesia Lectures</Link></li>
              <li><Link href="#">All Courses</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">
              Contact details
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <p><Phone size={18} /> +44 7796 110662</p>
              <p><Phone size={18} /> +91 8865 977628</p>
              <p><Mail size={18} /> enquiries@akamedics.com</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} Akamedics
        </div>

      </div>
    </footer>
  );
}