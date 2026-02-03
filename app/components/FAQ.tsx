"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Is therapy right for me?",
    a: "Therapy can be helpful if you’re feeling overwhelmed, anxious, burned out, or stuck in patterns that no longer serve you. You don’t need to be in crisis to benefit — many clients come to better understand themselves and create meaningful change."
  },
  {
    q: "What is the first session like?",
    a: "The first session is a gentle, collaborative conversation. We’ll talk about what’s bringing you to therapy, your goals, and what you’re hoping for — at a pace that feels comfortable and supportive."
  },
  {
    q: "Who do you typically work with?",
    a: "Maya primarily works with adults navigating anxiety, burnout, life transitions, emotional overwhelm, and high-pressure professional or personal roles."
  },
  {
    q: "Do you offer virtual therapy sessions?",
    a: "Yes. Secure telehealth sessions are available and can be just as effective as in-person therapy, offering flexibility and comfort wherever you’re located."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#e9e5dc] py-18">
      <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-[1fr_1.1fr] gap-20">
        
        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/faq.jpg"
            alt="Calm therapy space"
            width={500}
            height={650}
            className="rounded-[32px] object-cover w-full h-auto"
            priority
          />
        </div>

        {/* FAQ */}
        <div className="text-[#2f3e1f]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-[#e6e1d6]">
            {faqs.map((item, index) => (
              <div key={index} className="py-6">
                <button
                  className="w-full flex items-center justify-between text-left text-lg font-medium"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {item.q}
                  <span className="text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-[#4b5a3a]">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}