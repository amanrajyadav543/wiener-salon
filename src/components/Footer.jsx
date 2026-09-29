import { FiMapPin, FiPhone, FiFacebook } from "react-icons/fi";
import { company, navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-rose text-rose font-display text-lg italic">
            W
          </span>
          <div>
            <p className="font-display text-lg text-cream tracking-wide">Wiener Salon</p>
            <p className="text-xs uppercase tracking-[0.2em] text-rose-light font-medium normal-case">
              by {company.owner}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-rose-light transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1.5 text-sm normal-case">
            <FiMapPin size={14} /> 1010 Wien
          </span>
          <a
            href={company.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 hover:border-rose hover:text-rose-light transition-colors"
            aria-label="Facebook"
          >
            <FiFacebook size={16} />
          </a>
          <a
            href={`tel:${company.phoneTel}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 hover:border-rose hover:text-rose-light transition-colors"
            aria-label="Call"
          >
            <FiPhone size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-cream/35 normal-case">
        © {new Date().getFullYear()} Wiener Salon. All rights reserved.
      </div>
    </footer>
  );
}
