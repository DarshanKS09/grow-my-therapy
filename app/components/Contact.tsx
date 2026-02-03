import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function Contact() {
  return (
    <main className="bg-[#e9e5dc]">

      {/* ───────────── LET'S CONNECT ───────────── */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-[1.2fr_1fr] gap-20 items-start">

          {/* Left content */}
          <div className="text-[#2f3e1f] space-y-6">
            <h1 className="text-5xl md:text-6xl font-semibold">
              Let’s Connect
            </h1>

            <p className="text-lg text-[#4b5a3a] max-w-lg">
              Starting therapy is a meaningful step. If you have questions or
              would like to schedule a complimentary 15-minute consultation,
              you’re welcome to reach out.
            </p>

            {/* Decorative Images */}
            <div className="relative mt-16 w-[280px]">
              <Image
                src="/images/intro1.png"
                alt="Calm floral still life"
                width={280}
                height={360}
                className="rounded-[32px] object-cover"
              />
            </div>
          </div>

          {/* Right note box */}
          <div className="bg-[#2f3e1f] text-[#fbf7ef] p-6 mt-50 rounded-md max-w-md">
            <p className="text-sm leading-relaxed">
              <strong>Please note:</strong>  
              To protect your privacy, any contact or scheduling tools should be
              HIPAA-compliant.
              <br /><br />
              If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address
            </p>
          </div>

        </div>
      </section>

      {/* ───────────── BOOK APPOINTMENT ───────────── */}
      <section className="bg-[#fbf7ef] py-32 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#2f3e1f]">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/Dr. Maya Reynolds.png"
              alt="Maya Reynolds"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />

            <h2 className="text-4xl md:text-5xl font-semibold">
              Book an appointment.
            </h2>

            <p className="text-lg text-[#4b5a3a]">
              Sessions are available by appointment. Scheduling is handled through
              a secure, HIPAA-compliant platform or client portal.
            </p>

            <div className="mt-6 mx-auto bg-white border border-[#e6e1d6] rounded-md p-10 max-w-md">
              <p className="text-sm text-[#4b5a3a]">
                Click here to book your appointment.
              </p>

              <div className="mt-6">
                <Link href="/booking" className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-[#2f3e1f] text-white rounded-md font-medium hover:opacity-90 transition">
                  Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── OFFICE INFO ───────────── */}
      <section className="bg-[#7a7a46] py-32">
        <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-2 gap-20 items-center text-[#fbf7ef]">

          {/* Address */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Office Location</h3>
            <p className="text-lg">
             123th Street 45 W, Santa Monica<br />
              (In-person & virtual sessions available)
            </p>

            <h4 className="text-2xl font-semibold pt-6">Hours</h4>
            <p className="text-lg">
              Monday – Friday<br />
              10:00 AM – 6:00 PM
            </p>
          </div>

          {/* Map */}
          <div className="w-full h-[360px] bg-[#e6e1d6] rounded-md overflow-hidden">
            <iframe
              title="Santa Monica office Location"
              src="https://www.google.com/maps?q=45+W+12th+St+Santa+Monica+CA&output=embed"
              className="w-full h-full border-0 grayscale"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* ───────────── OFFICE GALLERY ───────────── */}
      <section className="bg-[#fbf7ef] py-32">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2f3e1f] mb-6">
            Inside the office
          </h2>

          <p className="text-lg text-[#4b5a3a] max-w-2xl mb-12">
            A calm, welcoming space designed to help you feel comfortable and supported.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/office1.jpeg"
                alt="Office view 1"
                width={800}
                height={600}
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/office2.jpeg"
                alt="Office view 2"
                width={800}
                height={600}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}