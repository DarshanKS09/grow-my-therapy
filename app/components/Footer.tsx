import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fbf7ef] border-t border-[#e6e1d6]">
      <div className="max-w-[1400px] mx-auto px-4 py-20 grid md:grid-cols-3 gap-12 text-[#2f3e1f]">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-xl font-semibold">
            Dr. Maya Reynolds, PsyD
          </div>
          <p className="text-sm text-[#4b5a3a] max-w-xs">
            Compassionate, evidence-based therapy for adults seeking clarity,
            balance, and sustainable emotional well-being.
          </p>

          <div className="mt-3">
            <a href="mailto:maya@example.com" className="block text-sm text-[#2f3e1f] hover:underline">maya@example.com</a>
            <div className="mt-3">
              <Link href="/booking" className="inline-flex w-full sm:w-auto justify-center items-center px-4 py-2 bg-[#2f3e1f] text-white rounded-md">Book an appointment</Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3 text-sm">
          <Link href="/" className="block hover:underline">Home</Link>
          <Link href="/#services" className="block hover:underline">Services</Link>
          <Link href="/#about" className="block hover:underline">About</Link>
          <Link href="/#faq" className="block hover:underline">FAQ</Link>
          <Link href="/contact" className="block hover:underline">Contact</Link>
        </div>

        {/* Legal */}
        <div className="space-y-3 text-sm">
          <Link href="/privacy-policy" className="block hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="block hover:underline">
            Terms of Service
          </Link>
          <p className="text-[#4b5a3a] text-xs pt-4">
            © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}