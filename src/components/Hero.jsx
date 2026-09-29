import { motion } from "framer-motion";
import { FiPhoneCall, FiMapPin, FiChevronDown } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { company, stats } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink text-cream pt-20"
    >
      <div
        className="absolute inset-0 -z-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #e3b9a1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-rose/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream/70">
            <FiMapPin size={13} /> Vienna, 1010
          </span>
          <span className="flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream/70">
            <FaStar className="text-rose-light" size={12} /> {company.googleRating} · {company.googleReviewCount} reviews
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl sm:text-8xl leading-[0.95]"
        >
          Wiener <span className="italic text-gradient-rose">Salon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 font-display italic text-xl sm:text-2xl text-rose-light"
        >
          {company.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 text-cream/60 leading-relaxed max-w-xl mx-auto"
        >
          A homey, multilingual salon tucked into Vienna's first district —
          {" "}{company.owner} and the crew turn cuts, color and care into a
          moment just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-rose px-8 py-3.5 text-sm font-medium tracking-wide text-cream hover:opacity-90 transition-opacity duration-300"
          >
            Book an Appointment
          </a>
          <a
            href={`tel:${company.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-3.5 text-sm tracking-wide text-cream hover:border-rose hover:text-rose-light transition-colors duration-300"
          >
            <FiPhoneCall size={15} /> {company.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-cream/10 pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/50">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40"
        aria-label="Scroll down"
      >
        <FiChevronDown size={22} />
      </motion.a>
    </section>
  );
}
