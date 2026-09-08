import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import { useLanguage } from "../i18n/LanguageContext";
import { resolveItemImage } from "../lib/itemImage";

const heroBg = resolveItemImage(
  "hero-bg.jpg",
  "https://images.pexels.com/photos/20582722/pexels-photo-20582722.jpeg?auto=compress&cs=tinysrgb&w=1600"
);
const logoMark = resolveItemImage("logo.png", "");

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Artificial grass wall backdrop at Street Bar"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1076}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-transparent" />
      </div>

      {/* Decorative gold glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="sb-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-5 py-2 text-xs font-medium tracking-[0.25em] text-gold-200">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          {t.hero.badge}
        </div>

        <div
          className="sb-fade-in flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
          style={{ animationDelay: "0.1s" }}
        >
          {logoMark && (
            <img
              src={logoMark}
              alt="Street Bar logo"
              className="sb-logo-mark sb-logo-always-invert h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
            />
          )}
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="sb-neon-pink">Street Bar Crêpes</span>
          </h1>
        </div>

        <p
          className="mt-4 text-sm font-medium tracking-[0.4em] text-gold-200 sb-fade-in sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.tagline}
        </p>

        <p
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed sb-muted sb-fade-in sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          {t.hero.description}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sb-fade-in sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sb-btn-gold group flex items-center gap-2.5 rounded-full px-9 py-4 text-sm font-semibold tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            <MessageCircle className="h-5 w-5" />
            {t.hero.orderWhatsapp}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
          <a
            href="#menu"
            className="flex items-center gap-2.5 rounded-full border border-white/15 px-9 py-4 text-sm font-semibold tracking-wide text-ink-100 transition-all hover:border-gold-400/50 hover:text-gold-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            {t.hero.viewMenu}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sb-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
