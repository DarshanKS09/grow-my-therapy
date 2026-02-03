import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section id="hero" className="bg-[#fbf7ef] min-h-[calc(100dvh-64px)] sm:min-h-[calc(100dvh-80px)] lg:min-h-[70vh] flex items-start py-20 sm:py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-15">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 lg:gap-16 items-center">

          {/* Image column */}
          <div className="w-full flex justify-start">
            <Image
              src="/images/hero.jpg"
              alt="Calm therapy office in Santa Monica"
              width={700}
              height={875}
              className="w-full max-w-[520px] lg:max-w-[560px] object-cover rounded-[32px]"
            />
          </div>

          {/* Text column */}
          <div className="space-y-6 sm:space-y-8 max-w-xl">

            {/* Big emotional headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2f3e1f] leading-tight">
              A space to slow down,
              <br />
              breathe, and feel supported
            </h1>

            {/* Smaller job title / location */}
            <p className="text-base sm:text-lg text-[#4b5a3a]">
              Anxiety & Trauma Therapy for Adults in Santa Monica, California
            </p>

            {/* CTA */}
              <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 border border-[#2f3e1f] text-[#2f3e1f] rounded-md hover:bg-[#2f3e1f] hover:text-white transition">
            Connect with me
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
