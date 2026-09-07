import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Order() {
  const { ref, visible } = useReveal();
  const { t } = useLanguage();

  return (
    <section id="order" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`sb-reveal ${visible ? "sb-in" : ""}`}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold-400/20 sb-surface p-10 text-center sm:p-16">
            {/* glow */}
            <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/15 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 sb-noise opacity-40" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-gold-300">
                <span className="h-px w-8 bg-gold-400" />
                {t.order.eyebrow}
                <span className="h-px w-8 bg-gold-400" />
              </div>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                {t.order.title1} <span className="sb-text-gold">{t.order.titleGold}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg sb-muted">
                {t.order.description}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-4.5 text-base font-semibold text-white shadow-[0_14px_40px_-10px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(37,211,102,0.8)]"
                style={{ padding: "1rem 2.5rem" }}
              >
                <MessageCircle className="h-6 w-6" />
                {t.order.orderWhatsapp}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </a>

              <p className="mt-5 text-sm sb-muted">
                +212 713 809 797
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
