import { React, useState } from "react";

import { useParams } from "react-router-dom";
import { products, premiumFabrics } from "../../src/products";

export default function IndProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedFabric, setSelectedFabric] = useState(
    product?.fabrics[0] || null,
  );

  if (!product) {
    return <p className="text-center mt-20">Product not found.</p>;
  }

  return (
    <section className="text-foreground min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans islamic-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-10 text-xs uppercase tracking-widest text-muted-foreground">
          {/* <a href="/products" className="hover:text-gold transition-colors"> */}
          {/* Collection */}
          {/* </a> */}
          <span className="mx-2">&middot;</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative overflow-hidden rounded-lg border border-border bg-muted aspect-[3/4] shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2 block">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-normal text-emerald-950 font-display tracking-wide mb-3">
              {product.name}
            </h1>
            <p className="text-xl font-semibold text-emerald-950 mb-6 font-sans">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Fabric selector */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                Select Premium Material Base:{" "}
                <span className="text-foreground font-normal normal-case">
                  {selectedFabric?.name}
                </span>
              </span>
              {product.fabrics?.length > 0 && (
                <div className="flex gap-3">
                  {product.fabrics.map((fabric) => (
                    <button
                      key={fabric.name}
                      onClick={() => setSelectedFabric(fabric)}
                      style={{ backgroundColor: fabric.colorCode }}
                      className={`w-8 h-8 rounded-full border shadow-inner transition-all duration-300 ${
                        selectedFabric?.name === fabric.name
                          ? "ring-2 ring-gold scale-110 border-white"
                          : "border-border hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Specs */}
            <ul className="space-y-2 text-sm text-muted-foreground font-light mb-8">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-gold text-[10px]">✦</span>
                  {detail}
                </li>
              ))}
            </ul>
            {/* Book Consultation button */}
            <div className="mt-6">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/918838912438?text=" +
                      encodeURIComponent(
                        `Hello, I’d like to book a consultation for ${product.name}.`,
                      ),
                    "_blank",
                  )
                }
                className="px-6 py-3 bg-gold text-emerald-950 font-semibold rounded-md shadow hover:bg-gold/90 transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
