import React from "react";
import { Link } from "react-router-dom";
import { products, premiumFabrics } from "../../src/products";

export default function ProductPage() {
  return (
    <section className="text-foreground min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* ================= CLOTHES SECTION ================= */}
        <div className="text-center mb-6 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-gold block mb-0 font-semibold">
            The Imperial Atelier
          </span>
          <h1 className="text-4xl sm:text-5xl font-normal text-emerald-950 tracking-wide font-display mb-4">
            Our Masterpieces
          </h1>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-gold/40"></div>
            <span className="text-gold text-sm">✦</span>
            <div className="h-[1px] w-16 bg-gold/40"></div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto font-light">
            Exquisite heritage cuts handcrafted with premium Italian wool, fine
            brocades, and flawless precision.
          </p>
        </div>

        {/* Upgraded Clothes Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-0 auto-rows-fr pb-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden group border border-neutral-200/80 hover:border-gold transition-all duration-500 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(212,175,55,0.15)] hover:-translate-y-1 relative"
            >
              {/* Luxury Image Area */}
              <div className="relative overflow-hidden aspect-[3/4] bg-neutral-50 m-3 rounded-lg border border-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-emerald-950 text-gold text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Detail Presentation Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-base font-semibold text-emerald-950 tracking-wide font-display group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>

                <div className="border-t border-neutral-100 flex items-center justify-between pt-2.5">
                  <p className="text-emerald-950 font-bold text-base">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-xs uppercase tracking-wider font-semibold text-emerald-950 hover:text-gold transition-colors duration-300 flex items-center gap-1 bg-neutral-50 hover:bg-gold-light/20 px-3 py-1.5 rounded-md border border-neutral-200/60"
                  >
                    View <span className="text-[10px]">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FABRICS SECTION ================= */}
        <div className="border-t border-neutral-200/70 pt-14 mb-0">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-gold block mb-3 font-semibold">
              Premium Material Library
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-emerald-950 tracking-wide font-display mb-4">
              The Fabric Vault
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto font-light">
              Select your canvas from our curated collection of raw materials
              sourced globally from world-renowned legacy mills.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-0 auto-rows-fr">
            {premiumFabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-white border rounded-xl p-4 group hover:border-gold/60 transition-all flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video rounded-lg bg-neutral-50 mb-4 border">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-emerald-950 text-white text-[9px] uppercase px-2 py-0.5 rounded-md">
                    {fabric.origin}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-1">
                  {fabric.type}
                </span>
                <h3 className="text-base font-semibold text-emerald-950 mb-1.5">
                  {fabric.name}
                </h3>
                <p className="text-neutral-500 text-xs font-light leading-relaxed mb-4">
                  {fabric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Booking Engagement Banner */}
        <div className="mt-28 border border-neutral-200/80 bg-white p-8 md:p-12 text-center max-w-4xl mx-auto rounded-xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
          <div className="absolute inset-1.5 border border-gold/10 pointer-events-none rounded-lg"></div>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-wide text-emerald-950 mb-2 font-display">
            Experience Bespoke Luxury
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto font-light">
            Secure a private consultation block with our master tailor for
            personal fittings and textile selections.
          </p>
          <a
            href="/book-fitting"
            className="inline-block bg-emerald-950 hover:bg-emerald-900 text-white text-xs uppercase tracking-widest font-semibold px-10 py-4 rounded-md shadow-md transition-colors duration-300"
          >
            Request Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
