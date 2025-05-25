import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from 'emailjs-com';

type ReservationProps = {
  
};

export const Reservation = ({}: ReservationProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    note: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    try {
      // Replace with your actual EmailJS service, template, and public key
      const serviceId = 'service_q0p8jbm';
      const templateId = 'template_a2vubcf';
      const publicKey = 'JKNSzCLCB96fNomzP';
      await emailjs.send(serviceId, templateId, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: form.date,
        service: form.service,
        note: form.note,
      }, publicKey);
      setSent(true);
      setForm({ name: '', email: '', phone: '', date: '', service: '', note: '' });
    } catch (err) {
      setError("Failed to send reservation. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-start gap-8 md:gap-12 xl:gap-16 bg-background-light py-8 md:py-12 xl:py-20 px-4 md:px-10 lg:px-20 xl:px-80"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-8 md:gap-16 xl:gap-20 max-w-5xl items-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-start gap-2">
          <div className="text-xl md:text-2xl font-heading font-semibold text-center">Book Your Renovation Appointment Today</div>
          <div className="text-base md:text-lg text-center">Let us know your preferences to schedule a consultation at your convenience.</div>
        </div>

        <hr className="hidden lg:block h-40 w-[2px] bg-background-dark opacity-15" />

        <div className="w-full lg:w-1/2 flex flex-col justify-start gap-2 mt-8 lg:mt-0">
          <div className="text-xl md:text-2xl font-heading font-semibold text-black">Need help?<br />Call us directly &rarr;</div>
          <div className="text-xl md:text-3xl font-heading font-semibold text-green-600">
            <a href="tel:+15551234567">
              +1 (647) 680-9164
            </a>
          </div>
        </div>
      </div>

      {/* Form and Help Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center w-full max-w-5xl mb-8 md:mb-12">
        {/* Reservation Form */}
        <form className="rounded-2xl flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full md:w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full md:w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required />
          </div>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required />
          <input type="text" name="date" value={form.date} onChange={handleChange} placeholder="Preferred Date" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required />
          <select name="service" value={form.service} onChange={handleChange} className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required>
            <option value="">Select Service</option>
            <option value="painting">Painting</option>
            <option value="demolition">Demolition</option>
            <option value="framing">Framing</option>
            <option value="drywall">Drywall</option>
            <option value="plastering">Plastering</option>
            <option value="renovation">Renovation</option>
            <option value="wallpaper">Wallpaper Installation</option>
            <option value="other">Other</option>
          </select>
          <textarea name="note" value={form.note} onChange={handleChange} placeholder="Optional Note/Request" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2 min-h-[70px]" />
          <div className="mt-2 w-full">
            <button
              className="flex items-center justify-center gap-2 px-6 py-4 font-medium text-base rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-button-bg text-white disabled:opacity-60"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Schedule Appointment"}
            </button>
          </div>
          {sent && <div className="text-green-600 mt-2">Reservation sent! We'll contact you soon.</div>}
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
      </div>
    </motion.div>
  );
};