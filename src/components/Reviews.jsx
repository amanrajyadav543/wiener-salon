import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { company, reviews } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-ink text-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="divider-orn-center text-xs uppercase tracking-[0.3em] text-rose-light">
            Kind Words
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl">
            {company.googleRating}{" "}
            <span className="italic text-gradient-rose">Star Rated</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-cream/60 text-sm">
            <span>{company.googleReviewCount} Google Reviews</span>
            <span className="text-rose-light">•</span>
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-rose-light" size={13} />
              ))}
            </span>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-white/5 border border-cream/10 p-8"
            >
              <FaQuoteLeft className="text-rose/50" size={20} />
              <p className="mt-4 text-sm text-cream/75 leading-relaxed">
                {r.text}
              </p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar key={j} className="text-rose-light" size={12} />
                ))}
              </div>
              <p className="mt-3 font-display text-lg">{r.name}</p>
              <p className="text-xs text-cream/40">
                {r.source} · {r.timeAgo}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3 text-sm hover:border-rose hover:text-rose-light transition-colors duration-300"
          >
            Read All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
