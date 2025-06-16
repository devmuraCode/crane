import useContactModal from "@/hooks/useContactModal";
import Container from "../Container/Container";
import styles from "./TopHeader.module.scss";

const TopHeader = () => {
  const contactModal = useContactModal();
  return (
    <Container>
      <div className={styles.topHeader}>
        <div className={styles.left}>
          <div>
            <p>производство и продажа спецтехники</p>
          </div>
        </div>
        <div className={styles.center}>
          <p>
            📍 Адрес: M Fozilov jamoa xo'jaligi,
            <br /> 111109, Tashkent, Tashkent Region
          </p>
        </div>
        <div className={styles.right}>
          <p>
            📞 <strong>+998 99-853-08-53</strong>
          </p>
          <button className={styles.callButton} onClick={contactModal.onOpen}>
            Заказать звонок
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
