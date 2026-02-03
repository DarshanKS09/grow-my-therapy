import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const posts = [
  {
    title: "Mindful Strategies for Managing Anxiety",
    slug: "mindful-strategies-for-managing-anxiety",
    date: "2026-02-01",
    image: "/images/intro1.png",
    excerpt:
      "Practical, evidence-based techniques to help reduce worry and build lasting grounding practices."
  },
  {
    title: "Navigating Burnout: Practical Steps to Recovery",
    slug: "navigating-burnout-practical-steps",
    date: "2026-01-20",
    image: "/images/blog2.png",
    excerpt:
      "Recognize early warning signs, reset boundaries, and restore sustainable energy with focused interventions."
  },
  {
    title: "Trauma-Informed Care: What to Expect",
    slug: "trauma-informed-care-what-to-expect",
    date: "2025-12-10",
    image: "/images/blog3.png",
    excerpt:
      "Understanding trauma-informed therapy: safety, pacing, and collaboration in treatment."
  },
  {
    title: "Cultivating Emotional Resilience",
    slug: "cultivating-emotional-resilience",
    date: "2025-11-02",
    image: "/images/blog4.png",
    excerpt:
      "Skills to strengthen tolerance of distress, adaptive coping, and mindful self-regulation."
  }
];

export const metadata = { title: "Blog" };

export default function BlogIndex() {
  return (
    <main className="bg-[#fbf7ef]">
      <section className="max-w-[1400px] mx-auto px-4 py-20 grid md:grid-cols-[0.9fr_1fr] gap-12 items-center">
        <div className="rounded-[160px_160px_0_0] overflow-hidden w-full max-w-md mx-auto md:mx-0">
          <Image src="/images/intro1.png" alt="Reading" width={700} height={700} className="object-cover w-full h-full" />
        </div>

        <div className="text-[#2f3e1f]">
          <h1 className="text-4xl md:text-5xl font-semibold">Maya's Blog</h1>
          <p className="text-lg text-[#4b5a3a] mt-4 max-w-xl">
            My professional writing about mental health, coping strategies, and practical approaches to support lasting well-being.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white rounded-md overflow-hidden border border-[#e6e1d6]">
              <Link href={`/blog/${p.slug}`}>
                <Image src={p.image} alt={p.title} width={1200} height={600} className="w-full h-56 object-cover" />
              </Link>

              <div className="p-6">
                <time className="text-sm text-[#4b5a3a]">{p.date}</time>
                <h3 className="text-2xl font-semibold mt-2 text-[#2f3e1f]">{p.title}</h3>
                <p className="text-sm text-[#4b5a3a] mt-3">{p.excerpt}</p>
                <div className="mt-4">
                  <Link href={`/blog/${p.slug}`} className="text-[#4b5a3a] text-sm hover:border-2 font-semibold border-1 p-2">Read More</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Subscribe />
      <Footer />
    </main>
  );
}
