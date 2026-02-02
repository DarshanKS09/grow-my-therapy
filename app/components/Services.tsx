export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Section header */}
        <div className="max-w-xl mb-20 text-[#2f3e1f]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Therapy services
          </h2>
          <p className="text-lg text-[#4b5a3a]">
            Support tailored to your needs, wherever you are in your journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="border border-[#e6e1d6] rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-[#2f3e1f]">
              Individual Therapy
            </h3>
            <p className="text-[#4b5a3a]">
              One-on-one sessions focused on your personal goals, growth,
              and emotional wellbeing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#e6e1d6] rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-[#2f3e1f]">
              Anxiety & Stress
            </h3>
            <p className="text-[#4b5a3a]">
              Learn tools to manage anxiety, reduce overwhelm, and feel
              more grounded in daily life.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-[#e6e1d6] rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-[#2f3e1f]">
              Life Transitions
            </h3>
            <p className="text-[#4b5a3a]">
              Navigate change with clarity — relationships, career shifts,
              or personal identity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}