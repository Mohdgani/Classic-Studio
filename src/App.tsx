import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SuitHero from "./components/SuitHero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductPage from "./pages/Product";
import IndProduct from "./pages/IndProduct";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Social from "../src/Social";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL || "/"}>
      <ScrollToTop />
      <main className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-emerald-950 relative">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            {/* Home route */}
            <Route
              path="/"
              element={
                <>
                  <SuitHero />
                  <Services />
                  <Gallery />
                  <Process />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Product page route */}
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<IndProduct />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Social />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_60%)]" />
      </main>
    </Router>
  );
}
