"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container/Container";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import MenuItem from "./MenuList";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && wrapperRef.current) {
          wrapperRef.current.classList.add(styles.animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "Главное", href: "/" },
    { label: "Каталог", href: "/catalog" },
    { label: "Контакты", href: "/contacts" },
    { label: "О нас", href: "/about" },
  ];

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <Container>
        <div className={styles.navbar}>
          <Logo />

          <div className={styles.desktopMenu}>
            <MenuItem label={"Главное"} href={"/"} />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <p className={styles.link}>Каталог</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={styles.dropdown}>
                <div className={styles.catalog}>
                  <ul>
                    <Link href="/catalog">Автокраны</Link>
                    <Link href="/catalog">Автолифты</Link>
                    <Link href="/catalog">Траллы</Link>
                    <Link href="/catalog">Шаланды</Link>
                    <Link href="/catalog">Экскаваторы</Link>
                  </ul>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <MenuItem label={"Контакты"} href={"/contacts"} />
            <MenuItem label={"О нас"} href={"/about"} />
          </div>

          <div
            className={styles.mobileIcon}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            {menuItems.map((item) => (
              <div key={item.label} onClick={() => setMenuOpen(false)}>
                <MenuItem label={item.label} href={item.href} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
