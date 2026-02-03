import Footer from "../components/Footer";

export const metadata = { title: "Terms of Service" };

export default function TermsOfService() {
  return (
    <main className="bg-white">
      <section className="max-w-[900px] mx-auto px-4 py-20 text-[#2f3e1f]">
        <h1 className="text-4xl font-semibold mb-6">Terms of Service</h1>

        <p className="text-lg text-[#4b5a3a] mb-6">
          These Terms govern your use of this website and any services provided through it. By using this site or requesting services you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Services</h2>
        <p className="text-[#4b5a3a] mt-3">
          Dr. Maya Reynolds provides psychotherapy and consultation services. Information on this website is for educational purposes and is not a substitute for professional advice tailored to your situation.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Appointments & Booking</h2>
        <p className="text-[#4b5a3a] mt-3">
          Appointments are scheduled through the booking channels indicated on this site. Bookings may be confirmed by email. For HIPAA-compliant bookings, a secure scheduling system or client portal may be used.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cancellations & No-Shows</h2>
        <p className="text-[#4b5a3a] mt-3">
          Please provide at least 24 hours' notice for cancellations. Late cancellations or no-shows may be subject to a fee consistent with the clinician's policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Payment</h2>
        <p className="text-[#4b5a3a] mt-3">
          Payment terms, accepted forms of payment, insurance, and refund policies will be provided during intake or by the clinician. Any fees are the responsibility of the client unless otherwise agreed.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Disclaimer & Limitation of Liability</h2>
        <p className="text-[#4b5a3a] mt-3">
          The information on this site is provided "as is" and is not a substitute for individualized care. To the fullest extent permitted by law, Dr. Maya Reynolds disclaims all liability for damages arising out of use of this website.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Governing Law</h2>
        <p className="text-[#4b5a3a] mt-3">These Terms are governed by the laws of California, U.S.A.</p>

        <h2 className="text-2xl font-semibold mt-6">Contact</h2>
        <p className="text-[#4b5a3a] mt-3">
          Questions about these Terms can be directed to <a href="mailto:maya@example.com" className="underline">maya@example.com</a>.
        </p>
      </section>

      <Footer />
    </main>
  );
}
