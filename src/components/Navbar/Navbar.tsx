"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container/Container";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import MenuItem from "./MenuList";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getequipmentTypes, getProductsByCategory } from "@/lib/api";
import { EquipmentType } from "@/lib/types";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: equipmentTypes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["equipmentTypes"],
    queryFn: getequipmentTypes,
  });

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
console.log(equipmentTypes);

  const plainEquipmentTypes =
    equipmentTypes?.map((item: EquipmentType) => ({
      id: item.id,
      label: item.name,
      slug: item.slug,
      image: item.image,
    })) || [];

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
                    {isLoading && <p>Загрузка...</p>}
                    {error && <p>Ошибка загрузки</p>}
                    {plainEquipmentTypes?.map((item: any) => (
                      <MenuItem
                        label={item.label}
                        key={item.id}
                        href={`/catalog/${item.slug}`}
                        onClick={async () => {
                          try {
                            const data = await getProductsByCategory(
                              item.label
                            );
                            queryClient.setQueryData(
                              ["productsByCategory", item.slug],
                              data
                            );
                          } catch (e) {
                            console.error(
                              "Ошибка загрузки товаров по категории"
                            );
                          }
                        }}
                      />
                    ))}
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
