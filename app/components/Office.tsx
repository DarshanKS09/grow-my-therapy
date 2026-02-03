import Image from "next/image";
import Link from "next/link";

export default function Office() {
  return (
    <section id="office" className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Full-width heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f3e1f] mb-8">Our Office — A calm space for healing</h2>

        <div className="grid md:grid-cols-[1fr_420px] gap-8 items-start">

          {/* Left: text */}
          <div className="text-[#2f3e1f] space-y-4 px-2 sm:px-4 md:px-0 py-2 sm:py-4 md:py-0">
            <p className="text-lg text-[#4b5a3a] max-w-xl">
              Our Santa Monica office is a warm, private, and welcoming space designed to support safety and trust. The therapy room is intentionally comfortable and free from distractions so clients can focus on healing.
            </p>

            <ul className="text-[#4b5a3a] list-none mt-4 space-y-3">
              <li><strong className="text-[#2f3e1f]">Location:</strong> 45 W 12th St, Santa Monica, CA</li>
              <li><strong className="text-[#2f3e1f]">Sessions:</strong> In-person &amp; Telehealth (hybrid available)</li>
              <li><strong className="text-[#2f3e1f]">Privacy & Safety:</strong> Sessions are held in a private suite; for clinical communication we use secure, HIPAA-compliant tools when needed.</li>
            </ul>

            <div className="mt-6">
              <Link href="/contact" className="inline-flex w-full sm:w-auto items-center px-6 py-3 border border-[#2f3e1f] text-[#2f3e1f] rounded-md hover:bg-[#2f3e1f] hover:text-white transition">
                Learn how to visit
              </Link>
            </div>
          </div>

          {/* Right: stacked images (narrow column on desktop, stacked vertical on mobile) */}
          <div className="bg-[#e9e5dc] p-5 rounded-[2%] space-y-4">
            <div className="relative w-full max-w-full md:max-w-[420px] mx-auto md:mx-0 overflow-hidden rounded-md aspect-[4/3]">
              <Image
                src="/images/office1.jpeg"
                alt="Therapy office view"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 420px"
                className="object-cover rounded-[5%]"
              />
            </div>

            <div className="relative w-full max-w-full md:max-w-[420px] mx-auto md:mx-0 overflow-hidden rounded-md aspect-[4/3]">
              <Image
                src="/images/office2.jpeg"
                alt="Therapist office detail"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 420px"
                className="object-cover rounded-[5%]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
