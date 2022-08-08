import React, { useContext } from "react";

import { CarouselContext } from "contexts/CarouselContext";

import styles from "./Slide.module.scss";
import clsx from "clsx";

export interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const getTransformProperty = (
  direction: "vertical" | "horizontal",
  currentSlide: number
) => {
  const axis = direction === "horizontal" ? "X" : "Y";
  return `translate${axis}(-${currentSlide * 100}%)`;
};

export function Slide({ children, className }: SlideProps) {
  const { currentSlide, direction, duration } = useContext(CarouselContext);

  return (
    <div
      className={clsx(styles.slide, className)}
      style={{
        transition: `${duration}s`,
        transform: getTransformProperty(direction, currentSlide),
      }}
    >
      {children}
    </div>
  );
}
