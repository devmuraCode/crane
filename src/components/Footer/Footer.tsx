"use client";

import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Container from "../Container/Container";
import Logo from "../Navbar/Logo";
import Link from "next/link";
import axios from "axios";
import { getequipmentTypes } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import MenuItem from "../Navbar/MenuList";

export const Footer = () => {
  const {
    data: equipmentTypes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["equipmentTypes"],
    queryFn: getequipmentTypes,
  });

  const plainEquipmentTypes = equipmentTypes?.map((item: any) => ({
    id: item.id,
    slug: item.slug,
    label: item.name,
  }));

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
              <li>
                <Link href="/about">О компании</Link>
              </li>
              <li>
                <Link href="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Каталог</h4>
            <ul>
              {isLoading && <p>Загрузка...</p>}
              {error && <p>Ошибка загрузки</p>}
              {plainEquipmentTypes?.map((item: any) => (
                <MenuItem
                  label={item.label}
                  key={item.id}
                  href={`/catalog/${item.slug}`}
                />
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Наши контакты</h4>
            <p>
              <FaPhoneAlt /> <a href="tel:+998998530853">+998 99-853-08-53</a>
            </p>
            <p>
              <FaPhoneAlt />{" "}
              <a href="tel:998 97-753-06-53">+998 97-753-06-53</a>
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
