"use client";

import { useState } from "react";

const items = [
  {
    title: "Education",
    content:
      "Doctor of Psychology (PsyD) in Clinical Psychology. Advanced graduate training with a strong focus on evidence-based treatment for anxiety, trauma, and mood disorders."
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist in the state of California. Authorized to provide in-person therapy in Santa Monica and secure telehealth services across California."
  },
  {
    title: "Certifications & Training",
    content:
      "Specialized training in Cognitive Behavioral Therapy (CBT), EMDR for trauma, mindfulness-based interventions, and body-oriented approaches for nervous system regulation."
  }
];

export default function Background() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="background" className="mt-10 bg-[#e9e5dc] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-[#2f3e1f]">

        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-14">
          My Professional Background
        </h2>

        {/* Accordion */}
        <div className="divide-y divide-[#2f3e1f]/30">
          {items.map((item, index) => (
            <div key={index} className="py-6">
              <button
                className="w-full flex items-center justify-between text-left text-xl font-medium"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {item.title}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-4 text-lg text-[#4b5a3a] leading-relaxed max-w-3xl">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
