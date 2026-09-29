import { motion } from "framer-motion";
import {
  GiScissors,
  GiLipstick,
  GiHairStrands,
  GiSparkles,
  GiComb,
  GiRibbonMedal,
} from "react-icons/gi";
import { services } from "../data";

const icons = {
  cut: GiScissors,
  color: GiLipstick,
  balayage: GiHairStrands,
  scalp: GiSparkles,
  blowout: GiComb,
  consult: GiRibbonMedal,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-ink text-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="divider-orn-center text-xs uppercase tracking-[0.3em] text-rose-light flex items-center justify-center gap-3">
            What We Do
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl">
            Our <span className="italic text-gradient-rose">Services</span>
          </h2>
          <p className="mt-4 text-cream/55 max-w-xl mx-auto">
            From a first-time cut to a full color transformation — here for
            every kind of good hair day.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.key];
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`rounded-3xl p-8 border transition-colors duration-300 ${
                  s.featured
                    ? "bg-gradient-to-br from-rose to-rose/70 border-transparent text-ink"
                    : "bg-white/5 border-cream/10 hover:border-rose/40"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${
                    s.featured ? "bg-ink/10 text-ink" : "bg-rose/15 text-rose-light"
                  }`}
                >
                  <Icon />
                </div>
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    s.featured ? "text-ink/70" : "text-cream/55"
                  }`}
                >
                  {s.desc}
                </p>
                {s.featured && (
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] bg-ink/10 rounded-full px-3 py-1">
                    Guest Favorite
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-rose px-8 py-3.5 text-sm font-medium tracking-wide text-cream hover:opacity-90 transition-opacity duration-300"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
