import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { company, navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-rose text-rose font-display text-lg italic">
            W
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg tracking-wide">Wiener Salon</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-rose">
              by {company.owner}
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink/70 hover:text-rose transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${company.phoneTel}`}
            className="flex items-center gap-2 text-sm text-ink/70 hover:text-rose transition-colors"
          >
            <FiPhoneCall size={15} /> {company.phone}
          </a>
          <a
            href="#book"
            className="rounded-full bg-ink px-6 py-2.5 text-sm text-cream hover:bg-rose transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-ink/5 bg-cream"
          >
            <div className="px-5 py-6 flex flex-col gap-5 text-sm">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-ink/80 hover:text-rose transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center gap-2 text-ink/80"
              >
                <FiPhoneCall size={15} /> {company.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
