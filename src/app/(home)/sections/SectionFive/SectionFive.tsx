import Container from "@/components/Container/Container";
import styles from "./SectionFive.module.scss";
import one from "@/assets/1a.jpg";
import five from "@/assets/4a.jpg";
import Image from "next/image";

export const SectionFive = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Наши Работы</h1>
        <div className={styles.gallery}>
          <div className={styles.item}>
            <Image src={one} alt="Работа 1" />
          </div>

          <div className={styles.item}>
            <Image src={five} alt="Работа 2" />
          </div>
        </div>
      </Container>
    </div>
  );
};
