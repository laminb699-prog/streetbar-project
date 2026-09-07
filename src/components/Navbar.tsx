import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "../data";
import { useScrollSpy } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import { languageNames, type Lang } from "../i18n/translations";

const sectionIds = ["home", "menu", "about", "gallery", "contact"];
const langs: Lang[] = ["en", "fr", "ar"];

type Props = {
  dark: boolean;
  onToggleTheme: () => void;
};

function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-white/10 p-1 ${
        compact ? "" : ""
      }`}
    >
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={languageNames[l]}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            lang === l ? "bg-gold-400 text-ink-950" : "sb-muted hover:text-gold-300"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Navbar({ dark, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "sb-glass border-b border-white/5 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="Street Bar home">
          <Logo />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`sb-link text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-gold-300" : "sb-muted hover:text-gold-300"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 sb-muted transition-colors hover:border-gold-400/50 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sb-btn-gold hidden rounded-full px-6 py-2.5 text-sm font-semibold sm:inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            {t.nav.orderNow}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 sb-muted lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mt-3 rounded-2xl sb-glass p-5">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-wide sb-muted transition-colors hover:text-gold-300"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-1">
              <LanguageSwitcher compact />
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="sb-btn-gold mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold"
            >
              {t.nav.orderNow}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
