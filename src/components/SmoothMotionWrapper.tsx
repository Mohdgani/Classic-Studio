import React from "react";
import { motion } from "motion/react";

export function SmoothMotionImg({
  src,
  alt,
  className,
  style,
  animate,
  transition,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  animate?: any;
  transition?: any;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={{ ...style, willChange: "transform" }}
      animate={animate}
      transition={transition}
    />
  );
}
