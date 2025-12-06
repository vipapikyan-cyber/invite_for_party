"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./index.module.css";

export function LettersPullUp({
  children,
  className = "",
  wrapperClassName = "",
  containerClassName = "",
  duration = 0.3,
}) {
  const splittedText = children.split("");

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration,
      },
    }),
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const gradientStyle = {
    // display: 'inline-flex',
    backgroundImage: 'linear-gradient(135deg, #868686 0%, #d0d0d0 25%, #ffffff 50%, #d0d0d0 75%, #868686 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <span className={`${styles.wrapper} ${wrapperClassName}`}>
      <span 
        className={`${styles.container} ${containerClassName}`}
        style={gradientStyle}
      >
        {splittedText.map((current, i) => (
          <motion.span
            key={i}
            ref={ref}
            variants={pullupVariant}
            initial="initial"
            animate={isInView ? "animate" : ""}
            custom={i}
            className={className}
          >
            {current == " " ? <span>&nbsp;</span> : current}
          </motion.span>
        ))}
      </span>
    </span>
  );
}