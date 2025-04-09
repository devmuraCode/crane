import React from "react";
import styles from "./Footer.module.scss";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Container from "../Container/Container";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.column}>
            <h4>Компания</h4>
            <ul>
              <li>О компании</li>
              <li>Партнеры</li>
              <li>Реквизиты</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Каталог</h4>
            <ul>
              <li>Бурильно-крановые машины</li>
              <li>Автомобили с КМУ</li>
              <li>Сортиментовозы, лесовозы</li>
              <li>Эвакуаторы и автовозы</li>
              <li>Автогидроподъемники</li>
              <li>Бурильно-крановые установки</li>
              <li>Гидроманипуляторы</li>
              <li>Крановые установки</li>
              <li>Доп. оборудование и запчасти</li>
              <li>Каталог запчастей КМУ</li>
              <li>Сервис и ремонт</li>
              <li>Автомобили в наличии</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Наши контакты</h4>
            <p>
              <FaPhoneAlt /> <strong>8-800-500-27-25</strong>
            </p>
            <p>Пн. – Пт.: с 9:00 до 18:00</p>
            <p>
              <FaMapMarkerAlt /> Ташкентский район, населённый пункт Дамарык,
              улица Мустакиллик 2
            </p>
            <p>
              <FaEnvelope /> Продажа техники: <br /> sale@spectteh.ru
            </p>
            <p>
              <FaEnvelope /> Продажа запчастей: <br /> parts@spectteh.ru
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2025 Компания «СпецТехника». Все права защищены. Обращаем Ваше
            внимание на то, что данный интернет-сайт носит исключительно
            информационный характер и ни при каких условиях информационные
            материалы и цены, размещенные на сайте, не является публичной
            офертой, определяемой положениями Статьи 437 Гражданского кодекса
            РФ.
          </p>
        </div>
      </Container>
    </div>
  );
};
