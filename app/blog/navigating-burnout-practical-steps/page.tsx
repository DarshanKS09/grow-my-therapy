import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";

export const metadata = { title: "Navigating Burnout: Practical Steps" };

export default function Post() {
  return (
    <main className="bg-white">
      <article className="max-w-[900px] mx-auto px-4 py-20">
        <h1 className="text-4xl font-semibold text-[#2f3e1f]">Navigating Burnout: Practical Steps to Recovery</h1>
        <p className="text-sm text-[#4b5a3a] mt-2">Jan 20, 2026 • By Dr. Maya Reynolds</p>

        <div className="mt-8">
          <Image src="/images/blog3.jpg" alt="Burnout" width={900} height={500} className="rounded-md object-cover" />
        </div>

        <div className="prose prose-lg mt-8 text-[#2f3e1f]">
          <p>
            Burnout is more than tiredness. It's a sustained response to chronic workplace stress and role overload that affects energy, motivation, and identity. Recovery involves practical boundary-setting and restoring physiological balance.
          </p>

          <h3>Recognize the Signs</h3>
          <p>
            Emotional exhaustion, cynicism, and reduced efficacy are common. A clear assessment helps distinguish burnout from depression and determine next steps.
          </p>

          <h3>Prioritize Rest and Regeneration</h3>
          <p>
            Sleep hygiene, small periods of restorative activity, and reducing decision fatigue (by simplifying routines) create a foundation for recovery.
          </p>

          <h3>Adjust Workload and Expectations</h3>
          <p>
            Where possible, negotiate duties, reprioritize tasks, and ask for practical support. Small, sustainable changes often yield significant relief.
          </p>

          <h3>Therapeutic Strategies</h3>
          <p>
            In therapy we address values-aligned action, emotion regulation, and realistic problem-solving. Gentle pacing and building self-compassion support long-term change.
          </p>

          <p>
            If burnout feels persistent or severe, seeking professional support is wise. A collaborative plan tailored to your circumstances can restore engagement and wellbeing.
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
