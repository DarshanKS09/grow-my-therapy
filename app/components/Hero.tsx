export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-24" role="region" aria-label="Hero">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Left: tall arched image container */}
          <div className="order-1">
            <div className="h-72 md:h-[520px] w-full rounded-t-[3rem] bg-gray-200 overflow-hidden shadow-md relative">
              {/* Image placeholder (replace with actual <img /> or background-image later) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300" />
              {/* subtle rounded base to emphasize the arch */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-3/4 h-24 bg-gray-100 rounded-full opacity-90" />
            </div>
          </div>

          {/* Right: vertically centered text */}
          <div className="flex flex-col justify-center order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Therapy that helps you grow
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Personalized plans and compassionate care to support your mental health journey.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block bg-gray-900 text-white px-6 py-3 rounded-md shadow hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
