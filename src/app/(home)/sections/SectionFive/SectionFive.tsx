import Container from "@/components/Container/Container";
import styles from "./SectionFive.module.scss";
import one from "@/assets/1a.jpg";
import fivee from "@/assets/gallery2.jpg";
import five from "@/assets/gallery1.jpg";
import Image from "next/image";

export const SectionFive = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Наши Работы</h1>
        <div className={styles.gallery}>
          <div className={styles.leftColumn}>
            <div className={styles.item}>
              <Image src={one} alt="Работа 1" />
            </div>
            <div className={styles.item}>
              <Image src={five} alt="Работа 2" />
            </div>
            <div className={styles.item}>
              <Image src={fivee} alt="Работа 3" />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.item}>
              <video src="./video.mp4" autoPlay={true} muted />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
