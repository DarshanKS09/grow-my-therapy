export default function Intro() {
  return (
    <section className="bg-[#fbf7ef] py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-20 items-center">
          
          {/* Image */}
          <div className="w-full">
            <div className="aspect-[4/5] bg-gray-200 rounded-[32px]" />
          </div>

          {/* Text */}
          <div className="space-y-6 text-[#2f3e1f]">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Live a fulfilling life.
            </h2>

            <p className="text-lg text-[#4b5a3a]">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-lg text-[#4b5a3a]">
              You don’t have to do it alone. Therapy can help you reconnect,
              reset, and move forward with clarity.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#2f3e1f] text-[#2f3e1f] rounded-md hover:bg-[#2f3e1f] hover:text-white transition">
              Get in touch →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}