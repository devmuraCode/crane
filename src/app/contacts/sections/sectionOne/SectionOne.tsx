import Container from "@/components/Container/Container";
import styles from "./SectionOne.module.scss";

export const SectionOne = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <form className={styles.form}>
            <input type="text" placeholder="Имя" />
            <input type="tel" placeholder="Телефон номер" />
            <input type="text" placeholder="Интересующий товар/услуга" />
            <textarea placeholder="Дополнительная информация..." />
            <button type="submit">Отправить</button>
          </form>

          <div className={styles.map}>
            <iframe
              src="https://yandex.uz/map-widget/v1/profile?ll=69.164941%2C41.384859&z=14.79"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};
