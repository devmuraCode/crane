import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./SectionOne.module.scss";

export const SectionOne = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className={styles.slide1}></CarouselItem>
        <CarouselItem className={styles.slide2}></CarouselItem>
        <CarouselItem className={styles.slide3}></CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
