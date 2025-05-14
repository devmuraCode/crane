"use client";

import Container from "@/components/Container/Container";
import styles from "./SectionSix.module.scss";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getequipmentTypes } from "@/lib/api";
import Link from "next/link";

export const SectionSix = () => {
  const {
    data: equipmentTypes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["equipmentTypes"],
    queryFn: getequipmentTypes,
  });

  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Услуги</h2>

        {isLoading && <p className={styles.status}>Загрузка...</p>}
        {error && (
          <p className={styles.status}>Произошла ошибка при загрузке данных</p>
        )}

        {!isLoading && !error && (
          <div className={styles.grid}>
            {equipmentTypes?.map((item, index) => (
              <Link
                className={styles.card}
                key={index}
                href={`/catalog/${item.name}`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.label}>{item.name}</div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
