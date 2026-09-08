import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { PHONE, WHATSAPP_URL } from "../data";
import { useCart } from "../cart/CartContext";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full sb-glass border border-white/10 text-gold-200 transition-all duration-300 hover:border-gold-400/50 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <button
        onClick={openCart}
        aria-label="Open cart"
        className="relative grid h-12 w-12 place-items-center rounded-full bg-gold-400 text-ink-950 shadow-lg transition-all hover:scale-110"
      >
        <ShoppingBag className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#25D366] text-[11px] font-bold text-white">
            {totalItems > 9 ? "9+" : totalItems}
          </span>
        )}
      </button>

      <a
        href={`tel:+${PHONE}`}
        aria-label="Call Street Bar"
        className="relative grid h-12 w-12 place-items-center rounded-full sb-glass border border-white/10 text-gold-200 shadow-lg transition-all hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Street Bar"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-all hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[sb-pulse-ring_2s_ease-out_infinite]" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}
