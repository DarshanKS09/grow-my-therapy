"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // This is a demo — replace with real API call as needed
    setTimeout(() => setStatus("success"), 800);
  }

  return (
    <section className="bg-[#7a7a46] py-20">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="border border-white/30 rounded-md p-12 text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">Subscribe</h2>
          <p className="text-[#e6e1d6] max-w-xl mx-auto mb-8">
            Sign up with your email address to receive news and updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              className="w-full sm:flex-1 px-4 py-3 rounded-md border border-white/20 bg-white/90 text-black"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="px-6 py-3 border border-white/30 text-white rounded-md bg-transparent hover:opacity-90 transition"
            >
              {status === "loading" ? "Signing..." : "SIGN UP"}
            </button>
          </form>

          <p className="text-sm text-[#e6e1d6] mt-6">We respect your privacy.</p>

          {status === "success" && <p className="mt-4 text-sm text-white">Thanks — check your inbox for a confirmation.</p>}
          {status === "error" && <p className="mt-4 text-sm text-red-300">Please enter a valid email address.</p>}
        </div>
      </div>
    </section>
  );
}
