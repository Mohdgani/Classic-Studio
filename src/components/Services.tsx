import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Shirt, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Custom Suit Stitching",
    desc: "Tailored suits for men & women",
  },
  {
    icon: Shirt,
    title: "Alterations",
    desc: "Perfect fit adjustments",
  },
  {
    icon: Sparkles,
    title: "Embroidery & Lining",
    desc: "Premium finishing touches",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Card className="border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon className="mx-auto h-10 w-10 text-emerald-950 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
