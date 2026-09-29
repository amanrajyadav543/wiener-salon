import { motion } from "framer-motion";
import { GiSparkles } from "react-icons/gi";
import { company } from "../data";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="divider-orn-center text-xs uppercase tracking-[0.3em] text-rose flex items-center justify-center gap-3">
            <GiSparkles /> About Us <GiSparkles />
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl leading-tight">
            A Homey Corner of
            <br />
            <span className="italic text-rose">Vienna's City Centre.</span>
          </h2>
          <p className="mt-6 text-ink/60 leading-relaxed max-w-2xl mx-auto">
            Wiener Salon sits just off Mölker Bastei in the heart of the 1st
            district, where {company.owner} and her crew have built a warm,
            international space for hair. Guests come back for the
            multilingual welcome, the unrushed care, and cuts that actually
            suit them — plus a scalp massage that regulars say is the best
            part of the visit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Multilingual Crew",
              desc: "Consultations in your language, from a genuinely international team.",
            },
            {
              title: "Precision & Care",
              desc: "Every cut and color is tailored — nothing rushed, nothing generic.",
            },
            {
              title: "Loved Locally",
              desc: `${company.googleRating}★ across ${company.googleReviewCount} Google reviews and ${company.fbRecommendPercent}% recommended on Facebook.`,
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-ink/8 bg-white/40 p-8"
            >
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-3 text-sm text-ink/55 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href={company.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 flex items-center justify-center gap-2 text-sm text-ink/50 hover:text-rose transition-colors"
        >
          See us on Google Maps →
        </motion.a>
      </div>
    </section>
  );
}
