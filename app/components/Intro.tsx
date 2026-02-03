import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          
          {/* Text */}
          <div className="space-y-6 text-[#2f3e1f] max-w-xl mt-4 lg:mt-0 mb-6 lg:mb-0 px-2 sm:px-4 lg:px-0 py-2 sm:py-4 lg:py-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Live a fulfilling life.
            </h2>

            <p className="text-lg text-[#4b5a3a]">
              Life can be challenging - especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-lg text-[#4b5a3a]">
              You don’t have to do it alone. Therapy can help you reconnect,
              reset, and move forward with clarity.
            </p>

            <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 border border-[#2f3e1f] text-[#2f3e1f] rounded-md hover:bg-[#2f3e1f] hover:text-white transition">
              Get in touch →
            </Link>
          </div>

          {/* Image */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <Image
              src="/images/intro1.png"
              alt="Calm lifestyle flat lay with journal and coffee"
              width={500}
              height={650}
              className="rounded-[32px] object-cover w-full h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
