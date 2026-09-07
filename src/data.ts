import crepesSucreesImg from "./assets/menu/crepes-sucrees.jpg";
import crepesSaleesImg from "./assets/menu/crepes-salees.jpg";
import pancakesImg from "./assets/menu/pancakes.jpg";
import bubbleWaffleImg from "./assets/menu/bubble-waffle.jpg";
import milkshakesImg from "./assets/menu/milkshakes-frappes.jpg";
import mojitoImg from "./assets/menu/virgin-mojito.jpg";
import iceLatteImg from "./assets/menu/ice-latte.jpg";
import jusImg from "./assets/menu/jus.jpg";
import boissonsChaudesImg from "./assets/menu/boissons-chaudes.jpg";
import qashtoutaImg from "./assets/menu/sweets-qashtouta.jpg";
import extrasImg from "./assets/menu/extras.jpg";
import { resolveItemImage } from "./lib/itemImage";

export type Product = {
  name: string;
  price: number;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];
};

export const PHONE = "212713809797";
export const WHATSAPP_URL = "https://wa.me/212713809797";
export const ADDRESS = "Boulevard Al Masjid, in front of Al Jazira Store, Dakhla, Morocco";

// Each product looks for a photo file matching its filename in
// src/assets/menu/items/. If none exists yet, it falls back to the
// category's shared photo automatically.
const products = (
  entries: Array<[string, number, string]>,
  fallbackImage: string
): Product[] =>
  entries.map(([name, price, filename]) => ({
    name,
    price,
    image: resolveItemImage(filename, fallbackImage),
  }));

export const categories: Category[] = [
  {
    id: "crepes-sucrees",
    name: "Crêpes Sucrées",
    tagline: "From classic to signature VIP crêpes",
    image: crepesSucreesImg,
    products: products(
      [
        ["Crêpe Nutella", 17, "crepes-sucrees__crepe-nutella.jpg"],
        ["Crêpe Spéciale", 23, "crepes-sucrees__crepe-speciale.jpg"],
        ["Crêpe Oreo", 25, "crepes-sucrees__crepe-oreo.jpg"],
        ["Crêpe Kunafa", 25, "crepes-sucrees__crepe-kunafa.jpg"],
        ["Crêpe Amlou", 27, "crepes-sucrees__crepe-amlou.jpg"],
        ["Crêpe Fruitilla", 30, "crepes-sucrees__crepe-fruitilla.jpg"],
        ["Crêpe Pistache", 30, "crepes-sucrees__crepe-pistache.jpg"],
        ["Crêpe Biscoff", 30, "crepes-sucrees__crepe-biscoff.jpg"],
        ["Crêpe Kinder Bueno", 35, "crepes-sucrees__crepe-kinder-bueno.jpg"],
        ["Crêpe Dubai", 39, "crepes-sucrees__crepe-dubai.jpg"],
        ["Crêpe King Street", 40, "crepes-sucrees__crepe-king-street.jpg"],
        ["Crêpe VIP", 50, "crepes-sucrees__crepe-vip.jpg"],
      ],
      crepesSucreesImg
    ),
  },
  {
    id: "crepes-salees",
    name: "Crêpes Salées",
    tagline: "Savoury crêpes prepared to order",
    image: crepesSaleesImg,
    products: products(
      [
        ["Fromage", 25, "crepes-salees__fromage.jpg"],
        ["Pizza", 25, "crepes-salees__pizza.jpg"],
        ["Triple Fromage", 30, "crepes-salees__triple-fromage.jpg"],
        ["Thon", 30, "crepes-salees__thon.jpg"],
        ["Mix", 35, "crepes-salees__mix.jpg"],
        ["Pizza Mix", 35, "crepes-salees__pizza-mix.jpg"],
      ],
      crepesSaleesImg
    ),
  },
  {
    id: "pancakes",
    name: "Pancakes",
    tagline: "Fluffy stacks made for sharing",
    image: pancakesImg,
    products: products(
      [
        ["Miel & Beurre", 15, "pancakes__miel-beurre.jpg"],
        ["Nutella", 20, "pancakes__nutella.jpg"],
        ["Nutella Banane", 25, "pancakes__nutella-banane.jpg"],
        ["Nutella Pistache", 30, "pancakes__nutella-pistache.jpg"],
        ["Royal", 40, "pancakes__royal.jpg"],
      ],
      pancakesImg
    ),
  },
  {
    id: "bubble-waffle",
    name: "Bubble Waffle",
    tagline: "Crisp outside, soft inside",
    image: bubbleWaffleImg,
    products: products(
      [
        ["Chocolate", 20, "bubble-waffle__chocolate.jpg"],
        ["Banane Chocolate", 25, "bubble-waffle__banane-chocolate.jpg"],
        ["Holly Chocolate", 30, "bubble-waffle__holly-chocolate.jpg"],
        ["Pistache", 35, "bubble-waffle__pistache.jpg"],
        ["King Street", 40, "bubble-waffle__king-street.jpg"],
      ],
      bubbleWaffleImg
    ),
  },
  {
    id: "milkshakes-frappes",
    name: "Milkshakes & Frappés",
    tagline: "Thick, creamy and freshly blended",
    image: milkshakesImg,
    products: products(
      [
        ["Milkshake Chocolat", 30, "milkshakes-frappes__milkshake-chocolat.jpg"],
        ["Milkshake Caramel", 30, "milkshakes-frappes__milkshake-caramel.jpg"],
        ["Milkshake Vanille", 30, "milkshakes-frappes__milkshake-vanille.jpg"],
        ["Milkshake Oreo", 30, "milkshakes-frappes__milkshake-oreo.jpg"],
        ["Milkshake Fraise", 30, "milkshakes-frappes__milkshake-fraise.jpg"],
        ["Milkshake Biscoff", 30, "milkshakes-frappes__milkshake-biscoff.jpg"],
        ["Milkshake Pistache", 35, "milkshakes-frappes__milkshake-pistache.jpg"],
        ["Frappé Oreo", 25, "milkshakes-frappes__frappe-oreo.jpg"],
        ["Frappé Chocolat", 25, "milkshakes-frappes__frappe-chocolat.jpg"],
        ["Frappé Biscoff", 30, "milkshakes-frappes__frappe-biscoff.jpg"],
        ["Frappé Matcha", 30, "milkshakes-frappes__frappe-matcha.jpg"],
        ["Frappé Spanish", 30, "milkshakes-frappes__frappe-spanish.jpg"],
      ],
      milkshakesImg
    ),
  },
  {
    id: "virgin-mojito",
    name: "Virgin Mojito",
    tagline: "Fresh, sparkling and alcohol-free",
    image: mojitoImg,
    products: products(
      [
        ["Classique", 20, "virgin-mojito__classique.jpg"],
        ["Bleu Sky", 25, "virgin-mojito__bleu-sky.jpg"],
        ["Mango", 25, "virgin-mojito__mango.jpg"],
        ["Ananas", 25, "virgin-mojito__ananas.jpg"],
        ["Fraise", 25, "virgin-mojito__fraise.jpg"],
      ],
      mojitoImg
    ),
  },
  {
    id: "ice-latte",
    name: "Ice Latte",
    tagline: "Cold coffee with a smooth finish",
    image: iceLatteImg,
    products: products(
      [
        ["Classique", 20, "ice-latte__classique.jpg"],
        ["Vanille", 22, "ice-latte__vanille.jpg"],
        ["Caramel", 22, "ice-latte__caramel.jpg"],
        ["Chocolat", 22, "ice-latte__chocolat.jpg"],
        ["Matcha Latte", 25, "ice-latte__matcha-latte.jpg"],
        ["Matcha Coconut", 30, "ice-latte__matcha-coconut.jpg"],
        ["Matcha Strawberry", 30, "ice-latte__matcha-strawberry.jpg"],
      ],
      iceLatteImg
    ),
  },
  {
    id: "jus",
    name: "Jus Frais (16 OZ)",
    tagline: "Fresh fruit drinks",
    image: jusImg,
    products: products(
      [
        ["Citron", 10, "jus__citron.jpg"],
        ["Banane", 15, "jus__banane.jpg"],
        ["Pomme", 15, "jus__pomme.jpg"],
        ["Orange", 20, "jus__orange.jpg"],
        ["Avocat", 20, "jus__avocat.jpg"],
        ["Fraise", 20, "jus__fraise.jpg"],
        ["Mangue", 20, "jus__mangue.jpg"],
        ["Ananas", 20, "jus__ananas.jpg"],
        ["Avocat Fruit Sec", 25, "jus__avocat-fruit-sec.jpg"],
        ["Paradise", 30, "jus__paradise.jpg"],
        ["Za3za3", 30, "jus__za3za3.jpg"],
      ],
      jusImg
    ),
  },
  {
    id: "boissons-chaudes",
    name: "Boissons Chaudes",
    tagline: "Warm coffee and comforting drinks",
    image: boissonsChaudesImg,
    products: products(
      [
        ["Espresso", 12, "boissons-chaudes__espresso.jpg"],
        ["Macchiato", 12, "boissons-chaudes__macchiato.jpg"],
        ["Bombon", 12, "boissons-chaudes__bombon.jpg"],
        ["Double", 12, "boissons-chaudes__double.jpg"],
        ["Americano", 12, "boissons-chaudes__americano.jpg"],
        ["Latte", 15, "boissons-chaudes__latte.jpg"],
        ["Chocolat Chaud", 15, "boissons-chaudes__chocolat-chaud.jpg"],
        ["Cappuccino Italien", 15, "boissons-chaudes__cappuccino-italien.jpg"],
        ["Cappuccino Viennois", 18, "boissons-chaudes__cappuccino-viennois.jpg"],
        ["Mocha / Vanille / Caramel", 20, "boissons-chaudes__mocha-vanille-caramel.jpg"],
      ],
      boissonsChaudesImg
    ),
  },
  {
    id: "sweets-qashtouta",
    name: "Sweets & Qachtouta",
    tagline: "Mini cups and Moroccan-style sweet trays",
    image: qashtoutaImg,
    products: products(
      [
        ["Sweet Cup Oreo", 15, "sweets-qashtouta__sweet-cup-oreo.jpg"],
        ["Sweet Cup Lotus", 15, "sweets-qashtouta__sweet-cup-lotus.jpg"],
        ["Sweet Cup Citron", 15, "sweets-qashtouta__sweet-cup-citron.jpg"],
        ["Sweet Cup Kinder", 15, "sweets-qashtouta__sweet-cup-kinder.jpg"],
        ["Sweet Cup Kunafa", 15, "sweets-qashtouta__sweet-cup-kunafa.jpg"],
        ["Sweet Cup Mangue", 15, "sweets-qashtouta__sweet-cup-mangue.jpg"],
        ["Sweet Cup Framboise", 15, "sweets-qashtouta__sweet-cup-framboise.jpg"],
        ["Qachtouta Chocolat", 35, "sweets-qashtouta__qachtouta-chocolat.jpg"],
        ["Qachtouta Oreo", 35, "sweets-qashtouta__qachtouta-oreo.jpg"],
        ["Qachtouta Lotus", 35, "sweets-qashtouta__qachtouta-lotus.jpg"],
        ["Qachtouta Kinder Bueno", 35, "sweets-qashtouta__qachtouta-kinder-bueno.jpg"],
        ["Qachtouta Framboise", 35, "sweets-qashtouta__qachtouta-framboise.jpg"],
        ["Qachtouta Pistache", 40, "sweets-qashtouta__qachtouta-pistache.jpg"],
        ["Qachtouta Mangue", 40, "sweets-qashtouta__qachtouta-mangue.jpg"],
        ["Qachtouta Dubai", 40, "sweets-qashtouta__qachtouta-dubai.jpg"],
        ["Qachtouta Mix", 40, "sweets-qashtouta__qachtouta-mix.jpg"],
      ],
      qashtoutaImg
    ),
  },
  {
    id: "extras",
    name: "Extras",
    tagline: "Add scoops and toppings to your order",
    image: extrasImg,
    products: products(
      [
        ["1 Boule Glace", 8, "extras__1-boule-glace.jpg"],
        ["2 Boules Glace", 14, "extras__2-boules-glace.jpg"],
        ["3 Boules Glace", 19, "extras__3-boules-glace.jpg"],
        ["Mutella", 8, "extras__mutella.jpg"],
        ["Topping Pistache", 10, "extras__topping-pistache.jpg"],
        ["Topping Biscoff", 10, "extras__topping-biscoff.jpg"],
        ["Extra Banane", 3, "extras__extra-banane.jpg"],
        ["Extra Kunafa", 3, "extras__extra-kunafa.jpg"],
        ["Extra Oreo", 3, "extras__extra-oreo.jpg"],
        ["Extra Fruits Secs", 5, "extras__extra-fruits-secs.jpg"],
        ["Extra Kitkat", 8, "extras__extra-kitkat.jpg"],
        ["Crème Biscoff", 10, "extras__creme-biscoff.jpg"],
        ["Crème Pistache", 10, "extras__creme-pistache.jpg"],
        ["Crème Kinder", 10, "extras__creme-kinder.jpg"],
        ["Milka Tablet", 14, "extras__milka-tablet.jpg"],
      ],
      extrasImg
    ),
  },
];

export const galleryImages = [
  crepesSucreesImg,
  milkshakesImg,
  pancakesImg,
  bubbleWaffleImg,
  mojitoImg,
  iceLatteImg,
  crepesSaleesImg,
  qashtoutaImg,
  extrasImg,
  boissonsChaudesImg,
  jusImg,
];
