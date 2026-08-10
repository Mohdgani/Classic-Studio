import React from "react";

const steps = [
  "Consultation & Measurements",
  "Fabric Selection",
  "Cutting & Stitching",
  "Trial Fitting",
  "Final Adjustments & Delivery",
];

export default function Process() {
  return (
    <section className="min-h-screen flex justify-cener items-center bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Process
        </h2>

        <div className="space-y-5 md:space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-950 text-white flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <p className="text-lg text-gray-800 pt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
