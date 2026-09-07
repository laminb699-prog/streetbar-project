import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Loader() {
  const [done, setDone] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-ink-950 transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-2 border-gold-700/30" />
          <div className="absolute inset-0 h-20 w-20 animate-[sb-spin_1.1s_linear_infinite] rounded-full border-2 border-transparent border-t-gold-400" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-2xl font-bold sb-text-gold">SB</span>
          </div>
        </div>
        <div className="font-display text-sm tracking-[0.4em] sb-muted">{t.loader.brand}</div>
      </div>
    </div>
  );
}
