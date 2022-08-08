import React, { useState, useMemo } from "react";
import clsx from "clsx";

import {
  CarouselContext,
  CarouselContextValue,
} from "contexts/CarouselContext";

import styles from "./Carousel.module.scss";

export interface CarouselProps {
  children: React.ReactNode;
  direction: "horizontal" | "vertical";
  containerWidth?: number;
  duration?: number;
}

export function Carousel({
  children,
  direction,
  containerWidth = 800,
  duration = 0.7,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const contextValue = useMemo<CarouselContextValue>(
    () => ({
      currentSlide,
      direction,
      duration,
    }),
    [direction, currentSlide, duration]
  );

  const containerStyles = useMemo(
    () => ({
      width: `${containerWidth}px`,
    }),
    [containerWidth]
  );

  const childrenLength = React.Children.count(children);

  const handlePreviousClick = () => {
    setCurrentSlide((prev) => {
      const newActiveSlide = prev || childrenLength;
      return newActiveSlide - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % childrenLength);
  };

  return (
    <div className={clsx(styles.carousel, styles[direction])}>
      <button className={styles.control} onClick={handlePreviousClick}>
        {direction === "horizontal" ? "<" : "↑"}
      </button>
      <CarouselContext.Provider value={contextValue}>
        <ul
          className={clsx(styles.slidesContainer, styles[direction])}
          style={containerStyles}
        >
          {children}
        </ul>
      </CarouselContext.Provider>
      <button className={styles.control} onClick={handleNextClick}>
        {direction === "horizontal" ? ">" : "↓"}
      </button>
    </div>
  );
}
