import BookingForm from "../components/BookingForm";

export const metadata = {
  title: "Book an appointment",
}

export default function BookingPage() {
  return (
    <main className="bg-[#fbf7ef] py-20 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2f3e1f] mb-6">Book an appointment</h1>
        <p className="text-lg text-[#4b5a3a] mb-10 max-w-2xl">Please provide some basic information and your preferred date and time. We will follow up by email to confirm availability and finalize the appointment.</p>

        <BookingForm />
      </div>
    </main>
  );
}
