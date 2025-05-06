import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import styles from "./SectionOne.module.scss";

export const SectionOne = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className={styles.slide1}>
          <div className={styles.bannerText}>
            Надёжная спецтехника для ваших задач. Аренда и услуги в Узбекистане.
            Узнайте больше!
          </div>
        </CarouselItem>
        <CarouselItem className={styles.slide2}>
          <div className={styles.bannerText}>
            Автокраны под ключ — от выбора до монтажа. Готовы к работе!
            Подробности по кнопке.
          </div>
        </CarouselItem>
        <CarouselItem className={styles.slide3}>
          <div className={styles.bannerText}>
            Эффективные решения для стройки и логистики. Аренда автокранов с
            командой. Узнайте больше!
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
