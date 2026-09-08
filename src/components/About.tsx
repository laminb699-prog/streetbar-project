import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";
import { getFolderImages } from "../lib/itemImage";
import AboutGallery from "./AboutGallery";

const icons = ["🥞", "🧇", "🥤", "🍹", "🍸", "☕", "🍰", "🍨", "🥞"];

const fallbackImage =
  "https://images.pexels.com/photos/6463660/pexels-photo-6463660.jpeg?auto=compress&cs=tinysrgb&w=1000";

const aboutImages = (() => {
  const found = getFolderImages("about-gallery");
  return found.length > 0 ? found : [fallbackImage];
})();

export default function About() {
  const { ref, visible } = useReveal();
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`sb-reveal ${visible ? "sb-in" : ""}`}
        >
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative">
              <AboutGallery images={aboutImages} />
              {/* Floating badge */}
              <div className="sb-float absolute -bottom-6 -right-4 sb-glass rounded-2xl px-6 py-5 shadow-xl sm:-right-8 rtl:-right-auto rtl:-left-4 sm:rtl:-left-8">
                <div className="font-display text-3xl font-bold sb-text-gold">100%</div>
                <div className="mt-1 text-xs tracking-wide sb-muted">{t.about.freshDaily}</div>
              </div>
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold-500/5 blur-2xl" />
            </div>

            {/* Text side */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-gold-300">
                <span className="h-px w-8 bg-gold-400" />
                {t.about.eyebrow}
              </div>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                {t.about.title1} <span className="sb-text-gold">{t.about.titleGold}</span> {t.about.title2}
              </h2>
              <p className="mt-6 text-base leading-relaxed sb-muted sm:text-lg">
                {t.about.description}
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {t.about.items.map((name, i) => (
                  <div
                    key={name}
                    className="sb-card sb-surface flex items-center gap-3 rounded-xl border sb-border px-4 py-3"
                  >
                    <span className="text-lg">{icons[i]}</span>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
