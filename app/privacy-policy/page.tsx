import Footer from "../components/Footer";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">
      <section className="max-w-[900px] mx-auto px-4 py-20 text-[#2f3e1f]">
        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>

        <p className="text-lg text-[#4b5a3a] mb-6">
          Dr. Maya Reynolds is committed to protecting your privacy. This policy
          explains what information we collect, how we use it, and how we protect it.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <ul className="list-disc ml-6 text-[#4b5a3a] mt-3">
          <li>Contact information you provide when requesting appointments or contacting us (name, email, phone).</li>
          <li>Scheduling preferences and appointment details necessary to deliver services.</li>
          <li>Non-identifying technical data collected by analytics and cookies when you visit the website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
        <p className="text-[#4b5a3a] mt-3">
          We use contact information to respond to inquiries, schedule appointments, and provide client services. We do not sell personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">HIPAA & Sensitive Health Information</h2>
        <p className="text-[#4b5a3a] mt-3">
          This website does not collect protected health information via forms. If you share health details by email or a third-party scheduling tool, be mindful of security—use HIPAA-compliant channels for sensitive data. For clinical communication and recordkeeping, secure, compliant systems are used when appropriate.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cookies & Third-Party Services</h2>
        <p className="text-[#4b5a3a] mt-3">
          We may use cookies and third-party services (e.g., analytics, maps, scheduling providers). These services have their own privacy policies; please review them for details about their data practices.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Security</h2>
        <p className="text-[#4b5a3a] mt-3">
          We implement reasonable administrative and technical safeguards to protect information. No method of transmission over the internet can be guaranteed as 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Your Choices</h2>
        <p className="text-[#4b5a3a] mt-3">
          You may opt out of marketing communications and request correction or deletion of personal data where applicable. Contact us at <a href="mailto:maya@example.com" className="underline">maya@example.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Changes to This Policy</h2>
        <p className="text-[#4b5a3a] mt-3">
          We may update this policy occasionally. Significant changes will be posted here with the updated date.
        </p>
      </section>

      <Footer />
    </main>
  );
}
