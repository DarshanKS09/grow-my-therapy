import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <section id="support" className="bg-white py-28">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-20 items-center">

          {/* Image */}
          <div className="w-full">
            <Image
              src="/images/support.jpg"
              alt="Calm, supportive therapy environment"
              width={500}
              height={650}
              className="rounded-[32px] object-cover w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-[#2f3e1f] max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Support that meets you where you are
            </h2>

            <p className="text-lg text-[#4b5a3a]">
              Many of the clients I work with are thoughtful, capable, and
              high-achieving—yet internally feel anxious, exhausted, or
              constantly on edge.
            </p>

            <p className="text-lg text-[#4b5a3a]">
              Therapy is a space to slow things down. Together, we focus on
              understanding what’s happening beneath the surface, building
              emotional regulation, and creating meaningful, lasting change.
            </p>

            <p className="text-lg text-[#4b5a3a]">
              My approach is warm, collaborative, and grounded in
              evidence-based practices, including trauma-informed and
              body-oriented techniques.
            </p>

            <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 border border-[#2f3e1f] text-[#2f3e1f] rounded-md hover:bg-[#2f3e1f] hover:text-white transition">
              Learn more about my approach →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}