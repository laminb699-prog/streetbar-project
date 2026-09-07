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

/**
 * A few prices/names below are best-effort readings from a low-resolution
 * photo of the printed menu board and are marked "CONFIRM?". Please check
 * these against the real menu and correct any that are wrong.
 */

const images = {
  crepe: "https://images.pexels.com/photos/20582722/pexels-photo-20582722.jpeg?auto=compress&cs=tinysrgb&w=940",
  pancake: "https://images.pexels.com/photos/5317627/pexels-photo-5317627.jpeg?auto=compress&cs=tinysrgb&w=940",
  waffle: "https://images.pexels.com/photos/25757603/pexels-photo-25757603.jpeg?auto=compress&cs=tinysrgb&w=940",
  milkshake: "https://images.pexels.com/photos/6463660/pexels-photo-6463660.jpeg?auto=compress&cs=tinysrgb&w=940",
  mojito: "https://images.pexels.com/photos/4051220/pexels-photo-4051220.jpeg?auto=compress&cs=tinysrgb&w=940",
  latte: "https://images.pexels.com/photos/18142624/pexels-photo-18142624.jpeg?auto=compress&cs=tinysrgb&w=940",
  coffee: "https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&w=940",
  iceCream: "https://images.pexels.com/photos/1352282/pexels-photo-1352282.jpeg?auto=compress&cs=tinysrgb&w=940",
  sweet: "https://images.pexels.com/photos/7021882/pexels-photo-7021882.jpeg?auto=compress&cs=tinysrgb&w=940",
  juice: "https://images.pexels.com/photos/298720/pexels-photo-298720.jpeg?auto=compress&cs=tinysrgb&w=940",
  salty: "https://images.pexels.com/photos/11094175/pexels-photo-11094175.jpeg?auto=compress&cs=tinysrgb&w=940",
  extras: "https://images.pexels.com/photos/33312981/pexels-photo-33312981.jpeg?auto=compress&cs=tinysrgb&w=940",
};

const products = (names: Array<[string, number]>, image: string): Product[] =>
  names.map(([name, price]) => ({ name, price, image }));

export const categories: Category[] = [
  {
    id: "crepes-sucrees",
    name: "Crêpes Sucrées",
    tagline: "From classic to signature VIP crêpes",
    image: images.crepe,
    products: products(
      [
        ["Crêpe Nutella", 17],
        ["Crêpe Spéciale", 23], // CONFIRM? banane/nutella combo
        ["Crêpe Oreo", 25],
        ["Crêpe Amlou", 27],
        ["Crêpe Fruits Frais", 30], // CONFIRM? kiwi/fraise crêpe
        ["Crêpe Pistache", 30],
        ["Crêpe Biscoff", 30],
        ["Crêpe Kinder Bueno", 35],
        ["Crêpe Dubai", 39],
        ["Crêpe King Street", 40],
        ["Crêpe VIP", 50],
      ],
      images.crepe
    ),
  },
  {
    id: "crepes-salees",
    name: "Crêpes Salées",
    tagline: "Savoury crêpes prepared to order",
    image: images.salty,
    products: products(
      [
        ["Fromage", 25],
        ["Pizza", 25],
        ["Triple Fromage", 30],
        ["Jambon", 30], // CONFIRM? name unclear on poster
        ["Thon", 35], // CONFIRM? name unclear on poster
        ["Pizza Thon", 35],
      ],
      images.salty
    ),
  },
  {
    id: "pancakes",
    name: "Pancakes",
    tagline: "Fluffy stacks made for sharing",
    image: images.pancake,
    products: products(
      [
        ["Miel & Beurre", 15],
        ["Nutella", 20],
        ["Nutella Banane", 25], // CONFIRM? name unclear on poster
        ["Nutella Pistache", 30],
        ["Royal", 40],
      ],
      images.pancake
    ),
  },
  {
    id: "bubble-waffle",
    name: "Bubble Waffle",
    tagline: "Crisp outside, soft inside",
    image: images.waffle,
    products: products(
      [
        ["Chocolate", 20],
        ["Banane Chocolat", 25],
        ["M&M's Chocolat", 30], // CONFIRM? colourful candy topping
        ["Pistache", 35],
        ["King Street", 40], // CONFIRM? name unclear on poster
      ],
      images.waffle
    ),
  },
  {
    id: "milkshakes-frappes",
    name: "Milkshakes & Frappés",
    tagline: "Thick, creamy and freshly blended",
    image: images.milkshake,
    products: products(
      [
        ["Milkshake Chocolat", 30],
        ["Milkshake Caramel", 30],
        ["Milkshake Vanille", 30],
        ["Milkshake Oreo", 30],
        ["Milkshake Fraise", 30],
        ["Milkshake Biscoff", 30],
        ["Milkshake Pistache", 35],
        ["Frappé Oreo", 25],
        ["Frappé Chocolat", 25], // CONFIRM? flavour order on poster
        ["Frappé Biscoff", 30], // CONFIRM? flavour order on poster
        ["Frappé Pistache", 30], // CONFIRM? flavour order on poster
        ["Frappé Caramel", 30], // CONFIRM? flavour order on poster
      ],
      images.milkshake
    ),
  },
  {
    id: "virgin-mojito",
    name: "Virgin Mojito",
    tagline: "Fresh, sparkling and alcohol-free",
    image: images.mojito,
    products: products(
      [
        ["Classique", 20],
        ["Bleu Sky", 25],
        ["Mangue", 25],
        ["Orange", 25],
        ["Fraise", 25],
      ],
      images.mojito
    ),
  },
  {
    id: "ice-latte",
    name: "Ice Latte",
    tagline: "Cold coffee with a smooth finish",
    image: images.latte,
    products: products(
      [
        ["Classique", 20],
        ["Vanille", 22],
        ["Caramel", 22],
        ["Chocolat", 22],
        ["Matcha Coco", 28], // CONFIRM? price hard to read
        ["Matcha Fraise", 29], // CONFIRM? price hard to read
        ["Matcha Crème", 26], // CONFIRM? price hard to read
      ],
      images.latte
    ),
  },
  {
    id: "jus",
    name: "Jus Frais (16 OZ)",
    tagline: "Fresh fruit drinks",
    image: images.juice,
    products: products(
      [
        ["Citron", 10],
        ["Banane", 15],
        ["Pomme", 15],
        ["Orange", 20],
        ["Avocat", 20],
        ["Mangue", 20],
        ["Ananas", 20],
        ["Paradis", 20],
        ["Délice", 20], // CONFIRM? name unclear on poster
        ["Avocat Fruit Sec", 25],
      ],
      images.juice
    ),
  },
  {
    id: "boissons-chaudes",
    name: "Boissons Chaudes",
    tagline: "Warm coffee and comforting drinks",
    image: images.coffee,
    products: products(
      [
        ["Espresso", 12],
        ["Macchiato", 12],
        ["Café Bonbon", 12], // CONFIRM? name unclear on poster
        ["Double", 12],
        ["Americano", 12],
        ["Latte", 15],
        ["Chocolat Chaud", 15],
        ["Cappuccino Italien", 15],
        ["Cappuccino Viennois", 18],
        ["Mocha / Vanille / Caramel", 20],
      ],
      images.coffee
    ),
  },
  {
    id: "sweets-qashtouta",
    name: "Sweets & Qashtouta",
    tagline: "Mini cups and Moroccan-style sweet trays",
    image: images.sweet,
    products: products(
      [
        ["Sweet Cup Oreo", 15],
        ["Sweet Cup Biscoff", 15],
        ["Sweet Cup Citron", 15], // CONFIRM? flavour unclear on poster
        ["Sweet Cup Kinder", 15],
        ["Sweet Cup Pistache", 15],
        ["Sweet Cup Mangue", 15],
        ["Sweet Cup Fraise", 15],
        ["Qashtouta Oreo", 35],
        ["Qashtouta Zebra", 35], // CONFIRM? name unclear on poster
        ["Qashtouta Framboise", 35],
        ["Qashtouta Pistache", 40],
        ["Qashtouta Elite", 40], // CONFIRM? name unclear on poster
        ["Qashtouta Dubai", 45], // CONFIRM? name/price unclear on poster
      ],
      images.sweet
    ),
  },
  {
    id: "extras",
    name: "Extras",
    tagline: "Add scoops and toppings to your order",
    image: images.extras,
    products: products(
      [
        ["1 Boule Glace", 8],
        ["2 Boules Glace", 14], // CONFIRM? price partly obscured on poster
        ["Topping Nutella", 8],
        ["Topping Biscoff", 10],
        ["Topping Pistache", 10],
        ["Extra Banane", 3],
        ["Extra Caramel", 3],
        ["Extra Oreo", 3],
        ["Extra Fruits Secs", 5],
        ["Extra Kitkat", 3],
        ["Crème Biscoff", 10],
        ["Crème Pistache", 10],
        ["Crème Caramel", 10],
        ["Milka", 14],
      ],
      images.extras
    ),
  },
];

export const galleryImages = [
  images.crepe,
  images.milkshake,
  images.pancake,
  images.waffle,
  images.mojito,
  images.latte,
  images.iceCream,
  images.salty,
  images.sweet,
  images.extras,
  images.coffee,
  images.juice,
];