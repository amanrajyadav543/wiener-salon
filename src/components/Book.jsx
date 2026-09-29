import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhoneCall, FiMessageSquare, FiFacebook } from "react-icons/fi";
import { company, smsLink } from "../data";

export default function Book() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const buildMessage = () =>
    `Hi Wiener Salon! I'd like to book an appointment.
Name: ${form.name || "-"}
Phone: ${form.phone || "-"}
Service: ${form.service || "-"}
Details: ${form.message || "-"}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(smsLink(buildMessage()), "_blank", "noreferrer");
  };

  return (
    <section id="book" className="relative bg-ink text-cream py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #e3b9a1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="divider-orn text-xs uppercase tracking-[0.3em] text-cream/60">
            Book Now
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-tight">
            Ready for Your
            <br />
            <span className="italic text-gradient-rose">Good Hair Day?</span>
          </h2>
          <p className="mt-5 text-cream/60 leading-relaxed">
            Call, text or message us on Facebook — {company.owner} will get
            back to you to lock in your slot.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${company.phoneTel}`}
              className="flex items-center gap-4 rounded-2xl bg-surface p-5 border border-cream/10 hover:border-rose/40 transition-colors"
            >
              <FiPhoneCall className="text-rose shrink-0" size={20} />
              <span className="text-cream/80 text-sm">{company.phone}</span>
            </a>
            <a
              href={smsLink("Hi Wiener Salon! I'd like to book an appointment.")}
              className="flex items-center gap-4 rounded-2xl bg-surface p-5 border border-cream/10 hover:border-rose/40 transition-colors"
            >
              <FiMessageSquare className="text-rose shrink-0" size={20} />
              <span className="text-cream/80 text-sm">Text Us</span>
            </a>
            <a
              href={company.messengerUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-surface p-5 border border-cream/10 hover:border-rose/40 transition-colors"
            >
              <FiFacebook className="text-rose shrink-0" size={20} />
              <span className="text-cream/80 text-sm">Message on Facebook</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-3xl bg-surface border border-cream/10 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wide text-muted">Your Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-cream/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-rose transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-muted">Phone Number</label>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-cream/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-rose transition-colors"
                placeholder="+43 6XX XXXXXXX"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-wide text-muted">Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-cream/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-rose transition-colors"
            >
              <option value="">Select a service</option>
              <option>Cut & Styling</option>
              <option>Coloring & Dyeing</option>
              <option>Highlights & Balayage</option>
              <option>Scalp & Head Massage</option>
              <option>Blowout & Occasion Styling</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-wide text-muted">Anything else?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-xl border border-cream/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-rose transition-colors resize-none"
              placeholder="Preferred day, hair goals, anything we should know..."
            />
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-medium tracking-wide text-cream hover:opacity-90 transition-opacity duration-300"
          >
            <FiMessageSquare size={17} />
            Send Booking Request
          </button>
          <p className="mt-3 text-center text-xs text-cream/40">
            Submitting opens a text message with the details pre-filled —
            nothing is stored.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
