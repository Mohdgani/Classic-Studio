import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-emerald-950 text-white text-center border-t border-gold/20">
      <div className="max-w-5xl mx-auto px-4 space-y-2">
        <p className="font-semibold">Classic Studio • Chennai</p>
        <p>📞 +91 98765 43210 • WhatsApp Available</p>
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} Classic Studio
        </p>
      </div>
    </footer>
  );
}
