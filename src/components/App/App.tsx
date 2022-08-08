import React, { useState } from "react";

import { Carousel } from "components/Carousel";
import { Slide } from "components/Slide";

import styles from "./App.module.scss";

type Direction = "horizontal" | "vertical";

function App() {
  const [direction, setDirection] = useState<Direction>("horizontal");

  const onDirectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirection(e.target.value as Direction);
  };

  return (
    <div className={styles.centerContent}>
      <h1 className={styles.title}>
        Лабораторна робота №7. "Слайдер з використанням React"
        <br />
        Виконав Єрохін Артур Вадимович. Гр. 6.1219-1
      </h1>
      <Carousel direction={direction}>
        <Slide className={styles.slide1}>Slide 1</Slide>
        <Slide className={styles.slide2}>Slide 2</Slide>
        <Slide className={styles.slide3}>Slide 3</Slide>
      </Carousel>
      <div className={styles.controls}>
        <fieldset>
          <legend>Оберіть напрямок слайдів</legend>
          <input
            type="radio"
            id="horizontal"
            value="horizontal"
            name="direction"
            checked={direction === "horizontal"}
            onChange={onDirectionChange}
          />
          <label htmlFor="horizontal">Горизонтально</label>
          <input
            type="radio"
            id="vertical"
            value="vertical"
            name="direction"
            checked={direction === "vertical"}
            onChange={onDirectionChange}
          />
          <label htmlFor="vertical">Вертикально</label>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
