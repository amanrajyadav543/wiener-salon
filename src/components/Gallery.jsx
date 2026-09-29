import { motion } from "framer-motion";
import { GiSparkles } from "react-icons/gi";
import barberCutting from "../assets/barber-cutting.jpg";
import salonClient from "../assets/salon-client.jpg";
import { company } from "../data";

export default function Gallery() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="divider-orn-center text-xs uppercase tracking-[0.3em] text-rose flex items-center justify-center gap-3">
            <GiSparkles /> The Craft
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl">
            Precision, <span className="italic text-rose">Every Time.</span>
          </h2>
          <p className="mt-4 text-ink/55 max-w-xl mx-auto">
            {company.googleRating}★ across {company.googleReviewCount} reviews
            — this is the care behind every cut and color at Wiener Salon.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] group"
          >
            <img
              src={barberCutting}
              alt="Precision haircut in progress"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <p className="absolute bottom-5 left-5 text-cream text-sm font-display italic text-lg">
              Precision Cutting
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] group"
          >
            <img
              src={salonClient}
              alt="Happy client with finished blowout"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <p className="absolute bottom-5 left-5 text-cream text-sm font-display italic text-lg">
              Finished With Care
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
