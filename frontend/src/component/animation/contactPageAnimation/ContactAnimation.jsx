"use client";

import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

const RandomLetterSwapForward = ({
  label,
  reverse = true,
  transition = {
    type: "spring",
    duration: 0.8,
  },
  staggerDuration = 0.02,
  className,
  onClick,
  ...props
}) => {
  const [scope, animate] = useAnimate();
  const [blocked, setBlocked] = useState(false);

  const mergeTransition = (transition, i) => ({
    ...transition,
    delay: i * staggerDuration,
  });

  useEffect(() => {
    if (blocked) return;

    setBlocked(true);

    const shuffledIndices = Array.from(
      { length: label.length },
      (_, i) => i
    ).sort(() => Math.random() - 0.5);

    for (let i = 0; i < label.length; i++) {
      const randomIndex = shuffledIndices[i];

      animate(
        `.letter-${randomIndex}`,
        {
          y: reverse ? "100%" : "-100%",
        },
        mergeTransition(transition, i)
      ).then(() => {
        animate(
          `.letter-${randomIndex}`,
          {
            y: 0,
          },
          {
            duration: 0,
          }
        );
      });

      animate(
        `.letter-secondary-${randomIndex}`,
        {
          top: "0%",
        },
        mergeTransition(transition, i)
      ).then(() => {
        animate(
          `.letter-secondary-${randomIndex}`,
          {
            top: reverse ? "-100%" : "100%",
          },
          {
            duration: 0,
          }
        );
      });
    }

    const timeout = setTimeout(() => {
      setBlocked(true); 
    }, 2000);

    return () => clearTimeout(timeout);
  }, [animate, label, reverse, transition, staggerDuration, blocked]);

  return (
    <motion.span
      className={`flex justify-center items-center relative overflow-hidden ${className}`}
      onClick={onClick}
      ref={scope}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {label.split("").map((letter, i) => (
        <span
          className="whitespace-pre relative flex"
          key={i}
          aria-hidden="true"
        >
          <motion.span
            className={`relative pb-2 letter-${i}`}
            style={{ top: 0 }}
          >
            {letter}
          </motion.span>
          <motion.span
            className={`absolute letter-secondary-${i}`}
            style={{ top: reverse ? "-100%" : "100%" }}
          >
            {letter}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default RandomLetterSwapForward;
