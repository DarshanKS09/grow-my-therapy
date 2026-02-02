"use client";

import { useState, useEffect } from "react";

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
      <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-[#2f3e1f]">
          Lilac Template
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#2f3e1f]">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Contact</a>
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
        className={`fixed inset-0 bg-[#fbf7ef] z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay Header */}
        <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo (LEFT) */}
          <div className="text-xl font-semibold text-[#2f3e1f]">
            Lilac Template
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
          className={`h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-10
          text-2xl font-medium text-[#2f3e1f]
          transition-transform duration-300 ${
            open ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#" onClick={() => setOpen(false)}>Blog</a>
          <a href="#" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  );
}