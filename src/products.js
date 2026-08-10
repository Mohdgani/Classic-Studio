// src/data/products.js
import suit1Img from "./assets/suit1.png";
import suit2Img from "./assets/suit2.png";
import suit3Img from "./assets/suit3.png";
import suit4Img from "./assets/suit4.png";

import shimmerImg from "./assets/shimmer.png";

export const products = [
  {
    id: 1,
    name: "The Royal Sherwani",
    category: "Bespoke Groom",
    price: 84999,
    image: suit1Img,
    tag: "Signature",
    description: "A majestic masterpiece hand-tailored for historic moments...",
    details: [
      "Fabric: 100% Pure Premium Brocade Silk",
      "Construction: Full Canvas Interlining",
      "Buttons: Custom Hand-Polished Brass",
      "Production Time: 21-28 Days from Consultation",
    ],
    fabrics: [
      { name: "Imperial Gold Brocade", colorCode: "#d4af37" },
      { name: "Deep Emerald Silk", colorCode: "#022c22" },
      { name: "Ivory Cream Wool", colorCode: "#fdfcf0" },
    ],
  },
  {
    id: 2,
    name: "Classic Jodhpuri Suit",
    category: "Heritage Wear",
    price: 54999,
    image: suit2Img,
    tag: "Premium",
    description: "A majestic masterpiece hand-tailored for historic moments...",
    details: [
      "Fabric: 100% Pure Premium Brocade Silk",
      "Construction: Full Canvas Interlining",
      "Buttons: Custom Hand-Polished Brass",
      "Production Time: 21-28 Days from Consultation",
    ],
    fabrics: [
      { name: "Imperial Gold Brocade", colorCode: "#d4af37" },
      { name: "Deep Emerald Silk", colorCode: "#022c22" },
      { name: "Ivory Cream Wool", colorCode: "#fdfcf0" },
    ],
  },
  {
    id: 3,
    name: "Italian Wool Bandhgala",
    category: "Formal Evening",
    price: 69999,
    image: suit3Img,
    tag: "Trending",
    description: "A majestic masterpiece hand-tailored for historic moments...",
    details: [
      "Fabric: 100% Pure Premium Brocade Silk",
      "Construction: Full Canvas Interlining",
      "Buttons: Custom Hand-Polished Brass",
      "Production Time: 21-28 Days from Consultation",
    ],
    fabrics: [
      { name: "Imperial Gold Brocade", colorCode: "#d4af37" },
      { name: "Deep Emerald Silk", colorCode: "#022c22" },
      { name: "Ivory Cream Wool", colorCode: "#fdfcf0" },
    ],
  },
  {
    id: 4,
    name: "Egyptian Cotton Kurta",
    category: "Luxury Essentials",
    price: 8999,
    image: suit4Img,
    tag: "New",
    description: "A majestic masterpiece hand-tailored for historic moments...",
    details: [
      "Fabric: 100% Pure Premium Brocade Silk",
      "Construction: Full Canvas Interlining",
      "Buttons: Custom Hand-Polished Brass",
      "Production Time: 21-28 Days from Consultation",
    ],
    fabrics: [
      { name: "Imperial Gold Brocade", colorCode: "#d4af37" },
      { name: "Deep Emerald Silk", colorCode: "#022c22" },
      { name: "Ivory Cream Wool", colorCode: "#fdfcf0" },
    ],
  },
  // add more products here...
];

export const premiumFabrics = [
  {
    id: "f1",
    name: "Super 160s Merino Wool",
    origin: "Biella, Italy",
    type: "Four-Season Suitings",
    image: shimmerImg,
    description:
      "Ultra-fine weave offering unparalleled drape, breathability, and resilient crease recovery.",
  },
  {
    id: "f2",
    name: "Pure Mulberry Raw Silk",
    origin: "Banaras, India",
    type: "Heritage Festive Wear",
    image: shimmerImg,
    description:
      "Richly textured with a natural golden sheen, perfect for structural wedding garments.",
  },
  {
    id: "f3",
    name: "Giza 87 Egyptian Cotton",
    origin: "Alexandria, Egypt",
    type: "Luxury Shirting Matrix",
    image: shimmerImg,
    description:
      "The world’s highest grade long-staple cotton, yielding an exceptionally smooth silky touch.",
  },
];
