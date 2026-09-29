import { motion } from "framer-motion";
import { FiFacebook } from "react-icons/fi";
import { company } from "../data";

export default function FacebookFeed() {
  const embedSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    company.facebookUrl
  )}&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="divider-orn-center text-xs uppercase tracking-[0.3em] text-rose flex items-center justify-center gap-3">
            <FiFacebook /> Follow Along
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl">
            Life at the <span className="italic text-rose">Salon.</span>
          </h2>
          <p className="mt-4 text-ink/55 max-w-xl mx-auto">
            {company.fbFollowers} followers keep up with Jasmina and the crew
            on Facebook — real work, real transformations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-full max-w-[500px] rounded-3xl overflow-hidden border border-ink/8 shadow-sm bg-white">
            <iframe
              title="Wiener Salon Facebook Page"
              src={embedSrc}
              width="500"
              height="620"
              style={{ border: "none", overflow: "hidden", width: "100%" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
