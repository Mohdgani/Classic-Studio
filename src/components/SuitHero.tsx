import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import ClothWave from "../ClothWave";

import CanvasParticles from "../CanvasParticles";

export default function SuitHero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ClothWave />
      <CanvasParticles />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-5xl md:text-6xl font-bold mb-4"
      >
        Classic Studio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg md:text-xl max-w-2xl px-4 mb-8 text-white/90"
      >
        Custom Suit Stitching • Alterations • Premium Fabrics
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={() =>
            window.open(
              "https://wa.me/917395948496?text=" +
                encodeURIComponent(
                  "I'd like to inquire about your suit stitching services.",
                ),
              "_blank",
            )
          }
          className="bg-gold text-emerald-950 hover:bg-gold/90 font-semibold"
        >
          <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
        </Button>

        <Button
          variant="outline"
          className="border-gold/60 text-black hover:bg-white/10"
        >
          <Phone className="mr-2 h-4 w-4" /> Contact Us
        </Button>
      </div>

      {/* <div className="absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.25),transparent_65%)] pointer-events-none" /> */}
    </section>
  );
}
