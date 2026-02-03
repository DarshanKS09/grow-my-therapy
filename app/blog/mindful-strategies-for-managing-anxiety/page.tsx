import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";

export const metadata = { title: "Mindful Strategies for Managing Anxiety" };

export default function Post() {
  return (
    <main className="bg-white">
      <article className="max-w-[900px] mx-auto px-4 py-20">
        <h1 className="text-4xl font-semibold text-[#2f3e1f]">Mindful Strategies for Managing Anxiety</h1>
        <p className="text-sm text-[#4b5a3a] mt-2">Feb 1, 2026 • By Dr. Maya Reynolds</p>

        <div className="mt-8">
          <Image src="/images/blog2.png" alt="Mindfulness" width={900} height={500} className="rounded-md object-cover" />
        </div>

        <div className="prose prose-lg mt-8 text-[#2f3e1f]">
          <p>
            Anxiety is a common, adaptive response that becomes problematic when it interferes with daily functioning. In my practice, I focus on practical, skills-based strategies that help clients regain a sense of safety and control.
          </p>

          <h3>1. Grounding & Awareness</h3>
          <p>
            Simple grounding practices — 5-4-3-2-1 sensory checks, mindful breathing, or a brief body scan — reduce physiological arousal and reorient attention. Repeated practice builds tolerance for uncomfortable sensations.
          </p>

          <h3>2. Cognitive Strategies</h3>
          <p>
            Learning to gently challenge catastrophic predictions and test assumptions helps reduce the frequency and intensity of anxious thoughts. I teach clients to run brief, real-world experiments to gather disconfirming evidence.
          </p>

          <h3>3. Behavioral Activation & Scheduling</h3>
          <p>
            Anxiety often creates avoidance cycles. Short, achievable exposures and scheduling meaningful activities restore confidence and momentum.
          </p>

          <h3>4. Self-Compassion and Safety Planning</h3>
          <p>
            Building a compassionate inner voice and having a simple safety plan for moments of overwhelming anxiety reduces shame and supports recovery.
          </p>

          <p>
            If anxiety feels overwhelming, consider seeking a professional evaluation. A tailored plan that combines practical skills, emotional support, and sometimes medication consultation can be highly effective.
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
