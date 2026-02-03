import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";

export const metadata = { title: "Trauma-Informed Care: What to Expect" };

export default function Post() {
  return (
    <main className="bg-white">
      <article className="max-w-[900px] mx-auto px-4 py-20">
        <h1 className="text-4xl font-semibold text-[#2f3e1f]">Trauma-Informed Care: What to Expect</h1>
        <p className="text-sm text-[#4b5a3a] mt-2">Dec 10, 2025 • By Dr. Maya Reynolds</p>

        <div className="mt-8">
          <Image src="/images/about.jpg" alt="Trauma" width={900} height={500} className="rounded-md object-cover" />
        </div>

        <div className="prose prose-lg mt-8 text-[#2f3e1f]">
          <p>
            Trauma-informed care centers safety, choice, and collaboration. It acknowledges the pervasive impact of trauma while working at a pace that prioritizes emotional and physical safety.
          </p>

          <h3>Key Principles</h3>
          <p>
            Safety, trustworthiness, peer support, collaboration, and empowerment guide therapy. We work to create predictable sessions, transparent goals, and pacing that respects your nervous system.
          </p>

          <h3>What Therapy Looks Like</h3>
          <p>
            Initial work emphasizes stabilization: grounding skills, emotion regulation, and building a joint plan. Over time, evidence-based techniques such as EMDR or somatic approaches may be integrated, if appropriate.
          </p>

          <p>
            If you are considering trauma-focused work, a careful assessment and collaborative treatment plan are essential. Safety and consent remain central throughout the process.
          </p>

          <p>
            <Link href="/blog" className="inline-block mt-4 px-4 py-2 bg-[#2f3e1f] text-white rounded-md">Return to blog</Link>
          </p>
        </div>
      </article>

      <Subscribe />
      <Footer />
    </main>
  );
}
