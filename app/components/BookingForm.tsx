"use client";

import { useState } from "react";
import Footer from "./Footer";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    type: "Telehealth",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const times = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.date) next.date = "Please select a preferred date.";
    if (!form.time) next.time = "Please select a time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // In a real app you would POST this to a secure server or scheduling API.
    console.log("Booking request:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white border border-[#e6e1d6] rounded-md pb-8 mb-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Thanks — your request is sent</h3>
        <p className="text-sm text-[#4b5a3a] mb-6">
          We received your booking request. We will follow up by email to confirm
          availability and finalize your appointment.
        </p>
        <p className="text-sm text-[#4b5a3a]">If this is urgent, please call the office.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white border border-[#e6e1d6] rounded-md p-8 text-left">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm text-[#2f3e1f]">Full name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </label>

        <label className="block">
          <span className="text-sm text-[#2f3e1f]">Email</span>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="you@example.com"
            type="email"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </label>

        <label className="block">
          <span className="text-sm text-[#2f3e1f]">Phone (optional)</span>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="(555) 555-5555"
          />
        </label>

        <label className="block">
          <span className="text-sm text-[#2f3e1f]">Appointment type</span>
          <select name="type" value={form.type} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2">
            <option>Telehealth</option>
            <option>In-person</option>
            <option>15-min consult</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm text-[#2f3e1f]">Preferred date</span>
          <input name="date" value={form.date} onChange={handleChange} type="date" className="mt-1 block w-full border rounded-md p-2" />
          {errors.date && <p className="text-sm text-red-500 mt-1">{errors.date}</p>}
        </label>

        <label className="block">
          <span className="text-sm text-[#2f3e1f]">Preferred time</span>
          <select name="time" value={form.time} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2">
            <option value="">Choose a time</option>
            {times.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && <p className="text-sm text-red-500 mt-1">{errors.time}</p>}
        </label>
      </div>

      <label className="block mt-4">
        <span className="text-sm text-[#2f3e1f]">Notes (reason for visit)</span>
        <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="mt-1 block w-full border rounded-md p-2" />
      </label>

      <p className="text-xs text-[#4b5a3a] mt-4">Please note: this form is a demo. For HIPAA-compliant bookings, integrate a secure scheduling/portal solution (e.g., a HIPAA-compliant scheduling API or secure client portal).</p>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <button type="submit" className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-[#2f3e1f] text-white rounded-md font-medium hover:opacity-90 transition">Request booking</button>
        <button type="button" onClick={() => setForm({name:'',email:'',phone:'',date:'',time:'',type:'Telehealth',notes:''})} className="text-sm text-[#4b5a3a]">Clear</button>
      </div>
    </form>
  );
}
