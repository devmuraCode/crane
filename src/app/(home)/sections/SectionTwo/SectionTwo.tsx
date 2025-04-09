import Container from "@/components/Container/Container";
import styles from "./SectionTwo.module.scss";
import Image from "next/image";

import uslugi1 from "@/assets/uslugi1.png";
import uslugi2 from "@/assets/uslugi2.png";
import uslugi3 from "@/assets/uslugi3.png";
import uslugi4 from "@/assets/uslugi4.png";

export const SectionTwo = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.card_group}>
          <div className={styles.card}>
            <Image src={uslugi1} alt="" width={80} height={80} />
            <div className={styles.content}>
              <h2>Гарантия качества</h2>
              <p>Весь товар сертифицирован</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={uslugi2} alt="" width={80} height={80} />
            <div className={styles.content}>
              <h2>Оптимальный выбор</h2>
              <p>Низкие цены и широкий ассортимент</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={uslugi3} alt="" width={80} height={80} />
            <div className={styles.content}>
              <h2>Всегда рядом</h2>
              <p>Широкая сеть представительств</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={uslugi4} alt="" width={80} height={80} />
            <div className={styles.content}>
              <h2>Доставка в срок</h2>
              <p>Оперативная доставка и выгрузка товара</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
