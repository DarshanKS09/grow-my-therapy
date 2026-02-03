import Image from "next/image";
export default function Services() {
  return (
    <section id="services" className="bg-[#fbf7ef] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2f3e1f] mb-10 sm:mb-12">
          My Specialties
        </h2>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Card 1 */}
          <div className="border border-[#2f3e1f] bg-[#e9e5dc] p-6 sm:p-8 lg:p-10 flex flex-col">
            <h3 className="text-xl font-semibold text-[#2f3e1f] mb-4">
              Anxiety & Self-Esteem
            </h3>

            <p className="text-[#4b5a3a] text-base leading-relaxed mb-10">
              Support for adults who feel overwhelmed by constant worry,
              self-doubt, or pressure to hold everything together.
            </p>

            <div className="mt-auto flex justify-center">
              <Image
                src="/images/service1.png"
                alt="Anxiety and self-esteem therapy"
                width={320}
                height={320}
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#2f3e1f] bg-[#e9e5dc] p-6 sm:p-8 lg:p-10 flex flex-col">
            <h3 className="text-xl font-semibold text-[#2f3e1f] mb-4">
              Relationships & Attachment
            </h3>

            <p className="text-[#4b5a3a] text-base leading-relaxed mb-10">
              Therapy for navigating relationship patterns, emotional
              disconnection, boundaries, and recurring interpersonal stress.
            </p>

           <div className="mt-auto flex justify-center">
              <Image
                src="/images/service2.png"
                alt="Relationships and attachment therapy"
                width={320}
                height={320}
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-[#2f3e1f] bg-[#e9e5dc] p-6 sm:p-8 lg:p-10 flex flex-col">
            <h3 className="text-xl font-semibold text-[#2f3e1f] mb-4">
              Burnout & High-Achieving Professionals
            </h3>

            <p className="text-[#4b5a3a] text-base leading-relaxed mb-10">
              Support for professionals experiencing exhaustion,
              perfectionism, or a sense of losing themselves in work.
            </p>

           <div className="mt-auto flex justify-center">
              <Image
                src="/images/service3.png"
                alt="Burnout support for professionals"
                width={320}
                height={320}
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
