"use client"
import { useState } from "react";
import Container from "../Container/Container";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logo}>Logo</div>

          <div
            className={`${styles.links} ${isMobileMenuOpen ? styles.open : ""}`}
          >
            <Link href={"/"} className={styles.link}>
              Главная
            </Link>
            <Link href={"/services"} className={styles.link}>
              Услуги
            </Link>
            <Link href={"/about"} className={styles.link}>
              О нас
            </Link>
            <Link href={"/contacts"} className={styles.link}>
              Контакты
            </Link>
          </div>

          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
      </Container>
    </div>
  );
};
