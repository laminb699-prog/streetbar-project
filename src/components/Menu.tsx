import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Search, X } from "lucide-react";
import { categories, WHATSAPP_URL, type Category } from "../data";
import { useReveal, useBodyScrollLock } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

function orderLink(productName: string, price: number) {
  const msg = encodeURIComponent(
    `Hello Street Bar! I'd like to order: ${productName} (${price} MAD).`
  );
  return `${WHATSAPP_URL}?text=${msg}`;
}

function ProductCard({
  name,
  price,
  image,
  orderLabel,
}: {
  name: string;
  price: number;
  image: string;
  orderLabel: string;
}) {
  return (
    <div className="sb-card sb-surface group overflow-hidden rounded-2xl border sb-border">
      <div className="sb-img-zoom relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full sb-glass px-3 py-1 text-xs font-semibold text-gold-200 rtl:left-auto rtl:right-3">
          {price} MAD
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-display text-base font-semibold leading-snug">{name}</h4>
        <a
          href={orderLink(name, price)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 py-2.5 text-xs font-semibold tracking-wide text-gold-200 transition-all hover:bg-gold-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
        >
          <MessageCircle className="h-4 w-4" />
          {orderLabel}
        </a>
      </div>
    </div>
  );
}

export default function Menu() {
  const { ref, visible } = useReveal();
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  useBodyScrollLock(openCategory !== null);

  useEffect(() => {
    if (openCategory === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCategory(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        products: c.products.filter((p) => p.name.toLowerCase().includes(q)),
      }))
      .filter((c) => c.products.length > 0);
  }, [active, query]);

  return (
    <section id="menu" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`sb-reveal ${visible ? "sb-in" : ""} text-center`}
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            {t.menu.eyebrow}
            <span className="h-px w-8 bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            {t.menu.title1} <span className="sb-text-gold">{t.menu.titleGold}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl sb-muted">
            {t.menu.description}
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-md">
          <div className="sb-glass flex items-center gap-3 rounded-full px-5 py-3.5">
            <Search className="h-5 w-5 sb-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              aria-label="Search menu items"
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink-400"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search">
                <X className="h-4 w-4 sb-muted hover:text-gold-300" />
              </button>
            )}
          </div>
        </div>

        {/* Category filter chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setActive("all")}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
              active === "all"
                ? "border-gold-400 bg-gold-400/15 text-gold-200"
                : "border-white/10 sb-muted hover:border-gold-400/40 hover:text-gold-200"
            }`}
          >
            {t.menu.all}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                active === c.id
                  ? "border-gold-400 bg-gold-400/15 text-gold-200"
                  : "border-white/10 sb-muted hover:border-gold-400/40 hover:text-gold-200"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Category cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => setOpenCategory(c)}
              aria-label={`View ${c.name} products`}
              className="sb-card sb-surface group relative overflow-hidden rounded-2xl border sb-border text-left rtl:text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <div className="sb-img-zoom relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={640}
                  height={400}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-white">{c.name}</h3>
                <p className="mt-1 text-xs sb-muted">{c.tagline}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-200">
                  {t.menu.viewItems(c.products.length)}
                  <span className="transition-transform group-hover:translate-x-1 rtl:rotate-180">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center sb-muted">
            {t.menu.noResults}
          </p>
        )}
      </div>

      {/* Category modal */}
      {openCategory && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-sm sb-fade-in"
          onClick={() => setOpenCategory(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${openCategory.name} products`}
        >
          <div
            className="sb-scale-in sb-surface relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl border sb-border p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenCategory(null)}
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border sb-border sb-muted hover:text-gold-300 rtl:right-auto rtl:left-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-display text-3xl font-bold sb-text-gold">
              {openCategory.name}
            </h3>
            <p className="mt-1 text-sm sb-muted">{openCategory.tagline}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {openCategory.products.map((p) => (
                <ProductCard key={p.name} name={p.name} price={p.price} image={p.image} orderLabel={t.menu.order} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
