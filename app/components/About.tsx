import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-[#e9e5dc] pt-17 pb-20 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-15 lg:gap-20 items-center">

          {/* Profile Image */}
          <div className=" flex justify-center lg:justify-start">
            <Image
              src="/images/Dr. Maya Reynolds.png"
              alt="Maya Reynolds – Licensed Therapist"
              width={360}
              height={360}
              className="rounded-[24px] object-contain w-full max-w-[260px] sm:max-w-[320px] max-h-[40vh] sm:max-h-[50vh]"
              priority
            />
          </div>

          {/* Text */}
          <div className="text-[#2f3e1f] space-y-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Hi, I’m Maya Reynolds.
            </h2>

            <p className="text-lg text-[#4b5a3a] leading-relaxed">
              I provide a calm, supportive space where you can slow down and
              explore what’s really going on beneath the surface.
            </p>

            <p className="text-lg text-[#4b5a3a] leading-relaxed">
              With empathy and practical guidance, we’ll work together to help
              you navigate anxiety, burnout, and life transitions with clarity
              and confidence.
            </p>

            {/* CTA */}
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-3 border border-[#2f3e1f] text-[#2f3e1f] rounded-md hover:bg-[#2f3e1f] hover:text-white transition"
              >
                Let’s chat →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
