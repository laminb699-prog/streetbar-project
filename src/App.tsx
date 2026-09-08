import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Order from "./components/Order";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const THEME_KEY = "streetbar-theme";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light") return false;
  if (stored === "dark") return true;
  return !window.matchMedia("(prefers-color-scheme: light)").matches;
}

export default function App() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Loader />
      <Navbar dark={dark} onToggleTheme={() => setDark((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Order />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <Cart />
    </>
  );
}
