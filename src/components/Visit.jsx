import { motion } from "framer-motion";
import { FiMapPin, FiPhoneCall, FiClock } from "react-icons/fi";
import { company } from "../data";

export default function Visit() {
  return (
    <section id="visit" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="divider-orn text-xs uppercase tracking-[0.3em] text-rose">
            Find Us
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-tight">
            Right in the Heart
            <br />
            <span className="italic text-rose">of Vienna.</span>
          </h2>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white/50 p-5 border border-ink/8">
              <FiMapPin className="text-rose shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-ink/80">{company.addressLine1}</p>
                <p className="text-sm text-ink/80">{company.addressLine2}</p>
              </div>
            </div>
            <a
              href={`tel:${company.phoneTel}`}
              className="flex items-center gap-4 rounded-2xl bg-white/50 p-5 border border-ink/8 hover:border-rose/40 transition-colors"
            >
              <FiPhoneCall className="text-rose shrink-0" size={20} />
              <span className="text-sm text-ink/80">{company.phone}</span>
            </a>
            <div className="flex items-start gap-4 rounded-2xl bg-white/50 p-5 border border-ink/8">
              <FiClock className="text-rose shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-ink/80">Call or message ahead — hours vary by day.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-ink/8 h-[420px]"
        >
          <iframe
            title="Wiener Salon location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${company.lat},${company.lng}&z=16&output=embed`}
          />
        </motion.div>
      </div>
    </section>
  );
}
