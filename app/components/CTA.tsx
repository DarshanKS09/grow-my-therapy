import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="bg-[#2f3e1f] py-28">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Ready to start your therapy journey?
        </h2>

        <p className="text-lg text-[#e6e1d6] max-w-xl mx-auto mb-10">
          Take the first step toward feeling more grounded, supported,
          and confident in your life.
        </p>

        <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-4 bg-white text-[#2f3e1f] rounded-md font-medium hover:opacity-90 transition">
          Get started →
        </Link>

      </div>
    </section>
  );
}