import Container from "@/components/Container/Container";
import styles from "./SectionTwo.module.scss";

export const SectionTwo = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1>
            Наш опыт и профессионализм — это залог вашего доверия и уверенности
            в качественном и своевременном обслуживании.
          </h1>
        </div>
      </Container>
    </div>
  );
};
