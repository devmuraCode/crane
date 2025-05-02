import React from "react";
import styles from "./CardDetails.module.scss";
import Image from "next/image";
import { Details } from "@/types/details";

interface Props {
  machine: Details;
}

const CardDetails: React.FC<Props> = ({ machine }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={machine.image}
          alt={machine.name}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className={styles.details}>
        <p>
          <strong>Шасси:</strong> {machine.name}
        </p>
        {/* <p>
          <strong>Колесная формула:</strong> {machine.wheelFormula}
        </p>
        <p>
          <strong>Тип установки:</strong> {machine.installationType}
        </p>
        <p>
          <strong>Грузоподъёмность:</strong> {machine.capacity}
        </p>
        <p>
          <strong>Вылет стрелы:</strong> {machine.boomLength}
        </p>
        <p>
          <strong>Высота подъема корзины:</strong> {machine.basketHeight}
        </p>
        <p>
          <strong>Глубина бурения:</strong> {machine.drillingDepth}
        </p>
        <p>
          <strong>Диаметр бурения:</strong> {machine.drillingDiameter}
        </p> */}

        <a href="#" className={styles.link}>
          Подробнее
        </a>

        <div className={styles.actions}>
          <button className={styles.primary}>Заказать товар</button>
          <button className={styles.secondary}>Задать вопрос</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
