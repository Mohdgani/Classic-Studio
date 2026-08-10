import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu automatically when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-gold/20">
      <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4">
        {/* Brand */}
        <Link
          to="/"
          className="text-white font-display tracking-[0.25em] text-sm sm:text-base uppercase whitespace-nowrap"
        >
          Classic<span className="text-gold">Studio</span>
        </Link>

        {/* Desktop centered links */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-semibold text-white absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors ${
                pathname === link.to ? "text-gold" : "hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-white hover:text-gold transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-md border-t border-gold/20 px-6 py-3 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-3 text-sm uppercase tracking-widest font-semibold transition-colors ${
                pathname === link.to
                  ? "text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
