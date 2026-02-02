export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image column */}
          <div className="w-full">
            <div className="aspect-[4/5] bg-gray-200 rounded-[32px]" />
          </div>

          {/* Text column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Therapy that helps you grow
            </h1>

            <p className="text-lg text-gray-600">
              Personalized plans and compassionate care to support your mental health journey.
            </p>

            <button className="px-6 py-3 bg-black text-white rounded-md">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}