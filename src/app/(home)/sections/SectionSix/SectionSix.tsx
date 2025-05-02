"use client";

import Container from "@/components/Container/Container";
import styles from "./SectionSix.module.scss";
import Image from "next/image";

const services = [
  {
    title: "Автокраны",
    image: "https://dintek.ru/a/dintek/files/multifile/2353/5_1.jpg",
  },
  {
    title: "Автолифты",
    image: "https://st24.stpulscen.ru/images/product/219/710/015_original.jpg",
  },
  {
    title: "Траллы",
    image: "https://mal-meh.ru/img_hkts_bur/hktc.jpg",
  },
  {
    title: "Шаланды",
    image:
      "https://www.spetcteh.ru/upload/medialibrary/d56/d564a5d24ccaa7083dfd0c343f9f9ade.jpg",
  },
  {
    title: "Экскаваторы",
    image: "https://qsgrp.com/infusions/page_gallery/images/burovoy003.jpg",
  },
];

export const SectionSix = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Услуги</h2>
        <div className={styles.grid}>
          {services.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.label}>{item.title}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
