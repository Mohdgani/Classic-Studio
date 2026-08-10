import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ClothWave from "./assets/fabric.png";

export default function ClothScrollWave() {
  const { scrollYProgress } = useScroll();

  // Vertical movement and subtle rotation
  // Left cloth transforms
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 1100]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Right cloth transforms (inverted)
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <>
      {/* Left cloth */}
      <motion.img
        src={ClothWave}
        alt="Cloth wave left"
        style={{ y: yLeft, rotate: rotateLeft, opacity }}
        className="fixed top-[70vh] lg:top-0 lg:left-[-30%] right-[40%] sm:top-[150vh]] md:top-[30%]
                   w-152 sm:w-148 md:w-164 lg:w-230 rotate-60
                   pointer-events-none z-20 cloth-wave cloth-mobile"
      />

      {/* Right cloth */}
      <motion.img
        src={ClothWave}
        alt="Cloth wave right"
        style={{ y: yRight, rotate: rotateRight, opacity }}
        className="fixed top-0 lg:left-[55%] left-[35%] 
                   w-152 sm:w-148 md:w-164 lg:w-230 rotate-60 
                   pointer-events-none z-20 cloth-wave"
      />
    </>
  );
}
