"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import GradientText from "./GradientText/GradientText";

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 210,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.36,
  sx = {},
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(4px)", opacity: 0, y: -30 }
        : { filter: "blur(4px)", opacity: 0, y: 30 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(2px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  const animateKeyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshots),
    [fromSnapshot, toSnapshots]
  );

  return (
    <p
      // fontFamily="Sora"
      // fontWeight={500}
      // className={className}
      // sx={{
      //   fontSize: { xs: "2rem", md: "3rem" },
      //   display: "flex",
      //   flexWrap: "wrap",
      //   lineHeight: 1.6,
      //   ...sx,
      // }}
      className={className}
    >
      {elements.map((segment, index) => {
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        // Don't animate if segment is just space
        if (segment.trim() === "") {
          return <span key={index}>&nbsp;</span>;
        }

        // // Skip animation for special brand word
        // if (segment.toLowerCase() === "automely") {
        //   return <GradientText key={index}>{segment}</GradientText>;
        // }

        return (
          <motion.span
            key={index}
            className="inline-block will-change-[transform,filter,opacity]"
            initial={fromSnapshot}
            whileInView={animateKeyframes}
            transition={spanTransition}
            viewport={{ once: true, amount: threshold }}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {/* {segment} */}
            {segment === " " ? (
              "\u00A0"
            ) : highlightedWords.includes(segment.toLowerCase()) ? (
              <GradientText className={className}>{segment}</GradientText>
            ) : (
              segment
            )}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;

let highlightedWords = ["brand."];
