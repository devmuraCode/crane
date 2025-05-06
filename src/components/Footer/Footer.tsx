import React from "react";
import styles from "./Footer.module.scss";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Container from "../Container/Container";
import Logo from "../Navbar/Logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.column}>
            <Logo />
          </div>
          <div className={styles.column}>
            <h4>Компания</h4>
            <ul>
              <Link href={"/about"}>О компании</Link>
              <br />
              <Link href={"/contacts"}>Контакты</Link>
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
              <FaPhoneAlt /> <strong>+998 99-853-08-53</strong>
            </p>
            <p>
              <FaPhoneAlt /> <strong>+998 97-753-06-53</strong>
            </p>
            <p>Пн. – Пт.: с 9:00 до 18:00</p>
            <p>
              <FaMapMarkerAlt /> Адрес: M Fozilov jamoa xo'jaligi, 111109,
              Tashkent, Tashkent Region
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
