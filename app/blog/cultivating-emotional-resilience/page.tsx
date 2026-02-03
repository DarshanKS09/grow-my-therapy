import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";

export const metadata = { title: "Cultivating Emotional Resilience" };

export default function Post() {
  return (
    <main className="bg-white">
      <article className="max-w-[900px] mx-auto px-4 py-20">
        <h1 className="text-4xl font-semibold text-[#2f3e1f]">Cultivating Emotional Resilience</h1>
        <p className="text-sm text-[#4b5a3a] mt-2">Nov 2, 2025 • By Dr. Maya Reynolds</p>

        <div className="mt-8">
          <Image src="/images/intro.jpg" alt="Resilience" width={900} height={500} className="rounded-md object-cover" />
        </div>

        <div className="prose prose-lg mt-8 text-[#2f3e1f]">
          <p>
            Emotional resilience is less about avoiding difficulty and more about developing flexible responses when life is hard. Clinical work supports learning specific skills that bolster tolerance and adaptive coping.
          </p>

          <h3>Build Foundational Skills</h3>
          <p>
            Practicing attention regulation (through mindfulness), building supportive routines, and maintaining social connection are core to resilience.
          </p>

          <h3>Use Values to Guide Action</h3>
          <p>
            Clarifying what matters to you creates sustainable motivation and helps align small daily actions with broader goals—especially during setbacks.
          </p>

          <h3>Practice Adaptive Coping</h3>
          <p>
            A flexible coping toolbox—behavioral activation, grounding, cognitive reframing, and somatic regulation—lets you choose what works in the moment.
          </p>

          <p>
            If you want support building resilience, a skilled therapist can help you create a personalized plan and practice skills in a safe setting.
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
