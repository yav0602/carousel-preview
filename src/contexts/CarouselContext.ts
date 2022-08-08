import { createContext } from "react";

export interface CarouselContextValue {
  direction: "horizontal" | "vertical";
  currentSlide: number;
  duration: number;
  // slidesPerView: number;
}

export const CarouselContext = createContext<CarouselContextValue>({
  direction: "horizontal",
  currentSlide: 0,
  duration: 0.3,
});
