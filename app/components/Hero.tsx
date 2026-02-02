export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-start pt-12">
          
          {/* Image column */}
          <div className="w-full">
            <div className="aspect-[4/5] bg-gray-200 rounded-[32px]" />
          </div>

          {/* Text column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Therapy that helps you grow
            </h1>

            <p className="text-lg text-gray-600">
              Personalized plans and compassionate care to support your mental health journey.
            </p>

            <button className="inline-flex items-center px-8 py-3 bg-black text-white rounded-md">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}