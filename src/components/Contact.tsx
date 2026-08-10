import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const occasion = (document.getElementById("occasion") as HTMLInputElement)
      .value;
    const details = (document.getElementById("details") as HTMLTextAreaElement)
      .value;

    const msg =
      `Hello, my name is ${name}.` +
      ` Occasion/Date: ${occasion}.` +
      (details ? ` Notes: ${details}.` : "") +
      ` I'd like to book a suit stitching appointment.`;

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section className=" min-h-screen flex justify-cener items-center py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Book an Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 bg-white border border-gold/20 rounded-2xl p-6 shadow-sm"
        >
          <Input id="name" placeholder="Your Name" required />
          <Input id="occasion" placeholder="Occasion / Date" required />
          <Textarea
            id="details"
            placeholder="Measurements / Notes (optional)"
          />

          <Button
            type="submit"
            className="w-full bg-gold text-emerald-950 hover:bg-gold/90 font-semibold"
          >
            Send via WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}
