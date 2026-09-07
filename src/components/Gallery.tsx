import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryImages } from "../data";
import { useReveal, useBodyScrollLock } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Gallery() {
  const { ref, visible } = useReveal();
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useBodyScrollLock(lightbox !== null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`sb-reveal ${visible ? "sb-in" : ""} text-center`}>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            {t.gallery.eyebrow}
            <span className="h-px w-8 bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            {t.gallery.title1} <span className="sb-text-gold">{t.gallery.titleGold}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl sb-muted">
            {t.gallery.description}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[240px] lg:grid-cols-4">
          {galleryImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              aria-label={`Open image ${i + 1} fullscreen`}
              className={`sb-card sb-img-zoom group relative overflow-hidden rounded-2xl border sb-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${
                i % 5 === 0 ? "row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Street Bar gallery image ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid place-items-center bg-ink-950/40 opacity-0 transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-7 w-7 text-gold-200" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/95 p-4 sb-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={galleryImages[lightbox]}
            alt={`Street Bar gallery image ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain sb-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i + 1) % galleryImages.length));
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full sb-glass px-4 py-1.5 text-xs font-medium text-gold-200">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
