"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="bg-[#fbf7ef] relative z-50">
      {/* Top Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-[#2f3e1f]">
          Dr. Maya Reynolds
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base text-[#2f3e1f]">
          <a href="./" className="hover:underline">Home</a>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Mobile Menu Button (RIGHT) */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-[#2f3e1f]"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#fbf7ef] z-50 transition-opacity duration-300 overflow-y-auto ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay Header */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo (LEFT) */}
          <div className="text-xl font-semibold text-[#2f3e1f]">
            Dr. Maya Reynolds
          </div>

          {/* Close Button (RIGHT – same position as ☰) */}
          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-[#2f3e1f]"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Centered Menu Items */}
        <div
          className={`min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 sm:gap-10
          text-xl sm:text-2xl font-medium text-[#2f3e1f]
          transition-transform duration-300 ${
            open ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </header>
  );
}
