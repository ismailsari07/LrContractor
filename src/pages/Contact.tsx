import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from 'emailjs-com';

type ContactProps = {
  
};

export const Contact = ({}: ContactProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const templateId = 'template_3dqb2jo';
      const publicKey = 'JKNSzCLCB96fNomzP';
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }, publicKey);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
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
      className="min-h-screen flex flex-col items-center bg-background-light gap-10 md:gap-16 xl:gap-20 px-4 md:px-10 lg:px-20 xl:px-60 py-12 md:py-20 xl:py-28"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 md:gap-16 xl:gap-20 max-w-5xl">
        <div className="w-full lg:w-1/2">
          <div className=" text-2xl md:text-3xl text-center font-semibold font-heading mb-4">Contact Us</div>
          <div className="text-base md:text-lg mb-8 md:mb-12 text-center">Get in touch with our team for expert advice and personalized assistance.</div>
        </div>

        <hr className="hidden lg:block h-48 w-[2px] bg-background-dark opacity-15" />

        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mt-8 lg:mt-0">
          <div className="flex items-center gap-3 mb-4 text-base md:text-lg">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" fill="#222"/></svg>
            </span>

            <div className="font-semibold text-green-600">
              <a href="tel:+15551234567"> +1 (647) 680-9164 </a>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4 text-base md:text-lg">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20v-9.99l7.29 6.59a1 1 0 0 0 1.42 0L20 10.01V20H4Z" fill="#222"/></svg>
            </span>

            ramazan@lrcontractor.ca 
          </div>
        </div>
      </div>
      {/* Form and Info Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center w-full max-w-5xl mb-8 md:mb-12">
        {/* Contact Form */}
        <form className="rounded-2xl flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full md:w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full md:w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required />
          </div>
          <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2 min-h-[100px]" required />
          <div className="mt-2 w-full">
            <button
              className="flex items-center justify-center gap-2 px-6 py-4 font-medium text-base rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-button-bg text-white disabled:opacity-60"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
          {sent && <div className="text-green-600 mt-2">Email sent successfully!</div>}
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
      </div>
    </motion.div>
  );
};