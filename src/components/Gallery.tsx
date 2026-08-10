import React from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const baseImages = [
    new URL("../assets/suit1.png", import.meta.url).toString(),
    new URL("../assets/suit2.png", import.meta.url).toString(),
    new URL("../assets/suit3.png", import.meta.url).toString(),
    new URL("../assets/suit4.png", import.meta.url).toString(),
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden w-full suite-gallery">
      <div className="max-w-full mx-auto px-1 w-full relative">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Gallery
        </h2>

        {/* STATIC RAIL */}
        <div className="w-full absolute top-[58px] md:top-[90px] left-0 right-0 z-20 pointer-events-none px-2 md:px-6">
          <img
            src={new URL("../assets/Rail2.png", import.meta.url).toString()}
            alt="Wardrobe rail"
            className="w-full h-8 md:h-12 scale-y-25 md:scale-y-20 scale-x-220 translate-y-[3.6rem] md:translate-y-[3.6rem] object-contain"
          />
        </div>

        {/* Mask container */}
        <div className="w-full overflow-x-auto overflow-y-hidden md:overflow-hidden relative pt-14 md:pt-16 pb-1">
          <motion.div
            className="flex justify-start md:justify-center gap-6 sm:gap-12 md:gap-24 px-4 md:px-0"
            style={{ willChange: "transform" }}
          >
            {baseImages.map((src, i) => {
              const ref = React.useRef(null);
              const inView = useInView(ref, { amount: 0.5 });

              return (
                <Link
                  to="/products"
                  key={i}
                  ref={ref}
                  className={`w-[180px] sm:w-[160px] md:w-[220px] flex flex-col items-center flex-shrink-0 select-none ${
                    inView ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="aspect-[3/4] w-[200px] sm:w-[160px] md:w-[260px]">
                    <motion.img
                      src={src}
                      alt={`Suit ${i + 1}`}
                      className="max-h-full object-contain origin-top"
                      style={{ filter: "contrast(1.04) brightness(1.05)" }}
                      animate={{ rotate: [-4, 4, -4] }}
                      transition={{
                        ease: "easeInOut",
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  </div>
                  <div className="relative mb-4 md:mb-5 w-[100px] sm:w-[130px] md:w-[140px] h-[16px] md:h-[20px]">
                    <div className="absolute inset-0 rounded-full bg-black/40 blur-sm opacity-90"></div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
        <div className="text-center mt-14 md:mt-20">
          <Link
            to="/products"
            className="inline-block px-12 sm:px-16 py-3 bg-gold text-emerald-950 font-semibold rounded-md shadow hover:bg-gold/90 transition-colors"
          >
            Explore Suit
          </Link>
        </div>
      </div>
    </section>
  );
}
